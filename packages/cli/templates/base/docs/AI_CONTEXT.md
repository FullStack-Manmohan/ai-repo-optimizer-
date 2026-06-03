# AI Context: <PROJECT_NAME_OR_CLIENT>

This is the central blueprint representing the architectural truth and constraints of this repository. AI models must read this file first before executing task actions.

---

## 🏗️ System Overview
*Provide a concise 1-2 sentence description of what this application does.*
- **System Purpose**: 
- **User Personas**: 
- **Core Business Logic**: 

## 💻 Tech Stack
- **Frontend**: 
- **Backend / API**: 
- **Database / Cache**: 
- **Infras / Deployment**: 
- **State Management & Routing**: 

## 📂 Codebase Boundaries & Directory Layout
- `src/` — Main source tree
  - `components/` — *What goes here?*
  - `pages/` (or `app/`) — *Describe routing model*
  - `services/` — *API integration / Database layer*
  - `utils/` — *Pure helper modules*

## ⚠️ Key Engineering Guidelines & Architectural Rules
1. **Rule 1 (State & Data)**: 
2. **Rule 2 (Styling & CSS)**: 
3. **Rule 3 (Type Conventions)**: 
4. **Rule 4 (No Prohibited Practices)**: *E.g., No standard console.log in prod code, no any types, etc.*

## 🔒 Security & Privacy Limits
- **Secrets Management**: All sensitive environment parameters live strictly in `.env.local` or `.env`. This must never be committed to git.
- **Third-Party Data Flow**: *E.g. external API profiles, webhook rules, or database access constraints*
