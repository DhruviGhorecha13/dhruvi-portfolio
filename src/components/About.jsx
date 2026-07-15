import { GraduationCap } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { education } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <p className="section-eyebrow">Exhibit 01 — About</p>
        <h2 className="section-title">Security-minded, product-focused.</h2>
      </Reveal>

      <Reveal delay={80}>
        <p className="about__text">
          I'm a software computing student specializing in cybersecurity and full-stack
          development, with hands-on experience in vulnerability management, secure
          coding practices and cloud technologies like AWS and Docker. I care about
          building digital solutions that are efficient, user-friendly and secure by
          default — not as an afterthought. Outside of code, I paint, which keeps the
          same eye for detail and composition sharp.
        </p>
      </Reveal>

      <div className="education-grid">
        {education.map((edu, i) => (
          <Reveal key={edu.degree} delay={120 + i * 80}>
            <div className="card education-card">
              <div className="education-card__icon">
                <GraduationCap size={20} strokeWidth={2} />
              </div>
              <p className="education-card__period">{edu.period}</p>
              <h3>{edu.degree}</h3>
              <p className="education-card__school">{edu.school}</p>
              <p className="education-card__detail">{edu.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
