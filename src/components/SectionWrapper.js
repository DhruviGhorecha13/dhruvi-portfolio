import React from 'react';
import { motion } from 'framer-motion';

export function useReveal() {}

export function RevealDiv({ children, delay = 0, style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }) {
  return (
    <RevealDiv style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1rem' }}>
      <span style={{ width: 24, height: 2, background: '#5b2ff8', display: 'block' }} />
      <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#5b2ff8' }}>
        {children}
      </span>
    </RevealDiv>
  );
}

export function SectionTitle({ children, light = false }) {
  return (
    <RevealDiv delay={0.1}>
      <h2 style={{
        fontSize: 'clamp(2rem, 4vw, 3.2rem)',
        fontWeight: 900, lineHeight: 1.1,
        letterSpacing: '-0.03em',
        color: light ? '#fff' : '#111218',
      }}>
        {children}
      </h2>
    </RevealDiv>
  );
}
