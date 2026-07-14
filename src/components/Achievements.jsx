import { Award, Trophy, Users, Medal, Languages } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { achievements, languages } from '../data.js'

const iconMap = { Award, Trophy, Users, Medal }

export default function Achievements() {
  return (
    <section id="achievements" className="section section--alt">
      <Reveal>
        <p className="section-eyebrow">06 — Achievements</p>
        <h2 className="section-title">Recognition along the way.</h2>
      </Reveal>

      <div className="achievements-grid">
        {achievements.map((item, i) => {
          const Icon = iconMap[item.icon]
          return (
            <Reveal key={item.title} delay={i * 70}>
              <div className="card achievement-card">
                <Icon size={18} strokeWidth={2} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.org}</p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>

      <Reveal delay={250}>
        <div className="languages-row">
          <Languages size={16} strokeWidth={2} />
          <span>{languages.join(' · ')}</span>
        </div>
      </Reveal>
    </section>
  )
}
