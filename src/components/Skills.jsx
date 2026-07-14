import {
  Code2,
  LayoutTemplate,
  Server,
  Database,
  Boxes,
  Workflow,
  MonitorCheck,
} from 'lucide-react'
import Reveal from './Reveal.jsx'
import { skillGroups, softSkills } from '../data.js'

const iconMap = {
  Code2,
  LayoutTemplate,
  Server,
  Database,
  Boxes,
  Workflow,
  MonitorCog: MonitorCheck,
}

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <Reveal>
        <p className="section-eyebrow">02 — Skills</p>
        <h2 className="section-title">What I actually work with.</h2>
      </Reveal>

      <div className="skills-grid">
        {skillGroups.map((group, i) => {
          const Icon = iconMap[group.icon]
          return (
            <Reveal key={group.title} delay={i * 60}>
              <div className="card skill-card">
                <div className="skill-card__icon">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={200}>
        <div className="soft-skills">
          {softSkills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}