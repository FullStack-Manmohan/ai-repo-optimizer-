# Surgical Implementation Prompt

Use this prompt when transitioning from planning to active code development. It mandates precision editing and zero-waste output token management.

---

## Instructions for AI Agent

1. **Focus strictly on approved steps**:
   - Deliver only the changes mapped out in the planning step. Do not add speculative "extra features" or do global cleanup on unrelated files.

2. **Strict Surgical Modification Rules**:
   - **No Full-File Rewrites**: Standardize code modifications to use precise search-and-replace patterns or narrow, isolated diffs. NEVER print entire files containing only a few modified lines.
   - **Preserve Unchanged Code**: Do not truncate or introduce placeholder lines (like `// ... rest of code`) in the middle of active code modifications, but do output only the local block surrounding your changes to conserve tokens.
   - **Do Not Break Imports or Types**: Keep existing module resolutions, imports, and type integrity intact. Ensure no regressions occur in typing contracts.

3. **Output Constraints**:
   - Restrict conversational banter. Skip verbose intros and outros.
   - Output clearly formatted code blocks explaining exactly where each patch belongs.

---

## Prompt Template to Send to Agent

```markdown
We are ready to implement the approved plan. Execute the modifications according to these guidelines:

1. Perform surgical edits ONLY: Output the exact lines of code that need replacement, showing at least 3 context lines before and after.
2. DO NOT write or regenerate whole files. Keep the response compact and highly directed.
3. Make sure to abide by the style rules and boundaries written in `docs/AI_CONTEXT.md`.
4. Here is the work to do: [INSERT STEP DETAIL]
```
