import { ExternalLink, Sparkles } from "lucide-react"
import { GithubIcon } from "./BrandIcons.jsx"

export default function ProjectCard({ project }) {
  const { title, description, technologies = [], image, github, liveDemo } = project

  return (
    <article className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-2xl">
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-[var(--color-surface)] to-[#161624]">
        {image ? (
          <img
            src={image}
            alt={`${title} preview`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-[var(--color-text-faint)]">
            <Sparkles size={26} />
            <span className="font-mono text-[11px]">Add project image</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/70 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-text-dim)]">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-[var(--color-blue-soft)]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <ProjectLink href={github} icon={GithubIcon} label="GitHub" />
          <ProjectLink href={liveDemo} icon={ExternalLink} label="Live Demo" />
        </div>
      </div>
    </article>
  )
}

function ProjectLink({ href, icon: Icon, label }) {
  if (!href) {
    return (
      <span
        className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] px-3 py-2.5 text-xs font-medium text-[var(--color-text-faint)] opacity-60"
        title={`${label} link coming soon`}
      >
        <Icon size={14} />
        {label}
      </span>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] px-3 py-2.5 text-xs font-medium text-white transition-colors hover:border-[var(--color-blue-soft)]/50 hover:bg-white/5"
    >
      <Icon size={14} />
      {label}
    </a>
  )
}
