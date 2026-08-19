import { Link } from "react-router-dom"
import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./BrandIcons.jsx"
import siteConfig from "../data/siteConfig.js"

const FOOTER_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Experience", to: "/#experience" },
  { label: "Projects", to: "/#projects" },
  { label: "Documents", to: "/documents" },
  { label: "Contact", to: "/contact" },
]

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div>
            <p className="font-display text-xl font-semibold text-white">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-[var(--color-text-dim)]">
              AI/ML Enthusiast | Software Developer
            </p>
            <div className="mt-4 flex items-center gap-3">
              <SocialIcon href={siteConfig.socials.github.url} label="GitHub">
                <GithubIcon size={18} />
              </SocialIcon>
              <SocialIcon href={siteConfig.socials.linkedin.url} label="LinkedIn">
                <LinkedinIcon size={18} />
              </SocialIcon>
              <SocialIcon href={`mailto:${siteConfig.email}`} label="Email">
                <Mail size={18} />
              </SocialIcon>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-3">
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-[var(--color-text-dim)] transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-[var(--color-border)] pt-6 text-center text-xs text-[var(--color-text-faint)]">
          © 2026 Himangshu Mondal. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ href, label, children }) {
  const disabled = !href
  const commonClasses =
    "flex h-10 w-10 items-center justify-center rounded-xl glass text-[var(--color-text-dim)] transition-all duration-300 hover:text-white hover:border-[var(--color-blue-soft)]/50"

  if (disabled) {
    return (
      <span
        className={`${commonClasses} cursor-not-allowed opacity-40`}
        title={`${label} link not added yet`}
        aria-disabled="true"
      >
        {children}
      </span>
    )
  }

  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={label}
      className={commonClasses}
    >
      {children}
    </a>
  )
}
