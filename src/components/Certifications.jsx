import Reveal from './Reveal.jsx'
import { certifications } from '../data.js'

export default function Certifications() {
  return (
    <section id="certifications" className="section section--alt">
      <span className="section-index">05</span>
      <Reveal>
        <p className="section-eyebrow">Certifications</p>
        <h2 className="section-title">Ongoing coursework.</h2>
      </Reveal>

      <Reveal delay={80}>
        <div className="plain-grid">
          {certifications.map((cert) => (
            <div className="plain-item" key={cert.title}>
              <span className="plain-item__mark">＋</span>
              <div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
