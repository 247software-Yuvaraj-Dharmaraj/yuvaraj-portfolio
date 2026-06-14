import { experience } from '../data';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <p className="section-kicker">02 — Experience</p>
        <h2 className="section-title">Where I've worked</h2>
      </Reveal>

      <div className="mt-12 space-y-4">
        {experience.map((item, i) => (
          <Reveal key={item.company} delay={i * 100}>
            <div className="card group p-6 hover:border-accent/30 hover:bg-white/[0.05] md:p-8">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <p className="text-accent">
                    {item.company} <span className="text-slate-500">· {item.type}</span>
                  </p>
                </div>
                <span className="shrink-0 font-mono text-sm text-slate-500">{item.period}</span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {item.points.map((p, idx) => (
                  <li key={idx} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
