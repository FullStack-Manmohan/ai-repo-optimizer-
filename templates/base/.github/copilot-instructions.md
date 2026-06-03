# GitHub Copilot & AI Custom Instructions

You are an expert AI software engineer. This repository is configured to use a structured **Repo-Local AI Memory System** to keep the context window small, save tokens, and prevent unnecessary broad files searches.

For any task, you must observe these strict behavioral guardrails.

---

## 🚀 1. The Context-First Strategy (Save Tokens)

Before you begin crawling the workspace, searching files, or asking questions:
1. **Always read the local project memory first**:
   - Primary Context: Look for existence of `docs/AI_CONTEXT.md` and read it.
   - Ongoing Status: Look for `docs/AI_TASK_LOG.md` to see the current roadmap and active sprints.
   - Design Constraints: Look for `docs/AI_DECISIONS.md` to avoid repeating resolved discussions or violating design choices.
   - Dev Environment Shortcuts: Look for `docs/AI_COMMANDS.md` to discover run, build, test, and deploy operations.
2. **Avoid Global Searching**:
   - Unless explicitly instructed, do not execute broad global scans or trigger recursive searches across the entire project structure. This keeps the input context small, fast, and token-efficient.
   - Use specialized files retrieved in step 1 to locate specific modules directly.

---

## 🛠️ 2. Surgical Code Modification Protocol

Your coding operations must prioritize **minimal code movement & high precision**:
- **Surgical Edits Only**: Update only the exact lines necessary to implement the change safely. Do not re-write surrounding functions, refactor unrelated modules, or rewrite imports unless specifically requested.
- **Strictly No Complete-File Rewrites**: Standardize outputs to show surgical, isolated diff fragments or precise patches. This dramatically lowers output token budgets and avoids introducing regressions in surrounding modules.
- **Maintain Style & Architecture**: Align strictly with the framework guidelines documented in `docs/AI_CONTEXT.md`. Do not introduce new third-party libraries without verification.

---

## 📋 3. Dynamic Memory Keeping

When you complete a task or make an architectural decision:
- Prompt the developer to let you update `docs/AI_TASK_LOG.md` (recording task completions, next-up todos) and `docs/AI_DECISIONS.md` (defining architectural selections and trade-offs).
- Keep descriptions short, objective, and action-oriented. Do not write lengthy conversational records into the repo documentation.

---

## 🔒 4. Privacy & Safety Rule

- **Do Not Transmit Context Across Boundaries**: Never upload project memory, specific secrets, client API profiles, or local DB credentials back to public/external template locations or central repos.
- **Observe Gitignore**: Strictly protect environment vars or secret folders. If you discover potential token leaks or API keys exposed in standard files, immediately flag it for the user and help patch it.
