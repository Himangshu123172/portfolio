import { ArrowRight, Download, Mail, Sparkles } from "lucide-react"
import { useState } from "react"
import siteConfig from "../data/siteConfig.js"
import projects from "../data/projects.js"
import { internships, workshops } from "../data/experience.js"

const STATS = [
  { value: `${projects.length}+`, label: "Projects Built" },
  { value: `${internships.length}`, label: "Internships" },
  { value: `${workshops.length}`, label: "Workshops" },
]

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-32 pb-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        {/* Text column */}
        <div>
          <div className="eyebrow mb-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5">
            portfolio.init()
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>

          <p className="mt-4 max-w-xl font-display text-xl font-medium grad-text sm:text-2xl">
            {siteConfig.role}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-text-dim)] sm:text-lg">
            {siteConfig.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-purple)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(139,92,246,0.6)] transition-transform duration-300 hover:scale-[1.03]"
            >
              View My Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                if (window.location.pathname === "/contact") return
              }}
              className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-6 py-3.5 text-sm font-semibold text-white"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>

          <a
            href={siteConfig.resumeUrl}
            download
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-blue-soft)]"
          >
            <Download size={15} />
            Download Resume
          </a>

          <div className="mt-10 flex max-w-md gap-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="glass glass-hover flex-1 rounded-2xl px-4 py-4 text-center"
              >
                <p className="font-display text-2xl font-bold grad-text">{stat.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-[var(--color-text-faint)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Profile picture column */}
        <div className="relative mx-auto flex w-full max-w-xs items-center justify-center lg:max-w-sm">
          <div className="float-slow relative">
            <div className="ring-gradient absolute -inset-3 rounded-full opacity-70 blur-2xl" />
            <div className="ring-gradient absolute -inset-1.5 rounded-full opacity-90" />
            <div className="glass relative aspect-square w-64 overflow-hidden rounded-full sm:w-72 lg:w-80">
              {!imgError ? (
                <img
                  src={siteConfig.profileImage}
                  alt={`Portrait of ${siteConfig.name}`}
                  className="h-full w-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[var(--color-surface)] to-[#191927] text-[var(--color-text-faint)]">
                  <Sparkles size={40} />
                  <span className="px-6 text-center font-mono text-xs">
                    Add /assets/profile.jpg
                  </span>
                </div>
              )}
            </div>

            <div className="glass pulse-dot absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium text-white shadow-lg">
              <span className="h-2 w-2 rounded-full bg-[var(--color-blue-soft)]" />
              {siteConfig.availability}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
