"use client";

import React, { useState } from 'react';

export default function DashboardPage() {
  // Config state for the interactive generator form
  const [projName, setProjName] = useState('Project Dashboard');
  const [preset, setPreset] = useState('nextjs');
  const [techStack, setTechStack] = useState('Next.js 14, Tailwind CSS, TypeScript, Supabase, Vercel');
  const [customStyle, setCustomStyle] = useState('Strict absolute imports (@/components/*), functional state stores, use custom useAsync hook for database async fetching.');
  const [noRewrites, setNoRewrites] = useState(true);

  // Generate output instructions
  const compiledInstructions = `# GitHub Copilot & AI Custom Instructions — ${projName}

You are an expert AI software engineer. This repository is configured to use a structured, token-optimized Local Memory System.

---

## 🚀 1. Context-First Navigation (Token Optimization)

Before executing actions, crawling directories, or requesting recursive greps:
1. Load **docs/AI_CONTEXT.md** to read current codebase boundaries, stack architectures, and strict typing specifications.
2. Read **docs/AI_TASK_LOG.md** to verify active milestones, prioritized backlogs, and recent sprint histories.
3. Consult the dev environment shortcuts in **docs/AI_COMMANDS.md** for building, linting, and testing scripts.

Avoid global directories crawling. Focus your search only on module files identified in the architecture blueprint.

---

## 💻 Tech Stack & Design Blueprints
- **Main Stack**: ${techStack}
- **Coding Conventions**: ${customStyle}

---

## 🛠️ Surgical Modification Protocol
${noRewrites ? '- **Strict Surgical Edits**: You are explicitly forbidden from performing full-file rewrites. Output only precise, localized search-and-replace patches or narrow surrounding line blocks. This keeps our output token budgets small and prevents regressions.' : ''}
- Do not remove existing helper libraries, adjust unrelated modules, or change imports unless explicitly instructed.
- Ensure all modules pass compiling tasks perfectly before submitting.

---

## 🔒 Security & Safe Limits
- Sensitive configuration keys or tokens must live strictly in \`.env.local\` or \`.env\`.
- Never commit credentials to public or central repositories.
`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(compiledInstructions);
    alert('Copied to clipboard successfully! Paste this inside your project\'s .github/copilot-instructions.md file.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
          The Ultimate AI Context Engine
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-400 font-medium">
          Reduce unnecessary Copilot, Claude, and Gemini context usage while improving code correctness. Instruct AI models to read dense local repo-level memory rather than scanning files recursively.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="#builder"
            className="px-6 py-3 rounded-lg font-bold text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-lg hover:shadow-cyan-500/20"
          >
            Launch Instructions Builder
          </a>
          <a
            href="#terminal"
            className="px-6 py-3 rounded-lg font-bold text-sm border border-slate-700 hover:border-slate-600 bg-slate-900/60 hover:bg-slate-900 text-slate-300 transition-all"
          >
            Explore CLI commands
          </a>
        </div>
      </section>

      {/* Benefits Indicators */}
      <section id="about" className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-slate-800/80">
        <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30 space-y-3">
          <span className="text-3xl">🪙</span>
          <h3 className="text-lg font-bold text-cyan-400">Token Savings</h3>
          <p className="text-slate-400 text-sm">
            Swaps lengthy chat-thread context history for physical local memory files. The context stays compressed, maintaining short prompts.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30 space-y-3">
          <span className="text-3xl">🎯</span>
          <h3 className="text-lg font-bold text-emerald-400">Surgical precision edits</h3>
          <p className="text-slate-400 text-sm">
            Enforces local search-and-replace updates instead of bulk rewrites. Saves output tokens and eliminates regressions.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/30 space-y-3">
          <span className="text-3xl">🔒</span>
          <h3 className="text-lg font-bold text-indigo-400">Enterprise Context Leak Isolation</h3>
          <p className="text-slate-400 text-sm">
            Ensures client context, server parameters, and roadmap files live independently in each project repo. Never leaked back to central hosts.
          </p>
        </div>
      </section>

      {/* Terminal and CLI section */}
      <section id="terminal" className="space-y-8 bg-slate-900/50 border border-slate-800 p-8 rounded-2xl">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase tracking-widest font-black text-cyan-400">CLI Documentation</span>
          <h2 className="text-3xl font-extrabold tracking-tight">Setup with NPM Workspace CLI</h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Configure any local stack instantly with our npm CLI parser. The optimizer sets up instruction templates and local memory documents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CLI Instructions */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-200">1. Initialize Project Presets</h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Runs an interactive terminal config wizard. Automatically appends .env safety files into gitignore. Creates templates without destroying existing custom local contexts.
              </p>
              <pre className="p-3.5 rounded bg-slate-950 border border-slate-850 text-emerald-400 text-xs font-mono overflow-x-auto">
                npx @fullstack-manmohan/ai-repo-optimizer init --preset nextjs
              </pre>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-200">2. Synchronization Tasks (Safe Context Update)</h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Forces a complete refresh on general model templates and prompt instructions inside <code className="text-cyan-400 font-mono text-xs">.github/prompts/*</code>, whilst strictly skipping local data inside <code className="text-orange-400 font-mono text-xs">docs/*</code> to guarantee your custom memories are maintained.
              </p>
              <pre className="p-3.5 rounded bg-slate-950 border border-slate-850 text-emerald-400 text-xs font-mono overflow-x-auto">
                npx @fullstack-manmohan/ai-repo-optimizer sync
              </pre>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-bold text-slate-200">3. Workspace Doctor Diagnostics</h4>
              <p className="text-slate-400 text-xs sm:text-sm">
                Audits folder structures for missing configuration directives, parses markdown content to find template placeholders, verifies credential visibility, and scores optimization metrics.
              </p>
              <pre className="p-3.5 rounded bg-slate-950 border border-slate-850 text-emerald-400 text-xs font-mono overflow-x-auto">
                npx @fullstack-manmohan/ai-repo-optimizer doctor
              </pre>
            </div>
          </div>

          {/* Visual representations */}
          <div className="p-6 rounded-xl border border-slate-700/80 bg-slate-950/80 flex flex-col justify-between font-mono text-xs space-y-4 shadow-2xl">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              <span className="ml-2 text-slate-500 text-[10px]">zsh — Diagnostics Audit Panel</span>
            </div>
            <div className="space-y-2 text-slate-300">
              <p className="text-slate-500">$ npx @fullstack-manmohan/ai-repo-optimizer doctor</p>
              <p className="text-cyan-400">┌  🩺 AI Repo Optimizer Doctor Diagnostics</p>
              <p className="text-slate-400">◇  Audit scan completed!</p>
              <p className="text-emerald-400">●  Overall Repo Optimization Score: 85%</p>
              <p className="text-teal-400">[████████████████░░░░] — Highly Optimized (Good Balance)</p>
              <p className="text-slate-500">◇  Issues Detected ───────────────────────────────────────╮</p>
              <p className="text-yellow-400">│  ⚠️  Placeholder value detected in docs/AI_CONTEXT.md    │</p>
              <p className="text-slate-400">│  ❌ Missing: CLAUDE.md (customize Claude assistants)   │</p>
              <p className="text-emerald-400">│  🔒 Gitignore active. dotenv safety check: SAFE !      │</p>
              <p className="text-slate-500">├───────────────────────────────────────────────────────╯</p>
              <p className="text-cyan-400">└  Audit complete.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive form generation builder */}
      <section id="builder" className="space-y-8 bg-slate-900/30 border border-slate-800/80 p-8 rounded-2xl">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-widest font-black text-cyan-400">Interactive Constructor</span>
          <h2 className="text-3xl font-extrabold tracking-tight">Copilot Instructions Builder</h2>
          <p className="text-slate-400 text-sm">
            Don\'t want to install the CLI yet? Use this builder form to customize an optimized <code className="text-cyan-400 font-mono text-xs">copilot-instructions.md</code> file customized for your specific repository in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form control */}
          <div className="space-y-5 bg-slate-900/60 p-6 rounded-xl border border-slate-800">
            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Project Name</label>
              <input
                type="text"
                className="w-full bg-slate-950 border border-slate-700/80 rounded px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500"
                value={projName}
                onChange={(e) => setProjName(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Preset Scope</label>
                <select
                  className="w-full bg-slate-950 border border-slate-700/80 rounded px-2 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500"
                  value={preset}
                  onChange={(e) => setPreset(e.target.value)}
                >
                  <option value="nextjs">Next.js Framework</option>
                  <option value="python">Python Application</option>
                  <option value="generic">Generic Node / Other Stack</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Surgical Edits</label>
                <div className="flex items-center h-10">
                  <input
                    type="checkbox"
                    id="noRewritesCheck"
                    className="w-4 h-4 rounded text-cyan-500 bg-slate-950 border-slate-700 focus:ring-0 cursor-pointer"
                    checked={noRewrites}
                    onChange={(e) => setNoRewrites(e.target.checked)}
                  />
                  <label htmlFor="noRewritesCheck" className="ml-2 text-xs text-slate-400 cursor-pointer select-none">
                    Forbid Full Rewrites
                  </label>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Tech Stack Modules</label>
              <textarea
                rows={2}
                className="w-full bg-slate-950 border border-slate-700/80 rounded px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 font-sans"
                value={techStack}
                onChange={(e) => setTechStack(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Custom Style Rules</label>
              <textarea
                rows={3}
                className="w-full bg-slate-950 border border-slate-700/80 rounded px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 font-sans"
                value={customStyle}
                onChange={(e) => setCustomStyle(e.target.value)}
              />
            </div>
            
            <button
              onClick={copyToClipboard}
              className="w-full py-2.5 rounded font-bold text-xs uppercase tracking-widest bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-lg hover:shadow-cyan-500/10"
            >
              📋 Copy Custom Instruction Code
            </button>
          </div>

          {/* Code outputs representation */}
          <div className="flex flex-col border border-slate-750 rounded-xl bg-slate-950 overflow-hidden shadow-2xl relative">
            <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900/40">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
                <span className="text-slate-400 text-xs font-mono">.github/copilot-instructions.md</span>
              </div>
              <button
                onClick={copyToClipboard}
                className="text-xs text-cyan-400 hover:text-cyan-300 font-bold tracking-tight bg-cyan-500/10 hover:bg-cyan-500/20 px-2.5 py-1 rounded border border-cyan-500/20 transition-all"
              >
                Copy
              </button>
            </div>
            <div className="p-5 flex-1 max-h-[400px] overflow-y-auto text-xs font-mono text-slate-300 space-y-4">
              <pre className="whitespace-pre-wrap">{compiledInstructions}</pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
