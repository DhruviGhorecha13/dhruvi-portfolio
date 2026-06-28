import React from 'react';
import { RevealDiv, SectionLabel, SectionTitle } from '../components/SectionWrapper';

const projects = [
  {
    id: 1, wide: true,
    badge: 'DevSecOps · Group Project · 2024',
    title: 'CI/CD Pipeline Exposure Management',
    desc: 'A full-stack MERN DevSecOps dashboard that scans Docker images, Kubernetes configs, GitHub Actions workflows, and Helm charts for vulnerabilities. Integrates Trivy, Gitleaks, and Semgrep with a visual risk dashboard and webhook automation.',
    tags: ['React JS', 'Node.js', 'MongoDB', 'Trivy', 'Gitleaks', 'Semgrep', 'Docker', 'Kubernetes'],
    github: 'https://github.com/dhruvi-panchal/cicd-exposure-management',
    live: null,
  },
  {
    id: 2,
    badge: 'Security · Staatse Security Internship',
    title: 'Vulnerability Management System',
    desc: 'Built during internship — tracks, triages, and remediates security vulnerabilities across infrastructure. Earned the Excellence Award for impact delivered.',
    tags: ['Python', 'Linux', 'Security Scanning'],
    github: 'https://github.com/DhruviGhorecha13/Phishing-Link-Detector',
    live: null,
  },
  {
    id: 3,
    badge: 'Frontend · Personal Project',
    title: 'Portfolio Website',
    desc: 'Editorial-bold React portfolio with Framer Motion animations, deployed on GitHub Pages. Performance and aesthetics, hand in hand.',
    tags: ['React JS', 'Framer Motion', 'GitHub Pages'],
    github: 'https://github.com/DhruviGhorecha13/dhruvi-portfolio',
    live: 'https://DhruviGhorecha13.github.io/dhruvi-portfolio',
  },
];

function ProjectCard({ p }) {
  return (
    <RevealDiv delay={0.1} style={{ gridColumn: p.wide ? 'span 2' : 'span 1' }}>
      <div
        style={{
          borderRadius: 22, overflow: 'hidden',
          border: '2px solid #f0f0f5',
          transition: 'transform 0.3s, box-shadow 0.3s',
          background: '#fff',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-6px)';
          e.currentTarget.style.boxShadow = '0 20px 60px rgba(91,47,248,0.13)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* header */}
        <div style={{
          background: 'linear-gradient(135deg,#5b2ff8,#3d1fcc)',
          padding: '2.5rem', position: 'relative', minHeight: p.wide ? 220 : 185,
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 80% 40%,rgba(255,255,255,0.1),transparent 60%)' }} />
          <span style={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
            {p.badge}
          </span>
          <div style={{ fontSize: p.wide ? '1.9rem' : '1.4rem', fontWeight: 900, color: '#fff', lineHeight: 1.2, position: 'relative', zIndex: 1 }}>
            {p.title}
          </div>
        </div>

        {/* body */}
        <div style={{ padding: '1.75rem 2rem' }}>
          <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.7, fontWeight: 600 }}>{p.desc}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.25rem' }}>
            {p.tags.map(t => (
              <span key={t} style={{ fontSize: '0.7rem', fontWeight: 700, padding: '0.28rem 0.7rem', borderRadius: 8, background: '#f3f4f6', color: '#4b5563' }}>
                {t}
              </span>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 800, color: '#5b2ff8' }}
              >
                💻 View on GitHub →
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 800, color: '#111218' }}
              >
                🌐 Live site →
              </a>
            )}
          </div>
        </div>
      </div>
    </RevealDiv>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 6vw', background: '#fde8dc' }}>
      <SectionLabel>Selected work</SectionLabel>
      <SectionTitle>Projects I've<br />built & shipped</SectionTitle>
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem', marginTop: '3rem',
      }}>
        {projects.map(p => <ProjectCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
