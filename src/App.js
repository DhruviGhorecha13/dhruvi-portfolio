import React from 'react';
import Nav from './components/Nav';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const globalStyle = `
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  :root {
    --peach: #fde8dc;
    --purple: #5b2ff8;
    --purple-light: #7b57ff;
    --purple-dark: #3d1fcc;
    --white: #ffffff;
    --near-black: #111218;
    --text-sub: #6b7280;
    --card-shadow: 0 20px 60px rgba(91,47,248,0.13);
  }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Nunito', sans-serif;
    background: var(--peach);
    color: var(--near-black);
    overflow-x: hidden;
  }
  a { text-decoration: none; }
  button { border: none; background: none; cursor: pointer; font-family: inherit; }
`;

export default function App() {
  return (
    <>
      <style>{globalStyle}</style>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}
