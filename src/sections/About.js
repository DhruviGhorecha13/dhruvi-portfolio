import React from 'react';
import { RevealDiv, SectionLabel, SectionTitle } from '../components/SectionWrapper';

const stats = [
  { n: '7.6', l: 'BCA CGPA' },
  { n: '🏆', l: 'Excellence Award' },
  { n: '10+', l: 'Technologies' },
  { n: '6+', l: 'Certifications' },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '6rem 6vw', background: '#fff' }}>
      <SectionLabel>About me</SectionLabel>
      <RevealDiv delay={0.15} style={{
        background: '#f7f8fc', borderRadius: 32,
        padding: '3.5rem', display: 'grid',
        gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'center',
        marginTop: '2rem',
      }}>
        <div>
          <SectionTitle>Security-first<br />developer &amp;<br />creative mind.</SectionTitle>
          <p style={{ marginTop: '1.5rem', fontSize: '0.97rem', lineHeight: 1.85, color: '#6b7280', fontWeight: 600 }}>
            I'm <strong style={{ color: '#111218' }}>Dhruvi Panchal</strong> — an MCA student with a background in DevSecOps, full-stack development, and cloud security. I built a <strong style={{ color: '#111218' }}>Vulnerability Management System</strong> at Staatse Security and earned an Excellence Award.
          </p>
          <p style={{ marginTop: '1rem', fontSize: '0.97rem', lineHeight: 1.85, color: '#6b7280', fontWeight: 600 }}>
            As <strong style={{ color: '#111218' }}>Student Placement Coordinator</strong> at DPISC, I bridge students and industry. Outside code, I'm a <strong style={{ color: '#111218' }}>painter</strong> — creativity runs through everything I build.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          {stats.map((st, i) => (
            <RevealDiv key={st.l} delay={0.2 + i * 0.08}>
              <div
                style={{
                  background: '#fde8dc', borderRadius: 20, padding: '1.5rem',
                  textAlign: 'center', transition: 'transform 0.25s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '2.4rem', fontWeight: 900, color: '#5b2ff8', lineHeight: 1, letterSpacing: '-0.03em' }}>
                  {st.n}
                </div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#6b7280', marginTop: '0.35rem' }}>
                  {st.l}
                </div>
              </div>
            </RevealDiv>
          ))}
        </div>
      </RevealDiv>
    </section>
  );
}
