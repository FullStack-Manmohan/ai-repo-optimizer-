# Python Executive Commands

Useful system scripts and commands default to Python project environments.

---

## 🚀 Virtual Environment Management
- **Create Virtual Environment**: `python -m venv .venv`
- **Activate Virtual Environment (UNIX)**: `source .venv/bin/activate`
- **Activate Virtual Environment (Windows)**: `.venv\Scripts\activate`
- **Install Dependencies**: `pip install -r requirements.txt`

## 🏗️ Execution & Running
- **Start Core Program**: `python app/main.py`
- **Start FastAPI Dev Server**: `uvicorn app.main:app --reload`

## 🩺 Code Health & Auditing
- **Pytest Suite**: `pytest`
- **Linter Checks**: `flake8 app/` or `ruff check app/`
- **Formatting Standards**: `black app/`
- **Type Safety Audit**: `mypy app/`
