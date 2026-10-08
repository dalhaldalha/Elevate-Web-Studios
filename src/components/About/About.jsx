import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import styles from './About.module.css';

export default function About() {
  const aboutRef = useScrollReveal({ stagger: 90 });

  return (
    <section ref={aboutRef} className={styles.section} aria-label="About Elevate Web Studios" id="about">
      <div className="container">
        <div className={styles.inner}>
          <span className={`${styles.label} revealChild`}>About Elevate</span>
          <h2 className={`${styles.heading} revealChild`}>
            We are a multidisciplinary web studio helping world-class B2B companies connect with their audiences and scale their digital presence.
          </h2>
          <p className={`${styles.description} revealChild`}>
            From strategy and branding to full-stack engineering, we partner with forward-thinking founders and product teams to deliver end-to-end digital solutions that convert visitors into customers.
          </p>
          <p className={`${styles.detail} revealChild`}>
            Every project at Elevate Web Studios is built with precision—clean code, purposeful design, and performance-first architecture.
          </p>
          <div className="revealChild">
            <a href="#contact" className={styles.ctaButton}>
              <span>Get in Touch</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
