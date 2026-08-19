import projects from "../data/projects.js"
import ProjectCard from "./ProjectCard.jsx"
import Reveal from "./Reveal.jsx"

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -top-20 right-0 h-72 w-72 rounded-full bg-[var(--color-purple)]/10 blur-[100px]" />
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Things I&apos;ve Built
          </h2>
        </div>
       
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 90}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
