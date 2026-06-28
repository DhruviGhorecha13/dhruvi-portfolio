import React from 'react';
import { RevealDiv, SectionLabel, SectionTitle } from '../components/SectionWrapper';

const certs = [
  { icon: '☁️', name: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon Web Services' },
  { icon: '🐳', name: 'Docker for Developers', issuer: 'KodeKloud' },
  { icon: '🤖', name: 'Prompt Engineering', issuer: 'Scrimba' },
  { icon: '🐧', name: 'Linux Foundation Certification', issuer: 'Linux Foundation' },
  { icon: '🔵', name: 'AZ-900 Azure Fundamentals', issuer: 'Microsoft — In progress' },
  { icon: '📦', name: 'Full Stack MERN Certificate', issuer: 'NASSCOM / ExcelR' },
];

export default function Certifications() {
  return (
    <section id="certs" style={{ padding: '6rem 6vw', background: '#fde8dc' }}>
      <SectionLabel>Credentials</SectionLabel>
      <SectionTitle>Always<br />learning</SectionTitle>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: '1.25rem', marginTop: '3rem' }}>
        {certs.map((c, i) => (
          <RevealDiv key={c.name} delay={0.08 * (i % 3)}>
            <div
              style={{
                background: '#fff', borderRadius: 20,
                padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem',
                border: '2px solid transparent', transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#5b2ff8'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ width: 46, height: 46, borderRadius: 14, background: '#ede9fe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>
                {c.icon}
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 800, lineHeight: 1.3, color: '#111218' }}>{c.name}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6b7280', marginTop: '0.25rem' }}>{c.issuer}</div>
              </div>
            </div>
          </RevealDiv>
        ))}
      </div>
    </section>
  );
}
