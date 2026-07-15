import Reveal from './Reveal.jsx'
import { skillGroups, softSkills } from '../data.js'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <span className="section-index">02</span>
      <Reveal>
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">What I work with.</h2>
      </Reveal>

      <Reveal delay={80}>
        <div className="skills-table">
          {skillGroups.map((group) => (
            <div className="skills-table__row" key={group.title}>
              <span className="skills-table__title">{group.title}</span>
              <div className="skills-table__items">
                {group.items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={160}>
        <p className="soft-skills-label">Also brings to the table</p>
        <div className="soft-skills">
          {softSkills.map((skill) => (
            <span className="tag" key={skill}>{skill}</span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
