# AI Context: Python Project Preset

This is the architectural system reference for this Python project. Read this file to understand tech choices, file layouts, and execution limits.

---

## 🏗️ System Overview
- **Python Project Setting**: Structured Python environment utilizing modern dependency management (pip, venv, poetry, or conda).
- **Application Scope**: Web servers (FastAPI/Flask), automation microscripts, data science suites, or AI/ML pipelines.

## 📂 Codebase Boundaries & Directory Layout
- `app/` (or `src/`) — Core application code
  - `main.py` — Main program execution entrypoint
  - `config.py` — Central environment variables and configurations parser (e.g. using Pydantic Settings)
- `tests/` — Testing folder
- `requirements.txt` (or `pyproject.toml`) — Standard packages definition

## ⚠️ Python Coding Rules
1. **Strong Typing & Hints**: Always use typing hints (`from typing import List, Optional, Dict`) for all function definitions and parameters. Use static models or validator modules (like Pydantic) to validate interface inputs.
2. **Standard Code Style**: Group code layouts according to PEP 8. Use standard import placements (stdlib first, third-party libraries, then local modules).
3. **Environment Security**: Sensitive keys and database links must live purely in `.env`. Load them using dotenv or private parser. NEVER commit raw credentials.
4. **Error Handling**: Use explicitly typed exceptions (`try ... except ValueError ...`). Avoid generic bare `except:` statements.
