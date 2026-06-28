import React from 'react';
import { RevealDiv, SectionLabel, SectionTitle } from '../components/SectionWrapper';

const timeline = [
  {
    date: '2024 — Present',
    role: 'MCA — Master of Computer Applications',
    company: 'Sardar Vallabhbhai Global University, Ahmedabad',
    desc: 'Focusing on DevSecOps, cloud computing, and advanced software engineering. Serving as Student Placement Coordinator at DPISC.',
    award: null,
  },
  {
    date: '2024',
    role: 'Security Intern',
    company: 'Staatse Security, Ahmedabad',
    desc: 'Built a Vulnerability Management System and contributed to infrastructure security tooling. Recognized for impactful, high-quality delivery.',
    award: '🏆 Excellence Award',
  },
  {
    date: '2021 — 2024',
    role: 'BCA — Bachelor of Computer Applications',
    company: 'Shri Chiman Bhai Patel Institute, Ahmedabad',
    desc: 'Graduated with CGPA 7.6. Built a strong foundation in programming, data structures, networks, and software development.',
    award: null,
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '6rem 6vw', background: '#fff' }}>
      <SectionLabel>Experience & Education</SectionLabel>
      <SectionTitle>My journey<br />so far</SectionTitle>

      <RevealDiv delay={0.2} style={{
        background: '#f7f8fc', borderRadius: 32,
        padding: '3.5rem', marginTop: '2.5rem',
      }}>
        <div style={{ position: 'relative', paddingLeft: 0 }}>
          {/* vertical line */}
          <div style={{
            position: 'absolute', left: 8, top: 8, bottom: 8, width: 2,
            background: 'linear-gradient(to bottom, #5b2ff8, #e9d5ff)',
          }} />

          {timeline.map((t, i) => (
            <RevealDiv key={t.role} delay={0.15 + i * 0.1}
              style={{ paddingLeft: '3rem', paddingBottom: i < timeline.length - 1 ? '3rem' : 0, position: 'relative' }}
            >
              {/* dot */}
              <div style={{
                position: 'absolute', left: 0, top: 4,
                width: 18, height: 18, borderRadius: '50%',
                background: '#5b2ff8', border: '3px solid #fff',
                boxShadow: '0 0 0 3px #e9d5ff',
              }} />
              <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5b2ff8', marginBottom: '0.4rem' }}>
                {t.date}
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '0.2rem' }}>{t.role}</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#6b7280', marginBottom: '0.75rem' }}>{t.company}</div>
              <div style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.75, fontWeight: 600, maxWidth: 560 }}>{t.desc}</div>
              {t.award && (
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  marginTop: '0.75rem', padding: '0.3rem 0.9rem',
                  background: '#ede9fe', borderRadius: 100,
                  fontSize: '0.75rem', fontWeight: 800, color: '#5b2ff8',
                }}>
                  {t.award}
                </div>
              )}
            </RevealDiv>
          ))}
        </div>
      </RevealDiv>
    </section>
  );
}
