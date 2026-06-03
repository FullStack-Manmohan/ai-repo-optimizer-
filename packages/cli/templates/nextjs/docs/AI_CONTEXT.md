# AI Context: Next.js Project Preset

This is the architectural system reference for this Next.js project. Read this file to understand tech choices, file layouts, and execution limits.

---

## 🏗️ System Overview
- **Next.js Stack Config**: Unified React framework using either App Router or Pages Router.
- **Rendering Modes**: Server-Side Rendering (SSR), Static Site Generation (SSG), and Client-Side rendering.

## 💻 Tech Stack
- **Framework**: Next.js (App Router preferred)
- **Styling**: Tailwind CSS
- **Component Lib**: radix-ui / shadcn-ui / custom primitive components
- **State Mgmt**: Zustand or Native React Context
- **Data Fetching**: React Server Components (RSC) or SWR/React Query for client fetches

## 📂 Codebase Boundaries & Directory Layout
- `app/` — Next.js App Router root directories
  - `layout.tsx` — Global root layout, html/body providers
  - `page.tsx` — Landing page
  - `api/` — API route handlers (`route.ts`) acting as backend gateway
- `components/` — Shared UI elements
  - `ui/` — Low-level headless design system components (shadcn style)
- `lib/` — Standard helper wrappers (db, query, formatters)
- `types/` — Custom TypeScript type definitions

## ⚠️ Next.js Architectural Coding Rules
1. **Server Components by Default**: All components inside the `app/` directory are Server Components unless explicitly prepended with the `"use client"` directive. Keep state managers, event listeners, and interactive UI inside `"use client"` leaf modules.
2. **Environment Isolation**: Always use `NEXT_PUBLIC_` prefixes only for environment variables that are required on the client side. Keep backend keys, database URLs, and API tokens strictly hidden on the server (no prefix).
3. **Optimized Linkages**: Never use raw `<a>` tags for navigation. Use standard `next/link` components for seamless route prefetching and transitions.
4. **Surgical Diffs**: Always generate precise, localized line patches to conserve token budgets and keep outputs clean.
