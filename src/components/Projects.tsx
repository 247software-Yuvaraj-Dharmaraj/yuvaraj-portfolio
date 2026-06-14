import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data';
import Reveal from './Reveal';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal>
        <p className="section-kicker">03 — Projects</p>
        <h2 className="section-title">Things I've built</h2>
        <p className="mt-2 max-w-2xl text-slate-400">
          End-to-end full-stack projects — each with a live demo and source code.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-7 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 120}>
            <article className="card group flex h-full flex-col overflow-hidden hover:border-accent/30">
              {p.live ? (
                <a href={p.live} target="_blank" rel="noreferrer" className="relative block overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden bg-ink-850">
                    <img
                      src={p.image}
                      alt={`${p.name} screenshot`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-ink-950/80 px-3 py-1 text-xs font-medium text-accent-soft opacity-0 backdrop-blur transition group-hover:opacity-100">
                    Live demo <ArrowUpRight size={13} />
                  </span>
                </a>
              ) : (
                <div className="relative block overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden bg-ink-850">
                    <img
                      src={p.image}
                      alt={`${p.name} preview`}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-white">{p.name}</h3>
                <p className="text-sm font-medium text-accent">{p.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.description}</p>

                <ul className="mt-4 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-xs text-slate-400">
                      <span className="text-accent">▹</span> {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent">
                      <ExternalLink size={15} /> Live demo
                    </a>
                  )}
                  <a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 hover:text-accent">
                    <Github size={15} /> Code
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
