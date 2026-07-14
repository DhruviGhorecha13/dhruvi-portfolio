import { Mail, ArrowDown, Github, Linkedin, Phone } from 'lucide-react'
import { profile } from '../data.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__content">
        <p className="eyebrow eyebrow--mono">
          <span className="dot" /> scan --target="dhruvi" --status
          <span className="cursor">_</span>
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

      <div className="hero__badge" aria-hidden="true">
        <div className="scan-ring">
          <div className="scan-ring__sweep" />
          <div className="scan-ring__core">DG</div>
        </div>
      </div>
    </section>
  )
}
