import { skillGroups } from '../data';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <p className="section-kicker">04 — Skills</p>
        <h2 className="section-title">My toolkit</h2>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={(i % 3) * 100}>
            <div className="card h-full p-6 hover:border-accent/30">
              <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-accent">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span key={s} className="chip hover:border-accent/40 hover:text-white">
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
