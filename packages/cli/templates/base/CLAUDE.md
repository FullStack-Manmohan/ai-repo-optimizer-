# Claude Agent & Assistant Instructions (CLAUDE.md)

This file contains tailored guidance optimized for Anthropic Claude-based clients (such as Claude Code, Cline, Roo Code, etc.) to minimize token consumption and maximize surgical edit accuracy.

---

## 🏎️ Token-saving Behaviors
- **Preserve Output Tokens**: Claude models are highly expressive but can easily generate excessive output. Be as concise as possible.
- **Surgical Replacement blocks**: When editing, declare exact search-and-replace maps. Do not output large unchanged code fragments.
- **Targeted Tool Calls**: Avoid repeated reads of the exact same multi-kilobyte files. Cache file states mentally and only perform single, precise read/write loops.

## 🧬 Architectural Patterns & Imports
- Consult `docs/AI_CONTEXT.md` to identify formatting conventions (e.g. absolute vs relative imports, tabs vs spaces, react 19 compatibility).
- Maintain rigorous typescript types: Never default to `any`. Provide full compiler integrity.
- Execute compile actions (`npx tsc --noEmit`) to verify typed modules.
