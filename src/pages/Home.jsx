import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Hero from "../components/Hero.jsx"
import About from "../components/About.jsx"
import Education from "../components/Education.jsx"
import Experience from "../components/Experience.jsx"
import Skills from "../components/Skills.jsx"
import Projects from "../components/Projects.jsx"

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) {
      // slight delay so layout has settled before scrolling
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50)
    }
  }, [hash])

  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
    </>
  )
}
