import { ExternalLink, Github, Folder } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <Reveal>
        <p className="section-eyebrow">04 — Projects</p>
        <h2 className="section-title">Things I've built end to end.</h2>
      </Reveal>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 100}>
            <div className="card project-card">
              <div className="project-card__icon">
                <Folder size={20} strokeWidth={2} />
              </div>
              <h3>{project.title}</h3>
              <div className="tech-row">
                {project.tech.map((t) => (
                  <span key={t} className="tag tag--muted">
                    {t}
                  </span>
                ))}
              </div>
              <p className="project-card__desc">{project.description}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {(project.links.live || project.links.github) && (
                <div className="project-card__links">
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noreferrer">
                      <ExternalLink size={15} /> Live
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer">
                      <Github size={15} /> Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
