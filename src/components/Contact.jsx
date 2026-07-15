import { Mail, Phone, Linkedin, Github } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { profile } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <span className="section-index">07</span>
      <Reveal>
        <p className="section-eyebrow">Contact</p>
        <h2 className="section-title">Have something worth building?</h2>
        <p className="contact__sub">My inbox is open, and so is my calendar.</p>
      </Reveal>

      <Reveal delay={100}>
        <div className="contact__links">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            <Mail size={16} /> {profile.email}
          </a>
          <a className="contact__icon" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
            <Phone size={15} /> Call
          </a>
          <a className="contact__icon" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={15} /> LinkedIn
          </a>
          <a className="contact__icon" href={profile.github} target="_blank" rel="noreferrer">
            <Github size={15} /> GitHub
          </a>
        </div>
      </Reveal>
    </section>
  )
}
