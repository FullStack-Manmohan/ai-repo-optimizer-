# AI Memory Maintenance Prompt

Use this prompt to automatically compile session learning points and update project logbooks once the implementation and testing are complete.

---

## Instructions for AI Agent

1. **Locate Target Log Files**:
   - Inspect files: `docs/AI_TASK_LOG.md` and `docs/AI_DECISIONS.md`.

2. **Summarize Session Information**:
   - **New Completed Sprints**: Identify completed tasks and migrate them from the "In Progress" or "To Do" queues directly to the historical completed lists in `docs/AI_TASK_LOG.md`. Add exact dates.
   - **Architectural or Design Decisions**: If any major design patterns were altered or selected (e.g. database schema change, library added, folder layout adjusted), write a short logical trade-off summary (the Problem, chosen Solution, and trade-offs) into `docs/AI_DECISIONS.md`.
   - **Revised Configurations / Setup Commands**: If any scripts, environments, or tool dependencies were changed, update `docs/AI_COMMANDS.md`.

3. **Output Restraints**:
   - Keep entries highly structural, compact, and concise. Avoid detailed explanations.
   - Use clean, simple markdown tables or lists.

---

## Prompt Template to Send to Agent

```markdown
We successfully completed our development goals. Please perform maintenance on our local project memory:

1. Update `docs/AI_TASK_LOG.md` by marking our completed tasks as successfully resolved.
2. If we formulated any architectural decisions, design shifts, or chose specific library configurations, record them safely as a chronological log entry in `docs/AI_DECISIONS.md`.
3. If new run, test, or deploy scripts are active, update `docs/AI_COMMANDS.md`.
4. Keep all changes clean, minimal, and highly professional to save tokens for our future sessions!
```
