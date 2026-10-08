import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import styles from './Hero.module.css';

export default function Hero() {
  const heroRef = useScrollReveal({ stagger: 110 });

  return (
    <section ref={heroRef} className={styles.section} aria-label="Hero">
      <div className={styles.graphBackground} aria-hidden="true" />
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h1 className={`${styles.headline} revealChild`}>
            We build digital<br />experiences that
            <br />elevate brands.
          </h1>
          <p className={`${styles.subtext} revealChild`}>
            Elevate Web Studios is a premium B2B web development agency. We partner with ambitious companies to design, engineer, and launch high-performance websites and web applications that drive measurable growth.
          </p>
          <div className={`${styles.actions} revealChild`}>
            <a href="mailto:hello@elevatewebstudios.com" className={styles.btnSecondary}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <span>Write an Email</span>
            </a>
            <a href="#contact" className={styles.btnPrimary}>
              <span>Start a Project</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>
        </div>
        <div className={`${styles.imageCard} revealChild revealScale`}>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&h=600&fit=crop&q=80"
            alt="Elevate Web Studios team collaborating on a digital project"
            className={styles.heroImage}
            loading="eager"
            width={1400}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
