import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { profile } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <Reveal>
        <p className="section-eyebrow">07 — Contact</p>
        <h2 className="section-title">Have something worth building?</h2>
        <p className="contact__sub">My inbox is open, and so is my calendar.</p>
      </Reveal>

      <Reveal delay={100}>
        <div className="contact__links">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            <Mail size={16} /> {profile.email}
          </a>
          <a className="contact__icon" href={`tel:${profile.phone.replace(/\s/g, '')}`} aria-label="Phone">
            <Phone size={18} />
          </a>
          <a className="contact__icon" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a className="contact__icon" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
