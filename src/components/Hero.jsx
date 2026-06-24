import { useEffect, useRef, useState } from 'react';
import './Hero.css';

const ROLES = ['AI & DS Undergraduate', 'Machine Learning Enthusiast', 'Data Analytics Learner', 'Computer Vision Developer'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  // Typewriter
  useEffect(() => {
    const full = ROLES[roleIdx];
    let timeout;
    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="about">
      {/* Ambient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className={`hero-inner${loaded ? ' loaded' : ''}`}>
        {/* LEFT — Photo */}
        <div className="hero-photo-wrap">
          <div className="photo-ring" />
          <div className="photo-frame">
            <img src="/sree-ranjini.jpg" alt="Sree Ranjini R" className="hero-photo" />
            <div className="photo-overlay" />
          </div>

        </div>

        {/* RIGHT — Text */}
        <div className="hero-text">
          <p className="hero-eyebrow">
            <span className="eyebrow-line" />
            Coimbatore, India · 2023–2027
          </p>
          <h1 className="hero-name">
            Sree<br />
            <span className="name-italic">Ranjini</span>
            <span className="name-dot"> R</span>
          </h1>
          <div className="hero-role-wrap">
            <span className="hero-role">{displayed}<span className="cursor">|</span></span>
          </div>
          <p className="hero-bio">
            Hi, I'm Sree Ranjini, a final-year Artificial Intelligence and Data Science student passionate about transforming data into meaningful solutions. I enjoy exploring machine learning, data analytics, and computer vision, and I love building projects that solve real-world problems. From analyzing business data to developing AI-powered applications, I'm constantly learning, experimenting, and expanding my technical skills. My goal is to leverage technology and data-driven insights to create impactful solutions that make a difference.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              See My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <a href="https://www.linkedin.com/in/sree-ranjini-ranjith/" target="_blank" rel="noreferrer" className="btn-outline">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/sreeranjini7" target="_blank" rel="noreferrer" className="btn-outline">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </div>

      <button className="scroll-hint" onClick={() => scrollTo('experience')}>
        <span>Scroll</span>
        <div className="scroll-icon"><div className="scroll-dot" /></div>
      </button>
    </section>
  );
}
