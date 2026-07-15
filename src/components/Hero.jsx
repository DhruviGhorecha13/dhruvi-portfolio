import { Mail, Github, Linkedin, Phone } from 'lucide-react'
import { profile, education } from '../data.js'

export default function Hero() {
  const studyMatch = education[0].degree.match(/\(([^)]+)\)/)

  return (
    <section id="top" className="hero">
      <p className="eyebrow--mono">Portfolio — {new Date().getFullYear()}</p>

      <h1 className="hero__name">{profile.name}</h1>

      <div className="hero__role-row">
        <span className="hero__role">{profile.role}</span>
        <span className="hero__focus">{profile.focus}</span>
      </div>

      <p className="hero__tagline">{profile.tagline}</p>

      <div className="hero__actions">
        <a className="btn btn--primary" href="#contact">
          <Mail size={16} /> Say hello
        </a>
        <a className="btn btn--ghost" href="#projects">
          See the work
        </a>
      </div>

      <div className="hero__strip">
        <div className="hero__strip-item">
          <span className="hero__strip-label">Status</span>
          <span className="hero__strip-value">Open to work</span>
        </div>
        <div className="hero__strip-item">
          <span className="hero__strip-label">Based</span>
          <span className="hero__strip-value">Ahmedabad, India</span>
        </div>
        <div className="hero__strip-item">
          <span className="hero__strip-label">Education</span>
          <span className="hero__strip-value">{studyMatch ? studyMatch[1] : 'MCA'}, in progress</span>
        </div>
        <div className="hero__strip-item">
          <span className="hero__strip-label">Experience</span>
          <span className="hero__strip-value">Staatse Security</span>
        </div>
      </div>

      <div className="hero__meta">
        <a href={`mailto:${profile.email}`}>
          <Mail size={14} /> {profile.email}
        </a>
        <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>
          <Phone size={14} /> {profile.phone}
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <Github size={14} /> GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={14} /> LinkedIn
        </a>
      </div>
    </section>
  )
}
