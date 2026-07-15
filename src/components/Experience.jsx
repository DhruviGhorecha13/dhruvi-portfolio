import { Briefcase, Award } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <p className="section-eyebrow">Exhibit 03 — Experience</p>
        <h2 className="section-title">Where I've worked.</h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="timeline">
          <div className="timeline__marker">
            <Briefcase size={16} strokeWidth={2.2} />
          </div>
          <div className="timeline__content card">
            <div className="timeline__head">
              <div>
                <h3>{experience.role} · {experience.company}</h3>
                <p className="timeline__period">{experience.period}</p>
              </div>
            </div>
            <p className="timeline__project">{experience.project}</p>
            <ul>
              {experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="award-badge">
              <Award size={16} strokeWidth={2.2} />
              <span>{experience.award}</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
