import React from 'react';
import { motion } from 'framer-motion';

/* ── Floating 3D shape definitions ── */
const shapes = [
  { id: 1, size: 90,  br: 18,  bg: '#ffffff',  top: '14%', left: '52%', rotate: -15, delay: 0,    dur: 5.5, opacity: 0.95 },
  { id: 2, size: 68,  br: 14,  bg: '#ffd6e8',  top: '58%', left: '28%', rotate: 22,  delay: 2,    dur: 7,   opacity: 0.9  },
  { id: 3, size: 112, br: 22,  bg: '#a78bfa',  top: '28%', left: '28%', rotate: -8,  delay: 1,    dur: 6.5, opacity: 0.85 },
  { id: 4, size: 50,  br: 50,  bg: '#ff8c42',  top: '44%', left: '62%', rotate: 0,   delay: 3,    dur: 4.5, opacity: 1    },
  { id: 5, size: 34,  br: 50,  bg: 'rgba(255,255,255,0.6)', top: '72%', left: '55%', rotate: 0, delay: 1.5, dur: 5, opacity: 1 },
  { id: 6, size: 36,  br: 9,   bg: 'rgba(255,255,255,0.3)', top: '18%', left: '72%', rotate: 32, delay: 4,  dur: 6, opacity: 1 },
  { id: 7, size: 80,  br: 16,  bg: '#fbbf24',  top: '62%', left: '64%', rotate: -20, delay: 2.5,  dur: 5.8, opacity: 0.9  },
  { id: 8, size: 28,  br: 50,  bg: 'rgba(255,255,255,0.5)', top: '82%', left: '80%', rotate: 0, delay: 0.5, dur: 4, opacity: 1 },
  { id: 9, size: 55,  br: 12,  bg: '#bfdbfe',  top: '50%', left: '42%', rotate: 15,  delay: 3.5,  dur: 6.2, opacity: 0.8  },
];

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
      {/* LEFT — white */}
      <div style={{
        background: '#fff',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: '8rem 5vw 4rem 6vw',
        position: 'relative', zIndex: 2,
      }}>
        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}
        >
          <span style={{ width: 40, height: 2, background: '#5b2ff8', display: 'block' }} />
          <span style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.07em', color: '#5b2ff8' }}>
            Dhruvi Panchal
          </span>
        </motion.div>

        {/* headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: 'clamp(2.8rem, 5.2vw, 5rem)',
            fontWeight: 900, lineHeight: 1.05,
            letterSpacing: '-0.03em', color: '#111218',
          }}
        >
          Hello, my<br />
          name's{' '}
          <span style={{ color: '#5b2ff8' }}>Dhruvi.</span>
          <br />
          I'm a{' '}
          <span style={{
            background: 'linear-gradient(135deg,#5b2ff8,#ff6b8a)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            DevSecOps
          </span>
          <br />
          Engineer.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          style={{ marginTop: '1rem', fontSize: '1rem', fontWeight: 700, color: '#6b7280' }}
        >
          Full Stack · Cloud Security · MCA @ SVGU
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{ marginTop: '0.75rem', fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.75, maxWidth: 380, fontWeight: 600 }}
        >
          Building secure, scalable systems — from CI/CD pipelines to full-stack web apps. Based in Ahmedabad, India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.05 }}
          style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <a
            href="#projects"
            style={{
              padding: '0.85rem 2rem', background: '#111218', color: '#fff',
              fontWeight: 800, fontSize: '0.88rem', borderRadius: 14,
              transition: 'transform 0.2s', display: 'inline-block',
            }}
            onMouseEnter={e => e.target.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
          >
            View my work →
          </a>
          <a
            href="#contact"
            style={{
              padding: '0.85rem 2rem', border: '2px solid #111218', color: '#111218',
              fontWeight: 800, fontSize: '0.88rem', borderRadius: 14, display: 'inline-block',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.target.style.background = '#111218'; e.target.style.color = '#fff'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#111218'; }}
          >
            Let's talk
          </a>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          style={{
            position: 'absolute', bottom: '2.5rem', left: '6vw',
            display: 'flex', alignItems: 'center', gap: '0.85rem',
            fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.06em', color: '#6b7280',
          }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1.5, ease: 'easeInOut' }}
            style={{
              width: 38, height: 38, borderRadius: '50%',
              border: '2px solid #e5e7eb',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ↓
          </motion.div>
          Scroll down
        </motion.div>
      </div>

      {/* RIGHT — purple with animated shapes */}
      <div style={{
        background: 'linear-gradient(135deg, #7b57ff 0%, #3d1fcc 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* grid floor */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%',
          backgroundImage: `
            repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 60px),
            repeating-linear-gradient(180deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 60px)
          `,
        }} />

        {/* radial glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 60% 40%, rgba(255,255,255,0.08) 0%, transparent 65%)',
        }} />

        {/* Animated floating shapes */}
        {shapes.map(sh => (
          <motion.div
            key={sh.id}
            style={{
              position: 'absolute',
              width: sh.size, height: sh.size,
              borderRadius: sh.br,
              background: sh.bg,
              top: sh.top, left: sh.left,
              opacity: sh.opacity,
              rotate: sh.rotate,
            }}
            animate={{
              y: [0, -24, 0],
              rotate: [sh.rotate, sh.rotate + 5, sh.rotate],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: sh.dur,
              delay: sh.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: sh.opacity, scale: 1 }}
            viewport={{ once: true }}
          />
        ))}

        {/* centre platform box */}
        <motion.div
          style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            width: 160, height: 60, borderRadius: 20,
            background: 'rgba(255,255,255,0.12)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
}
