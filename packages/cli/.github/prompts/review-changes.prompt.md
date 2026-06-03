# Code Review & Validation Prompt

Use this prompt to audit and verify implemented changes, checking for regressions, styling alignment, and syntactical bugs.

---

## Instructions for AI Agent

1. **Verify Style & Patterns**:
   - Compare the final code changes against the engineering guidelines in `docs/AI_CONTEXT.md`.
   - Ensure variables, file naming schemes, functions, and module interfaces align perfectly.

2. **Run Diagnostics & Checks**:
   - Call proper diagnostics tool or run terminal test/lint tasks declared in `docs/AI_COMMANDS.md`.
   - Parse execution outputs to verify there are absolutely zero compile, lint, or testing environment failures.

3. **Validate Code Integrity**:
   - Scan for dead code, unused imports, console log traces, or temporary debugging strings.
   - Verify there are no logic holes, out-of-bounds calculations, unhandled async promises, or race conditions.
   - Look for security flaws (hardcoded tokens/secrets, open CORS, unsafe injections).

---

## Prompt Template to Send to Agent

```markdown
Please review our recent code changes. Provide a thorough, critical assessment pointing out any issues or confirm everything is pristine:

1. Validate against `docs/AI_CONTEXT.md` design patterns.
2. Execute the verification commands found in `docs/AI_COMMANDS.md` (like test and lint commands) to inspect for any compile, type, or lint errors.
3. Review whether any temporary logs, unused imports, or formatting regressions have slipped into the codebase.
4. Report back with an explicit checklist showing approval status or specific corrections needed.
```
