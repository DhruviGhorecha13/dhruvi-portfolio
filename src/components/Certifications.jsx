import { BadgeCheck } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { certifications } from '../data.js'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <Reveal>
        <p className="section-eyebrow">Exhibit 05 — Certifications</p>
        <h2 className="section-title">Ongoing coursework.</h2>
      </Reveal>

      <div className="cert-grid">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={(i % 4) * 60}>
            <div className="cert-card">
              <BadgeCheck size={17} strokeWidth={2} />
              <div>
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
