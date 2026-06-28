import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      padding: '2rem 6vw',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontSize: '0.78rem', fontWeight: 700, color: '#6b7280',
      background: '#111218', color: 'rgba(255,255,255,0.45)',
    }}>
      <span>© 2025 Dhruvi Panchal</span>
      <span>Made with ❤️ in Ahmedabad, India</span>
    </footer>
  );
}
