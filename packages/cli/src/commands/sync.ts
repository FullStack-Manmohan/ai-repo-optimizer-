import path from 'path';
import * as clack from '@clack/prompts';
import { findTemplatesDir, copyTemplateDir } from '../utils/copy-template.js';

interface SyncOptions {
  force?: boolean;
}

export async function handleSync(targetPath: string, options: SyncOptions) {
  const targetDir = targetPath ? path.resolve(targetPath) : process.cwd();

  clack.intro('🔄 AI Repo Optimizer Sync');
  const spin = clack.spinner();
  spin.start('Resolving central template library...');

  let templatesDir: string;
  try {
    templatesDir = await findTemplatesDir();
    spin.stop('Templates successfully resolved');
  } catch (err: any) {
    spin.stop('Error locating templates');
    clack.log.error(err.message || String(err));
    process.exit(1);
  }

  clack.log.info('Syncing global prompts & instruction modules...');

  const copiedFiles: string[] = [];
  const skippedFiles: string[] = [];

  const onCopy = (src: string, dest: string, skipped: boolean) => {
    const rel = path.relative(targetDir, dest);
    if (skipped) {
      skippedFiles.push(rel);
    } else {
      copiedFiles.push(rel);
    }
  };

  try {
    // We only copy elements from the templates 'base' module,
    // and we NEVER overwrite local docs files unless --force is specified.
    // However, during standard sync, we strictly want to preserve docs/* (which are protected memory files)
    const baseTemplateDir = path.join(templatesDir, 'base');
    
    await copyTemplateDir(baseTemplateDir, targetDir, {
      overwriteProtected: !!options.force, // Strictly protect docs/* unless forced (which is not typical unless explicit)
      onCopy
    });

    // Provide a beautiful complete report
    clack.log.success('Synchronization completed!');

    const actualUpdates = copiedFiles.filter(f => !f.startsWith('docs/'));
    const protectedRetained = skippedFiles.filter(f => f.startsWith('docs/'));

    if (actualUpdates.length > 0) {
      clack.note(
        actualUpdates.map(f => `🔄 Synchronized: ${f}`).join('\n'),
        'Global Guidelines Refreshed'
      );
    } else {
      clack.log.info('Global guidelines are already up-to-date.');
    }

    if (protectedRetained.length > 0) {
       clack.note(
         protectedRetained.map(f => `🔒 Isolated: ${f}`).join('\n'),
         'Local Project Memory Safeguarded'
       );
    }

    clack.outro('Synchronization completed successfully. Ready to compute!');
  } catch (err: any) {
    clack.log.error(`Sync failed: ${err.message || String(err)}`);
    process.exit(1);
  }
}
