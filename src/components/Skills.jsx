import { BrainCircuit, Code2, Database, Globe, ShieldCheck, Users } from "lucide-react"
import skills from "../data/skills.js"
import Reveal from "./Reveal.jsx"

const ICONS = { Code2, BrainCircuit, Globe, Database, ShieldCheck, Users }

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Technical &amp; Professional Skills
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = ICONS[group.icon] || Code2
          return (
            <Reveal key={group.id} delay={i * 80}>
              <div className="glass glass-hover h-full rounded-2xl p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-blue)]/25 to-[var(--color-purple)]/25 text-[var(--color-blue-soft)]">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-white">
                    {group.category}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[var(--color-border)] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-[var(--color-text-dim)] transition-colors hover:border-[var(--color-blue-soft)]/40 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
