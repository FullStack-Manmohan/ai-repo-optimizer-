import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'AI Repo Optimizer | Token-Saving Context Control Center',
  description: 'Manage, customize, and install project-local AI memory architectures seamlessly.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#0b0f19] text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-900">
        <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#0b0f19]/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 text-slate-950 font-black text-xl shadow-lg shadow-cyan-500/20">
                🚀
              </span>
              <div>
                <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  AI REPO OPTIMIZER
                </span>
                <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  v1.0
                </span>
              </div>
            </div>
            <nav className="flex items-center gap-6">
              <a href="#about" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">How It Works</a>
              <a href="#templates" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Templates</a>
              <a href="#builder" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Instructions Builder</a>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="border-t border-slate-800 bg-[#070a12] py-8 text-center text-xs text-slate-500">
          <p>© 2026 AI Repo Optimizer. Designed for GitHub Copilot, Cursor, Claude, and Gemini.</p>
          <p className="mt-1 bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent font-medium">Empowering highly accurate senior developer agents at minimal cost.</p>
        </footer>
      </body>
    </html>
  );
}
