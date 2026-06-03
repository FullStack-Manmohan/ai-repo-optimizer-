import { promises as fs } from 'fs';
import path from 'path';
import * as clack from '@clack/prompts';

interface AuditMetric {
  name: string;
  exists: boolean;
  scoreImpact: number;
  critical: boolean;
  recommendation?: string;
}

export async function handleDoctor(targetPath: string) {
  const targetDir = targetPath ? path.resolve(targetPath) : process.cwd();

  clack.intro('🩺 AI Repo Optimizer Doctor Diagnostics');
  const spin = clack.spinner();
  spin.start('Auditing local workspace alignment...');

  // Setup core metrics to audit
  const metrics: AuditMetric[] = [
    {
      name: '.github/copilot-instructions.md',
      exists: false,
      scoreImpact: 20,
      critical: true,
      recommendation: 'Run "ai-repo-optimizer init" to deploy basic Copilot instructions.'
    },
    {
      name: 'docs/AI_CONTEXT.md',
      exists: false,
      scoreImpact: 25,
      critical: true,
      recommendation: 'Create docs/AI_CONTEXT.md to define the core module boundaries, libraries, and coding rules.'
    },
    {
      name: 'docs/AI_TASK_LOG.md',
      exists: false,
      scoreImpact: 15,
      critical: false,
      recommendation: 'Add docs/AI_TASK_LOG.md to maintain ongoing active task progress and keep chatbot threads clean.'
    },
    {
      name: 'docs/AI_DECISIONS.md',
      exists: false,
      scoreImpact: 10,
      critical: false,
      recommendation: 'Deploy docs/AI_DECISIONS.md to record engineering architectural decisions chronologically.'
    },
    {
      name: 'docs/AI_COMMANDS.md',
      exists: false,
      scoreImpact: 10,
      critical: false,
      recommendation: 'Add docs/AI_COMMANDS.md specifying short actions for building, linting, and testing.'
    },
    {
      name: 'AGENTS.md',
      exists: false,
      scoreImpact: 5,
      critical: false,
      recommendation: 'Deploy AGENTS.md to standardise task planning rules for autonomous developers.'
    },
    {
      name: 'CLAUDE.md',
      exists: false,
      scoreImpact: 5,
      critical: false,
      recommendation: 'Create CLAUDE.md to customize behavior for Anthropic Claude engines.'
    },
    {
      name: 'GEMINI.md',
      exists: false,
      scoreImpact: 5,
      critical: false,
      recommendation: 'Create GEMINI.md to constraint hallucinated modules for Google Gemini agents.'
    }
  ];

  let calculatedScore = 0;
  let hasLeakRisk = false;
  const issuesFound: string[] = [];

  // 1. Audit core file existence
  for (const metric of metrics) {
    const fullPath = path.join(targetDir, metric.name);
    try {
      await fs.access(fullPath);
      metric.exists = true;
      calculatedScore += metric.scoreImpact;

      // Check if file is still an empty placeholder template
      const content = await fs.readFile(fullPath, 'utf8');
      if (content.includes('<PROJECT_NAME>') || content.includes('<PROJECT_NAME_OR_CLIENT>')) {
        issuesFound.push(`⚠️  Placeholder value detected in ${metric.name} — Please populate your project specifics!`);
        // Reduce slightly for placeholders
        calculatedScore -= Math.round(metric.scoreImpact * 0.3);
      }
    } catch {
      metric.exists = false;
      issuesFound.push(`❌ Missing: ${metric.name} — ${metric.recommendation}`);
    }
  }

  // 2. Scan security for credential exposure
  const gitignorePath = path.join(targetDir, '.gitignore');
  let hasGitignore = false;
  try {
    const gitignoreContent = await fs.readFile(gitignorePath, 'utf8');
    hasGitignore = true;
    
    // Check if common dotenv configurations are hidden from git
    if (!gitignoreContent.includes('.env')) {
      hasLeakRisk = true;
      issuesFound.push('❌ SECURITY LEAK RISK: ".env" files are not excluded/hidden in your .gitignore! Ensure sensitive environment profiles are ignored.');
    }
  } catch {
    hasLeakRisk = true;
    issuesFound.push('❌ SECURITY LEAK RISK: No .gitignore found! Sensitive local dev databases or keys might leak to origin.');
  }

  if (hasGitignore) {
    calculatedScore += 5; // Extra 5% for safe git configurations
  }

  // Hard clamp score between 0 and 100
  calculatedScore = Math.max(0, Math.min(calculatingMaxScore(calculatedScore, hasLeakRisk), 100));

  spin.stop('Audit scan completed!');

  // Print results
  clack.log.info(`Overall Repo Optimization Score: ${calculatedScore}%`);
  
  // Custom status bar representation
  const progressBar = getProgressBar(calculatedScore);
  clack.log.info(progressBar);

  if (issuesFound.length > 0) {
    clack.note(
      issuesFound.join('\n'),
      'Issues & Recommendations Detected'
    );
  } else {
    clack.log.success('🎉 Perfect! Your repository is highly optimized and context-secured. Excellent work!');
  }

  clack.outro('Audit complete.');
}

function calculatingMaxScore(score: number, leaks: boolean): number {
  if (leaks) {
    return Math.min(score, 60); // Cap optimization score to 60 if credentials leak risk exists!
  }
  return score;
}

function getProgressBar(score: number): string {
  const width = 20;
  const charsCount = Math.round((score / 100) * width);
  const filled = '█'.repeat(charsCount);
  const empty = '░'.repeat(width - charsCount);
  
  let scaleText = 'Needs Work';
  if (score >= 90) scaleText = 'Highly Optimized (Excellent)';
  else if (score >= 70) scaleText = 'Good Balance';
  else if (score >= 40) scaleText = 'Medium Optimization';

  return `[${filled}${empty}] — ${scaleText}`;
}
