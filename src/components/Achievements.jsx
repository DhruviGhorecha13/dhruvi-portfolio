import Reveal from './Reveal.jsx'
import { achievements, languages } from '../data.js'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <span className="section-index">06</span>
      <Reveal>
        <p className="section-eyebrow">Achievements</p>
        <h2 className="section-title">Recognition along the way.</h2>
      </Reveal>

      <Reveal delay={80}>
        <div className="plain-grid">
          {achievements.map((item) => (
            <div className="plain-item" key={item.title}>
              <span className="plain-item__mark">＋</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.org}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={200}>
        <p className="languages-row">
          <span>Languages</span>
          {languages.join(' · ')}
        </p>
      </Reveal>
    </section>
  )
}
