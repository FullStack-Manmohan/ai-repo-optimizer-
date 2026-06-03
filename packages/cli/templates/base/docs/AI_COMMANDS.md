# AI Executive Commands

List of frequently used short commands, build rules, run targets, lint protocols, and test checks for this specific project. Use these exact parameters to verify executions.

---

## 🚀 Development Tasks
- **Start Local Server**: `npm run dev` (or custom script, port 3000)
- **Local DB Command**: *E.g., docker-compose up -d*

## 🏗️ Build & Compiles
- **Compile / Packaging**: `npm run build`
- **Output Folder**: `.next/` or `dist/`

## 🩺 Code Health & Auditing
- **Lint Codebase**: `npm run lint`
- **Formatting Standards**: `npm run format` (if Prettier setup)
- **TypeScript Compiler Checks**: `npx tsc --noEmit`

## 🧪 Testing Suites
- **Unit Tests**: `npm run test`
- **E2E / Integration**: `npm run test:e2e`

## 🚢 Deploy Processes
- **Production Push**: `npm run deploy` or *Vercel build trigger*
