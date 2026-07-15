import { ExternalLink, Github } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { projects } from '../data.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <span className="section-index">04</span>
      <Reveal>
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">Things I've built end to end.</h2>
      </Reveal>

      <div className="row-list">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 90}>
            <div className="project-row">
              <div>
                <h3 className="project-row__title">{project.title}</h3>
                <div className="tech-row">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="project-row__desc">{project.description}</p>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {(project.links.live || project.links.github) && (
                  <div className="project-row__links">
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noreferrer">
                        <ExternalLink size={14} /> Live
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noreferrer">
                        <Github size={14} /> Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
