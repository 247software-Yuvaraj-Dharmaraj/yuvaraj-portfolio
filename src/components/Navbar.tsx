import { useEffect, useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { profile } from '../data';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-lg font-bold text-white">
          YD<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline text-sm font-medium text-slate-300 hover:text-white">
              {l.label}
            </a>
          ))}
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2">
            <FileText size={16} /> Resume
          </a>
        </div>

        <button
          className="text-slate-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-primary justify-center">
              <FileText size={16} /> Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
