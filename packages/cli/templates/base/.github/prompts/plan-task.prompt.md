# Task Initialization & Planning Prompt

Use this prompt to establish a detailed plan before editing code. It guides the model to understand context, identify target changes, and layout execution steps while saving context queries.

---

## Instructions for AI Agent

1. **Information Discovery**:
   - Locate and examine the local project memory: `docs/AI_CONTEXT.md` and `docs/AI_TASK_LOG.md`.
   - Read only the target files identified in the task description. Do not run general automated directory searches.

2. **Formulate detailed Planning**:
   - **Objectives**: Summarize the concrete goal of this session.
   - **Proposed Architectural Changes**: Identify the key target files to edit and specify what changes must be injected.
   - **Impact Mapping**: Outline if changes affect other components, APIs, or database schemas. Ensure no regressions occur.
   - **Step-by-Step Task List**: List action items in chronological order. Mark the exact file paths and lines (if known) that require surgical edits.

3. **Verify Dev Setup**:
   - Consult `docs/AI_COMMANDS.md` for proper testing, linting, and running scripts.
   - Outline how the changes will be verified (e.g. unit tests, browser testing).

4. **Output Format**:
   - Provide a clear, structured markdown plan.
   - Offer the user options if multiple execution strategies exist.
   - Do NOT produce full-scale implementation code blocks during this planning phase. Just focus on mapping the execution steps.

---

## Prompt Template to Send to Agent

```markdown
Hi! I need to implement a new task. Please do the following FIRST before writing any code:

1. Read `docs/AI_CONTEXT.md` and `docs/AI_TASK_LOG.md` to acquire our baseline architecture and current tracking progress.
2. Read the files relevant to the following request: [INSERT TASK DESCRIPTION]
3. Core planning requirements:
   - Identify the files requiring surgical edits.
   - Formulate a precise, minimal-movement step-by-step task roadmap.
   - Identify the appropriate commands from `docs/AI_COMMANDS.md` for building and testing.
4. Output your plan as a concise Markdown response for my approval.
```
