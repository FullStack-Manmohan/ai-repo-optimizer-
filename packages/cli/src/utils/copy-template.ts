import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { isProtectedMemoryFile } from './protect-local-memory.js';

/**
 * Traverses up from current script directory to find the templates folder.
 */
export async function findTemplatesDir(): Promise<string> {
  const currentFilePath = fileURLToPath(import.meta.url);
  let currentDir = path.dirname(currentFilePath);

  while (currentDir !== path.parse(currentDir).root) {
    const candidatePath = path.join(currentDir, 'templates');
    try {
      const stats = await fs.stat(candidatePath);
      if (stats.isDirectory()) {
        // Confirm it has base
        await fs.access(path.join(candidatePath, 'base'));
        return candidatePath;
      }
    } catch {
      // Ignore and keep traversing
    }

    // Also look for templates up one level if we are inside packages/cli/dist or src
    const parentCandidate = path.join(currentDir, '..', 'templates');
    try {
      const stats = await fs.stat(parentCandidate);
      if (stats.isDirectory()) {
         await fs.access(path.join(parentCandidate, 'base'));
         return parentCandidate;
      }
    } catch {
      // Ignore
    }

    currentDir = path.dirname(currentDir);
  }

  throw new Error('Templates directory not found in package tree.');
}

/**
 * Recursively copies a directory from src to dest.
 * If overwriteProtected is false, skips overwriting any isProtectedMemoryFile files.
 */
export async function copyTemplateDir(
  srcDir: string,
  destDir: string,
  options: {
    overwriteProtected: boolean;
    onCopy?: (src: string, dest: string, skipped: boolean) => void;
  }
): Promise<void> {
  const entries = await fs.readdir(srcDir, { withFileTypes: true });

  await fs.mkdir(destDir, { recursive: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      await copyTemplateDir(srcPath, destPath, options);
    } else {
      const relativeDest = path.relative(process.cwd(), destPath);
      const isProtected = isProtectedMemoryFile(relativeDest);

      if (isProtected && !options.overwriteProtected) {
        // Check if destination already exists
        let exists = false;
        try {
          await fs.access(destPath);
          exists = true;
        } catch {
          // Doesn't exist
        }

        if (exists) {
          options.onCopy?.(srcPath, destPath, true);
          continue; // SKIP overwriting existing protected memory file!
        }
      }

      // Ensure directory exists for the file
      await fs.mkdir(path.dirname(destPath), { recursive: true });
      
      // Read source and write to destination
      try {
        const fileContent = await fs.readFile(srcPath);
        await fs.writeFile(destPath, fileContent);
        options.onCopy?.(srcPath, destPath, false);
      } catch (err) {
        console.error(`Error copying from ${srcPath} to ${destPath}:`, err);
      }
    }
  }
}
