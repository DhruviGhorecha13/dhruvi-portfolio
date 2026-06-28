import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealDiv, SectionLabel, SectionTitle } from '../components/SectionWrapper';

const cards = [
  { icon: '🔐', bg: '#5b2ff8', iconBg: '#7b57ff', name: 'DevSecOps', desc: 'CI/CD pipeline security, container scanning with Trivy, secret detection via Gitleaks & Semgrep.' },
  { icon: '🌐', bg: '#fdd835', iconBg: '#fef08a', name: 'Full Stack Web', desc: 'MERN stack apps — React JS frontend, Node.js + Express backend, MongoDB & MySQL.' },
  { icon: '☁️', bg: '#f9a8c9', iconBg: '#fce7f3', name: 'Cloud & DevOps', desc: 'AWS, Azure DevOps, Docker, Terraform, Linux sysadmin and infrastructure-as-code.' },
  { icon: '💻', bg: '#bfdbfe', iconBg: '#eff6ff', name: 'Backend Dev', desc: 'Python, Java, Node.js — scripting, REST APIs, socket programming, and data pipelines.' },
  { icon: '🎨', bg: '#bbf7d0', iconBg: '#f0fdf4', name: 'UI / Frontend', desc: 'React JS with clean, modern interfaces, animations, responsive design & GitHub Pages.' },
];

export default function Skills() {
  const [active, setActive] = useState(0);

  const prev = () => setActive(a => (a - 1 + cards.length) % cards.length);
  const next = () => setActive(a => (a + 1) % cards.length);

  return (
    <section id="skills" style={{ padding: '6rem 6vw', background: '#fde8dc' }}>
      <SectionLabel>What I do</SectionLabel>
      <SectionTitle>My core<br />expertise</SectionTitle>

      <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3.5rem', overflowX: 'auto', paddingBottom: '1rem', scrollbarWidth: 'none' }}>
        {cards.map((c, i) => {
          const isActive = i === active;
          return (
            <motion.div
              key={c.name}
              onClick={() => setActive(i)}
              layout
              animate={{ y: isActive ? -18 : 0, scale: isActive ? 1.02 : 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              style={{
                flex: '0 0 255px',
                background: '#fff',
                borderRadius: 28,
                padding: '2.5rem 2rem',
                textAlign: 'center',
                boxShadow: isActive ? '0 20px 60px rgba(91,47,248,0.15)' : '0 2px 12px rgba(0,0,0,0.05)',
                cursor: 'pointer',
                position: 'relative',
                border: isActive ? '2px solid rgba(91,47,248,0.2)' : '2px solid transparent',
                transition: 'border 0.3s',
              }}
            >
              <div style={{
                width: 100, height: 100, borderRadius: '50%',
                background: c.bg, margin: '0 auto 1.5rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '3rem',
              }}>
                {c.icon}
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 900, marginBottom: '0.75rem' }}>{c.name}</div>
              <div style={{ fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.7, fontWeight: 600 }}>{c.desc}</div>
              <AnimatePresence>
                {isActive && (
                  <motion.a
                    href="#projects"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    style={{
                      display: 'inline-block', marginTop: '1.75rem',
                      padding: '0.75rem 1.75rem',
                      background: '#111218', color: '#fff',
                      fontWeight: 800, fontSize: '0.82rem', borderRadius: 12,
                    }}
                  >
                    Find out more
                  </motion.a>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2.5rem' }}>
        <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#6b7280', letterSpacing: '0.05em' }}>
          <span style={{ color: '#5b2ff8' }}>{String(active + 1).padStart(2, '0')}</span>
          {' . '}
          {String(cards.length).padStart(2, '0')}
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {[{ fn: prev, arrow: '←' }, { fn: next, arrow: '→', isPrimary: true }].map(({ fn, arrow, isPrimary }) => (
            <button
              key={arrow}
              onClick={fn}
              style={{
                width: 44, height: 44, borderRadius: '50%',
                border: isPrimary ? 'none' : '2px solid #e5e7eb',
                background: isPrimary ? '#5b2ff8' : '#fff',
                color: isPrimary ? '#fff' : '#111218',
                fontWeight: 800, fontSize: '1rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              {arrow}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
