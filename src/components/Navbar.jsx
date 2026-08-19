import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu, X, Terminal } from "lucide-react"
import siteConfig from "../data/siteConfig.js"

const NAV_LINKS = [
  { label: "Home", hash: "#home", path: "/" },
  { label: "About", hash: "#about", path: "/" },
  { label: "Experience", hash: "#experience", path: "/" },
  { label: "Skills", hash: "#skills", path: "/" },
  { label: "Projects", hash: "#projects", path: "/" },
  { label: "Documents", hash: null, path: "/documents" },
  { label: "Contact", hash: null, path: "/contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  function handleNavClick(e, link) {
    setOpen(false)
    if (link.hash) {
      if (location.pathname !== "/") {
        e.preventDefault()
        navigate("/" + link.hash)
      }
      // else: default anchor behavior handles smooth scroll
    }
  }

  const isActive = (link) => {
    if (link.hash) return location.pathname === "/" && (location.hash === link.hash || (!location.hash && link.hash === "#home"))
    return location.pathname === link.path
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6 transition-shadow duration-300 ${
            scrolled ? "shadow-[0_10px_40px_-15px_rgba(59,130,246,0.35)]" : ""
          }`}
          aria-label="Primary"
        >
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-[var(--color-text)]">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-blue)] to-[var(--color-purple)] text-white">
              <Terminal size={18} />
            </span>
            <span className="hidden sm:inline">{siteConfig.name}</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.hash ? `/${link.hash}` : link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  aria-current={isActive(link) ? "page" : undefined}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(link)
                      ? "text-white"
                      : "text-[var(--color-text-dim)] hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive(link) && (
                    <span className="absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-[var(--color-blue)] to-[var(--color-purple)]" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`glass mt-2 overflow-hidden rounded-2xl transition-all duration-300 md:hidden ${
            open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col p-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.hash ? `/${link.hash}` : link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(link) ? "bg-white/5 text-white" : "text-[var(--color-text-dim)] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
