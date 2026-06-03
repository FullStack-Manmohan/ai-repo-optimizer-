import { promises as fs } from 'fs';
import path from 'path';

export type ProjectType = 'nextjs' | 'python' | 'generic';

/**
 * Automatically inspects the current directory to classify the project preset type.
 */
export async function detectProject(targetDir: string = process.cwd()): Promise<ProjectType> {
  try {
    // 1. Check for Next.js signs (next.config.js/mjs/ts or deps in package.json)
    const packageJsonPath = path.join(targetDir, 'package.json');
    let hasPackageJson = false;

    try {
      await fs.access(packageJsonPath);
      hasPackageJson = true;
    } catch {
      // No package.json
    }

    if (hasPackageJson) {
      const pJsonStr = await fs.readFile(packageJsonPath, 'utf8');
      const pJson = JSON.parse(pJsonStr);
      
      const allDeps = {
        ...(pJson.dependencies || {}),
        ...(pJson.devDependencies || {})
      };

      if (allDeps['next']) {
        return 'nextjs';
      }
    }

    // Checking for next config file directly
    const nextConfigFiles = ['next.config.js', 'next.config.mjs', 'next.config.ts'];
    for (const file of nextConfigFiles) {
      try {
        await fs.access(path.join(targetDir, file));
        return 'nextjs';
      } catch {
        // Ignored
      }
    }

    // 2. Check for Python indicators
    const pythonFiles = ['requirements.txt', 'pyproject.toml', 'Pipfile', 'manage.py', 'setup.py'];
    for (const file of pythonFiles) {
      try {
        await fs.access(path.join(targetDir, file));
        return 'python';
      } catch {
        // Ignored
      }
    }

    // Check if there are multiple .py files
    try {
      const files = await fs.readdir(targetDir);
      const pyFiles = files.filter(f => f.endsWith('.py'));
      if (pyFiles.length > 0) {
        return 'python';
      }
    } catch {
      // Ignored
    }

    return 'generic';
  } catch (err) {
    return 'generic';
  }
}
