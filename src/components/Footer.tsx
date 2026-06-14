import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-slate-500 sm:flex-row">
        <p>© 2026 {profile.name}</p>
        <p className="font-mono">
          Built with React · TypeScript · Tailwind CSS · Vite
        </p>
      </div>
    </footer>
  );
}
