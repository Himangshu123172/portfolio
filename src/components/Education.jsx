import { GraduationCap } from "lucide-react"
import education from "../data/education.js"
import Reveal from "./Reveal.jsx"

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <span className="eyebrow">education</span>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Academic Timeline
        </h2>
      </Reveal>

      <div className="relative mt-14 pl-8 sm:pl-10">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-blue)] via-[var(--color-purple)] to-transparent sm:left-[15px]" />

        <ul className="space-y-8">
          {education.map((item, i) => (
            <Reveal key={item.id} delay={i * 100} as="li">
              <div className="relative">
                <span className="absolute -left-8 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-bg)] ring-2 ring-[var(--color-purple)] sm:-left-10 sm:h-7 sm:w-7">
                  <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[var(--color-blue)] to-[var(--color-purple)]" />
                </span>

                <div className="glass glass-hover rounded-2xl p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-blue)]/20 to-[var(--color-purple)]/20 text-[var(--color-blue-soft)]">
                        <GraduationCap size={17} />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-white">
                          {item.degree}
                        </h3>
                        <p className="text-sm text-[var(--color-text-dim)]">{item.institution}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-[var(--color-text-faint)]">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-3 pl-12 text-sm text-[var(--color-text-dim)]">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
