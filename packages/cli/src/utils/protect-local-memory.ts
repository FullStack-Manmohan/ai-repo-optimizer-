import path from 'path';

/**
 * List of files that represent private repo-local memory.
 * These must NEVER be overwritten during sync command execution under any circumstance.
 */
const PROTECTED_MEMORIES = [
  path.join('docs', 'AI_CONTEXT.md'),
  path.join('docs', 'AI_DECISIONS.md'),
  path.join('docs', 'AI_TASK_LOG.md'),
  path.join('docs', 'AI_COMMANDS.md'),
  path.join('docs', 'AI_CONTEXT'),
  path.join('docs', 'AI_DECISIONS'),
  path.join('docs', 'AI_TASK_LOG'),
  path.join('docs', 'AI_COMMANDS')
];

/**
 * Checks if a destination sub-path represents a protected memory file.
 */
export function isProtectedMemoryFile(destSubPath: string): boolean {
  const normalized = path.normalize(destSubPath);
  return PROTECTED_MEMORIES.some(prot => {
    const normProt = path.normalize(prot);
    return normalized === normProt || normalized.endsWith(normProt);
  });
}
