import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const s = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '1.4rem 5vw',
    transition: 'padding 0.3s ease',
  },
  navScrolled: { padding: '1rem 5vw', background: 'rgba(253,232,220,0.85)', backdropFilter: 'blur(14px)' },
  logo: {
    display: 'flex', alignItems: 'center', gap: '0.6rem',
    fontSize: '1rem', fontWeight: 900, letterSpacing: '0.08em', color: '#111218',
  },
  circles: { position: 'relative', width: 32, height: 22 },
  c1: { position: 'absolute', width: 20, height: 20, borderRadius: '50%', background: '#5b2ff8', top: 1, left: 0 },
  c2: { position: 'absolute', width: 20, height: 20, borderRadius: '50%', background: '#ff6b8a', top: 1, left: 10, opacity: 0.85 },
  center: {
    display: 'flex', gap: '2rem',
    background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(12px)',
    padding: '0.6rem 2rem', borderRadius: 100, border: '1px solid rgba(255,255,255,0.9)',
  },
  link: { fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.05em', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.4rem' },
  ham: {
    width: 38, height: 38, borderRadius: 10,
    background: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.9)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5,
  },
  hamLine: { width: 18, height: 2, background: '#111218', borderRadius: 2, display: 'block' },
};

const navLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/dhruvi-ghorecha-806060312/', icon: '🔗' },
  { label: 'GitHub', href: 'https://github.com/DhruviGhorecha13', icon: '💻' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      style={{ ...s.nav, ...(scrolled ? s.navScrolled : {}) }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div style={s.logo}>
        <div style={s.circles}>
          <div style={s.c1} />
          <div style={s.c2} />
        </div>
        FOLIO.
      </div>

      <div style={s.center}>
        {navLinks.map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer" style={s.link}>
            {l.icon} {l.label}
          </a>
        ))}
        <a href="#contact" style={s.link}>✉️ Contact</a>
      </div>

      <div style={s.ham}>
        <span style={s.hamLine} />
        <span style={s.hamLine} />
        <span style={s.hamLine} />
      </div>
    </motion.nav>
  );
}
