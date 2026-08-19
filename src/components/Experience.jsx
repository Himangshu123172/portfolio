import { Briefcase, CheckCircle2, Wrench } from "lucide-react"
import { internships, workshops } from "../data/experience.js"
import Reveal from "./Reveal.jsx"

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <span className="eyebrow">experience</span>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Internships &amp; Workshops
        </h2>
      </Reveal>

      {/* Internship timeline */}
      <div className="relative mt-14 pl-8 sm:pl-10">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-blue)] via-[var(--color-purple)] to-transparent sm:left-[15px]" />

        <ul className="space-y-8">
          {internships.map((job, i) => (
            <Reveal key={job.id} delay={i * 100} as="li">
              <div className="relative">
                <span className="absolute -left-8 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-bg)] ring-2 ring-[var(--color-blue)] sm:-left-10 sm:h-7 sm:w-7">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[var(--color-blue)] to-[var(--color-purple)]" />
                </span>

                <div className="glass glass-hover rounded-2xl p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-blue)]/20 to-[var(--color-purple)]/20 text-[var(--color-blue-soft)]">
                        <Briefcase size={17} />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-white">
                          {job.role}
                        </h3>
                        <p className="text-sm text-[var(--color-text-dim)]">{job.organization}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-[var(--color-text-faint)]">
                      {job.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2 pl-12">
                    {job.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-[var(--color-text-dim)]">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[var(--color-purple)]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      {/* Workshops */}
      <Reveal delay={100} className="mt-16">
        <h3 className="font-display text-xl font-semibold text-white">Workshops</h3>
      </Reveal>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {workshops.map((w, i) => (
          <Reveal key={w.id} delay={150 + i * 80}>
            <div className="glass glass-hover h-full rounded-2xl p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-blue)]/20 to-[var(--color-purple)]/20 text-[var(--color-blue-soft)]">
                <Wrench size={16} />
              </span>
              <h4 className="mt-4 font-display text-base font-semibold text-white">{w.name}</h4>
              <p className="mt-2 text-sm text-[var(--color-text-dim)]">{w.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
