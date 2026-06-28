import React from 'react';
import { motion } from 'framer-motion';
import { RevealDiv } from '../components/SectionWrapper';

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '4rem 4vw 5rem' }}>
      <RevealDiv>
        <div style={{
          background: 'linear-gradient(135deg,#5b2ff8,#3d1fcc)',
          borderRadius: 32, padding: '6rem 6vw',
          textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          {/* bg glow */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%,rgba(255,255,255,0.07),transparent 60%)' }} />

          {/* label */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.7rem', marginBottom: '1rem' }}>
            <span style={{ width: 24, height: 2, background: 'rgba(255,255,255,0.4)', display: 'block' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
              Get in touch
            </span>
          </div>

          <h2 style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.03em', position: 'relative', zIndex: 1 }}>
            Let's build<br />something great.
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', margin: '1.25rem auto 2.5rem', maxWidth: 440, lineHeight: 1.75, fontWeight: 600, position: 'relative', zIndex: 1 }}>
            Open to internship roles and entry-level positions in DevSecOps, full-stack, or cloud security. Based in Ahmedabad — open to remote.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
            <a href="mailto:dhruvighorecha1312@example.com"
              style={{ padding: '0.9rem 2.2rem', background: '#fff', color: '#5b2ff8', fontWeight: 800, borderRadius: 14, fontSize: '0.88rem', transition: 'transform 0.2s', display: 'inline-block' }}
              onMouseEnter={e => e.target.style.transform = 'translateY(-3px)'}
              onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
            >
              ✉️ Send an email →
            </a>
            <a href="https://linkedin.com/in/dhruvi-ghorecha-806060312/" target="_blank" rel="noreferrer"
              style={{ padding: '0.9rem 2.2rem', border: '2px solid rgba(255,255,255,0.5)', color: '#fff', fontWeight: 800, borderRadius: 14, fontSize: '0.88rem', display: 'inline-block', transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.target.style.borderColor = '#fff'}
              onMouseLeave={e => e.target.style.borderColor = 'rgba(255,255,255,0.5)'}
            >
              🔗 LinkedIn
            </a>
            <a href="https://github.com/DhruviGhorecha13" target="_blank" rel="noreferrer"
              style={{ padding: '0.9rem 2.2rem', border: '2px solid rgba(255,255,255,0.5)', color: '#fff', fontWeight: 800, borderRadius: 14, fontSize: '0.88rem', display: 'inline-block', transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.target.style.borderColor = '#fff'}
              onMouseLeave={e => e.target.style.borderColor = 'rgba(255,255,255,0.5)'}
            >
              💻 GitHub
            </a>
          </div>
        </div>
      </RevealDiv>
    </section>
  );
}
