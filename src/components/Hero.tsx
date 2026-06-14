import { Github, Linkedin, Mail, ArrowRight, Download, MapPin } from 'lucide-react';
import { profile } from '../data';

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 h-[460px] w-[460px] rounded-full bg-accent/15 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-accent-blue/15 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="section relative w-full">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex animate-fade-up items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to full-time roles
          </p>

          <h1 className="animate-fade-up text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
            {profile.name}
          </h1>

          <h2 className="mt-3 animate-fade-up bg-gradient-to-r from-accent via-accent-soft to-accent-blue bg-[length:200%_auto] bg-clip-text text-2xl font-bold text-transparent animate-gradient-pan md:text-4xl">
            {profile.role}
          </h2>

          <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-slate-400">
            {profile.tagline}
          </p>

          <div className="mt-4 flex animate-fade-up items-center gap-2 text-sm text-slate-500">
            <MapPin size={15} /> {profile.location}
          </div>

          <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View my work <ArrowRight size={16} />
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-ghost">
              <Download size={16} /> Download resume
            </a>
          </div>

          <div className="mt-9 flex animate-fade-up items-center gap-5">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 transition hover:text-accent">
              <Github />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 transition hover:text-accent">
              <Linkedin />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-slate-400 transition hover:text-accent">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
