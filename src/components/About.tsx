import { CheckCircle2, GraduationCap, Trophy } from 'lucide-react';
import { about, stats, education, achievements } from '../data';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <p className="section-kicker">01 — About</p>
        <h2 className="section-title">A bit about me</h2>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="space-y-5 text-lg leading-relaxed text-slate-400">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {about.highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 size={18} className="shrink-0 text-accent" /> {h}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card p-5">
                <div className="bg-gradient-to-r from-accent to-accent-blue bg-clip-text text-3xl font-extrabold text-transparent">
                  {s.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="card h-full p-6">
            <div className="mb-3 flex items-center gap-2 text-accent">
              <GraduationCap size={18} /> <span className="text-sm font-semibold uppercase tracking-wide">Education</span>
            </div>
            <h3 className="font-semibold text-white">{education.school}</h3>
            <p className="mt-1 text-sm text-slate-400">{education.degree}</p>
            <p className="mt-2 font-mono text-sm text-slate-500">
              {education.period} · {education.grade}
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card h-full p-6">
            <div className="mb-3 flex items-center gap-2 text-accent">
              <Trophy size={18} /> <span className="text-sm font-semibold uppercase tracking-wide">Achievements</span>
            </div>
            <ul className="space-y-3">
              {achievements.map((a) => (
                <li key={a} className="flex gap-2 text-sm text-slate-300">
                  <span className="text-accent">▹</span> {a}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
