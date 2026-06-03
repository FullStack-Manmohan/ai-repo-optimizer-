import { promises as fs } from 'fs';
import path from 'path';
import * as clack from '@clack/prompts';
import { detectProject, ProjectType } from '../utils/detect-project.js';
import { findTemplatesDir, copyTemplateDir } from '../utils/copy-template.js';

interface InitOptions {
  preset?: string;
  force?: boolean;
}

export async function handleInit(targetPath: string, options: InitOptions) {
  const targetDir = targetPath ? path.resolve(targetPath) : process.cwd();
  
  clack.intro('🚀 AI Repo Optimizer Initialize');

  const spin = clack.spinner();
  spin.start('Detecting workspace configuration...');

  // 1. Detect framework type
  let presetType: ProjectType = 'generic';
  if (options.preset) {
    if (options.preset === 'nextjs' || options.preset === 'python' || options.preset === 'generic') {
      presetType = options.preset;
    } else {
      spin.stop('Invalid preset selected');
      clack.note(`Preset "${options.preset}" is not supported. Please select nextjs, python, or generic.`, 'Error');
      process.exit(1);
    }
  } else {
    presetType = await detectProject(targetDir);
  }

  spin.stop(`Detected framework: ${presetType.toUpperCase()}`);

  // Confirm preset with interactive prompt if no preset arg was explicitly provided
  let selectedPreset = presetType;
  if (!options.preset) {
    const presetChoice = await clack.select({
      message: 'Confirm project template layout preset:',
      options: [
        { value: 'nextjs', label: 'Next.js (App Router / Pages Router layouts)', hint: 'recommended for high performance Next.js apps' },
        { value: 'python', label: 'Python (venv, FastAPI, pipelines models)', hint: 'for standard Python configs' },
        { value: 'generic', label: 'Generic Node / General Stack Structure', hint: 'universal fallback' }
      ],
      initialValue: presetType
    });

    if (clack.isCancel(presetChoice)) {
      clack.outro('Setup cancelled.');
      process.exit(0);
    }
    selectedPreset = presetChoice as ProjectType;
  }

  spin.start('Locating optimization templates...');
  let templatesDir: string;
  try {
    templatesDir = await findTemplatesDir();
    spin.stop('Templates successfully resolved');
  } catch (err: any) {
    spin.stop('Error locating templates');
    clack.log.error(err.message || String(err));
    process.exit(1);
  }

  // 2. Perform file transfers
  clack.log.info('Copying baseline instructions & files...');

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
    // A) Copy Base Template
    const baseTemplateDir = path.join(templatesDir, 'base');
    await copyTemplateDir(baseTemplateDir, targetDir, {
      overwriteProtected: !!options.force,
      onCopy
    });

    // B) Copy Preset specific modifications if preset is not generic
    if (selectedPreset !== 'generic') {
      const presetTemplateDir = path.join(templatesDir, selectedPreset);
      await copyTemplateDir(presetTemplateDir, targetDir, {
        overwriteProtected: !!options.force,
        onCopy
      });
    }

    // 3. Add .env safety rule to .gitignore
    const gitignorePath = path.join(targetDir, '.gitignore');
    let updatedGitignore = false;
    try {
      let gitignoreContent = '';
      try {
        gitignoreContent = await fs.readFile(gitignorePath, 'utf8');
      } catch {
        // Doesn't exist, we will create one below and add .env rules
      }

      const envRules = ['.env', '.env.local', '.env.*.local', 'node_modules', 'dist'];
      const missingRules = envRules.filter(rule => !gitignoreContent.includes(rule));

      if (missingRules.length > 0) {
        const appendContent = `\n# AI Repo Optimizer - Safety Rules\n${missingRules.join('\n')}\n`;
        await fs.writeFile(gitignorePath, gitignoreContent + appendContent);
        updatedGitignore = true;
      }
    } catch {
      // Ignored
    }

    // 4. Output Summary
    clack.log.success('AI Context optimization successfully initialized!');

    if (copiedFiles.length > 0) {
      clack.note(
        copiedFiles.map(f => `➕ Created / Updated: ${f}`).join('\n'),
        'Files Instantiated'
      );
    }

    if (skippedFiles.length > 0) {
      clack.note(
        skippedFiles.map(f => `⚠️ Retained Existing: ${f} (use --force to overwrite)`).join('\n'),
        'Project Memory Safeguarded'
      );
    }

    if (updatedGitignore) {
      clack.log.info('🔒 Appended .env protection and dependency exclusion lists to .gitignore');
    }

    // Next steps
    clack.outro('Next Steps:\n1. Open docs/AI_CONTEXT.md and customize your system outline.\n2. In copilot or agents prompts, specify: "Read docs/AI_CONTEXT.md first".\n3. Reduce repeated context loading and keep future prompts smaller.');
  } catch (err: any) {
    clack.log.error(`Initialization failed: ${err.message || String(err)}`);
    process.exit(1);
  }
}
