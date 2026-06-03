# AI Repo Optimizer 🚀

Centralized AI repository optimizer for GitHub Copilot, Cursor, Gemini, and Claude. Keeps your development context precise, reduces unnecessary input/output token usage, and prevents context leakage across organizations.

## Structure

```
ai-repo-optimizer/
  app/                         # Next.js documentation/dashboard
  components/                  # React dashboard components
  lib/                         # Dashboard shared utilities

  packages/
    cli/                       # The @fullstack-manmohan/ai-repo-optimizer CLI
      src/
        commands/              # init, sync, doctor
        utils/                 # helper modules

  templates/                   # Optimization templates
    base/                      # Universal baseline instruction system
    nextjs/                    # Customized docs preset for Next.js stack
    python/                    # Customized docs preset for Python applications
```

## How It Works

Instead of letting AI models scan the whole project or burn credits rebuilding context from scratch, this system establishes a **two-layered structure**:

1. **Layer 1: Global AI Instructions (Central template to repo-level sync)**
   - Deploys `.github/copilot-instructions.md`, custom prompts (`.github/prompts/*`), and model parameters (`AGENTS.md`, `CLAUDE.md`, `GEMINI.md`).
   - Standardizes guidelines such as *Surgical and Local Patches Over Full-File Rewrites* and *Stop Workspace Crawlers*.
2. **Layer 2: Local Project Memory (Isolated, local-only)**
   - Initialized once but **never synchronized or overwritten** during sync ops.
   - Preserves private local project specifics in `docs/AI_CONTEXT.md`, `docs/AI_DECISIONS.md`, `docs/AI_TASK_LOG.md`, and `docs/AI_COMMANDS.md`.

## Installation & Setup

Install the context engine in any target project repository:

```bash
npx @fullstack-manmohan/ai-repo-optimizer init --preset nextjs
```

Or run the doctor tool to audit configurations:

```bash
npx @fullstack-manmohan/ai-repo-optimizer doctor
```

Synchronize updated global prompts without overwriting local custom histories:

```bash
npx @fullstack-manmohan/ai-repo-optimizer sync
```

## Privacy & Organization Safety

- Personal and Client/Org boundaries are preserved.
- Local custom logic details (`docs/*`) are kept strictly local to separate environments.
- Core commands are fully deterministic and run entirely offline.
# ai-repo-optimizer-
