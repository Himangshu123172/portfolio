import { Brain, Code, FlaskConical, GraduationCap, Lightbulb, Target } from "lucide-react"
import siteConfig from "../data/siteConfig.js"
import Reveal from "./Reveal.jsx"

const HIGHLIGHTS = [
  { icon: Brain, label: "AI & ML Interest" },
  { icon: Code, label: "Software Development" },
  { icon: FlaskConical, label: "Practical Project Experience" },
  { icon: GraduationCap, label: "Continuous Learning" },
  { icon: Lightbulb, label: "Problem Solving" },
  { icon: Target, label: "Seeking Internship / Entry-Level Roles" },
]

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -top-10 left-0 h-72 w-72 rounded-full bg-[var(--color-blue)]/10 blur-[100px]" />
      <Reveal>
        <span className="eyebrow">about</span>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Who I Am
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal delay={100} className="glass glass-hover rounded-3xl p-8 sm:p-10">
          <p className="text-base leading-relaxed text-[var(--color-text-dim)] sm:text-lg">
            {siteConfig.about}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="grid grid-cols-2 gap-4">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="glass glass-hover flex flex-col gap-3 rounded-2xl p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-blue)]/20 to-[var(--color-purple)]/20 text-[var(--color-blue-soft)]">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-medium text-white">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
