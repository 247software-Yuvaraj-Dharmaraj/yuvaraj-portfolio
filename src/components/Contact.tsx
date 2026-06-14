import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { profile } from '../data';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <Reveal>
        <div className="card relative overflow-hidden p-10 text-center md:p-16">
          <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/15 blur-[110px]" />
          <p className="section-kicker justify-center">05 — Contact</p>
          <h2 className="section-title">Let's build something together</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            I'm open to full-time Software Engineer / Frontend / Full-Stack roles. Have an opportunity or just want to
            connect? My inbox is always open.
          </p>

          <a href={`mailto:${profile.email}`} className="btn-primary mx-auto mt-8">
            <Mail size={16} /> {profile.email} <ArrowRight size={16} />
          </a>

          <div className="mt-8 flex items-center justify-center gap-6">
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
      </Reveal>
    </section>
  );
}
