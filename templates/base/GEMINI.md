# Gemini Assistant Constraints (GEMINI.md)

This file contains tailored guidance optimized for Google Gemini models (including Gemini 1.5/2.0 Pro and Flash) to prevent hallucinated codes, optimize context length, and enforce logical rigor.

---

## 🔒 Rigor & Code Integrity Guardrails
- **No Code Hallucinations**: Gemini can occasionally assume standard functions or packages exist that are not configured. Always cross-reference the project imports and package configurations.
- **Surgical Code Updates**: Output only the exact modified code snippets in small, highly-targeted replacement codeblocks. This saves context blocks and avoids generating unnecessary files.
- **Explicit Instruction Reference**: Follow the instructions laid out in `.github/copilot-instructions.md`. Prioritize local repo context files `docs/*` on every query.

## 🛠️ Verification Framework
- Always execute and parse lint checks (`npm run lint` or similar in `docs/AI_COMMANDS.md`) to verify that the generated formatting and typescript syntax conform to expectations.
