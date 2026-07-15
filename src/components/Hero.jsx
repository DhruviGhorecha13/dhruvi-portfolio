import { Mail, ArrowDown, Github, Linkedin, Stamp } from 'lucide-react'
import { profile, education } from '../data.js'

const facts = [
  { label: 'Status', value: 'Open to work' },
  { label: 'Focus', value: 'DevSecOps' },
  { label: 'Based', value: 'Ahmedabad, IN' },
  { label: 'Study', value: education[0].degree.match(/\(([^)]+)\)/)?.[1] || 'MCA' },
]

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__content">
        <p className="eyebrow--mono">
          <Stamp size={14} strokeWidth={2.4} />
          file no. dg — verified profile
        </p>

        <h1 className="hero__name">{profile.name}</h1>
        <p className="hero__role">{profile.role}</p>
        <p className="hero__focus">{profile.focus}</p>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#contact">
            <Mail size={16} /> Say hello
          </a>
          <a className="btn btn--ghost" href="#projects">
            See the work <ArrowDown size={16} />
          </a>
        </div>

        <div className="hero__meta">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span className="sep">/</span>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          <span className="sep">/</span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={14} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={14} /> LinkedIn
          </a>
        </div>
      </div>

      <div className="hero__badge">
        <div className="seal" aria-hidden="true">
          <div className="seal__core">
            <span className="seal__mark">DG</span>
            <span className="seal__label">Verified</span>
          </div>
        </div>

        <div className="dossier">
          {facts.map((fact) => (
            <div className="dossier__row" key={fact.label}>
              <span className="dossier__label">{fact.label}</span>
              <span className="dossier__value">{fact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
