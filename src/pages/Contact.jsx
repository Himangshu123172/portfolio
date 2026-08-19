import { Mail, MapPin, Phone } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "../components/BrandIcons.jsx"
import siteConfig from "../data/siteConfig.js"
import ContactForm from "../components/ContactForm.jsx"
import Reveal from "../components/Reveal.jsx"

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <Reveal>
        <span className="eyebrow">contact</span>
        <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Let&apos;s Build Something
        </h1>
        <p className="mt-4 max-w-2xl text-[var(--color-text-dim)]">
          Open to internship and entry-level opportunities in AI/ML and software development.
          Reach out and I&apos;ll get back to you as soon as I can.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal delay={80} className="space-y-4">
          <ContactRow icon={Mail} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
          <ContactRow icon={Phone} label="Phone" value={siteConfig.phone} href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} />
          <ContactRow icon={MapPin} label="Location" value={siteConfig.location} />
          <ContactRow
            icon={LinkedinIcon}
            label="LinkedIn"
            value={siteConfig.socials.linkedin.label}
            href={siteConfig.socials.linkedin.url}
            placeholder="[Add LinkedIn URL]"
          />
          <ContactRow
            icon={GithubIcon}
            label="GitHub"
            value={siteConfig.socials.github.label}
            href={siteConfig.socials.github.url}
            placeholder="[Add GitHub URL]"
          />

          <div className="glass mt-6 rounded-2xl p-6">
            <p className="font-display text-base font-semibold text-white">
              Available for internship &amp; entry-level roles
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-dim)]">
              Currently a 4th-year CSE (AI &amp; ML) student, actively looking to apply skills in
              real-world AI/ML and software development projects.
            </p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  )
}

function ContactRow({ icon: Icon, label, value, href, placeholder }) {
  const hasLink = Boolean(href)
  const content = (
    <div className="glass glass-hover flex items-center gap-4 rounded-2xl p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-blue)]/20 to-[var(--color-purple)]/20 text-[var(--color-blue-soft)]">
        <Icon size={18} />
      </span>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--color-text-faint)]">
          {label}
        </p>
        <p className="text-sm font-medium text-white">
          {hasLink || !placeholder ? value : placeholder}
        </p>
      </div>
    </div>
  )

  if (!hasLink) return content

  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
      {content}
    </a>
  )
}
