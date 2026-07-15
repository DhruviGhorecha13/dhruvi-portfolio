import Reveal from './Reveal.jsx'
import { education } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section">
      <span className="section-index">01</span>
      <Reveal>
        <p className="section-eyebrow">About</p>
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

      <Reveal delay={140}>
        <div className="row-list">
          {education.map((edu) => (
            <div className="edu-row" key={edu.degree}>
              <div className="edu-row__main">
                <h3>{edu.degree}</h3>
                <p className="edu-row__school">{edu.school}</p>
              </div>
              <div className="edu-row__meta">
                <span className="edu-row__period">{edu.period}</span>
                <span className="edu-row__detail">{edu.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
