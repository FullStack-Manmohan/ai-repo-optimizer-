#!/usr/bin/env node

import { Command } from 'commander';
import { handleInit } from './commands/init.js';
import { handleSync } from './commands/sync.js';
import { handleDoctor } from './commands/doctor.js';

const program = new Command();

program
  .name('ai-repo-optimizer')
  .description('NPM-driven CLI to install and sync token-optimized, secure repo-local AI context configurations')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize safe project-local AI context files')
  .argument('[targetPath]', 'Target directory to initialize optimizer in', '')
  .option('-p, --preset <type>', 'Force project layout preset (nextjs, python, generic)')
  .option('-f, --force', 'Force copying / overwriting existing local docs/ files (use with care)', false)
  .action(async (targetPath, options) => {
    try {
      await handleInit(targetPath, options);
    } catch (err) {
      console.error('Fatal initialization failure:', err);
      process.exit(1);
    }
  });

program
  .command('sync')
  .description('Synchronize and update central shared AI instruction files')
  .argument('[targetPath]', 'Target directory to update instructions in', '')
  .option('-f, --force', 'Force overwrite of protected files', false)
  .action(async (targetPath, options) => {
    try {
      await handleSync(targetPath, options);
    } catch (err) {
      console.error('Fatal synchronization failure:', err);
      process.exit(1);
    }
  });

program
  .command('doctor')
  .description('Audit configuration setup and report safety score')
  .argument('[targetPath]', 'Target directory to analyze', '')
  .action(async (targetPath) => {
    try {
      await handleDoctor(targetPath);
    } catch (err) {
      console.error('Diagnostic error:', err);
      process.exit(1);
    }
  });

program.parse(process.argv);
