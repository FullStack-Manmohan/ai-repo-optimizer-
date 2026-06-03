# AI Decisions Log

Chronological track of design, architectural, dependency, and trade-off choices resolved during development. Do not repeat discussions that have been finalized here.

---

## [YYYY-MM-DD] Choice of State Manager / Core Library
- **Context**: Describe briefly the problem or the feature we were implementing (e.g., choice of library, structure change).
- **Options Evaluated**: 
  - Option A: (e.g. Redux Toolkit) - *Reason why skipped*
  - Option B: (e.g. Zustand) - *Reason / Core value*
- **Resolution**: Selected Zustand for lightweight reactive client-side store with minimal boilerplate.
- **Consequences**: No global Redux providers required; simpler tests; states live in `src/store`.

---

## [YYYY-MM-DD] database scheme or API structure change
- **Context**: 
- **Options Evaluated**: 
- **Resolution**: 
- **Consequences**: 
