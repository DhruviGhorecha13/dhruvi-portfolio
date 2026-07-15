import Reveal from './Reveal.jsx'
import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <span className="section-index">03</span>
      <Reveal>
        <p className="section-eyebrow">Experience</p>
        <h2 className="section-title">Where I've worked.</h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="experience-block">
          <div className="experience-block__head">
            <h3>{experience.role} · {experience.company}</h3>
            <p className="experience-block__period">{experience.period}</p>
          </div>
          <p className="experience-block__project">{experience.project}</p>
          <ul>
            {experience.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <span className="award-line">{experience.award}</span>
        </div>
      </Reveal>
    </section>
  )
}
