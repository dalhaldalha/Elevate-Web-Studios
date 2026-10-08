import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import styles from './Footer.module.css';

export default function Footer() {
  const cardRef = useScrollReveal({ stagger: 80 });
  const metaRef = useScrollReveal();

  return (
    <footer className={styles.footer} id="contact">
      <div className="container">
        <div ref={cardRef} className={`${styles.card} revealChild revealScale`}>
          <div className={styles.cardGrid}>
            <div>
              <h2 className={`${styles.heading} revealChild`}>Let's Build<br />Together.</h2>
              <p className={`${styles.description} revealChild`}>
                Ready to elevate your digital presence? Whether you need a complete website, a web application, or strategic guidance — we're here to help.
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
            <div className={`${styles.rightColumn} revealChild`}>
              <nav className={styles.navLinks} aria-label="Footer Navigation">
                <a href="#work" className={styles.navLink}>Work</a>
                <a href="#services" className={styles.navLink}>Services</a>
                <a href="#about" className={styles.navLink}>About</a>
                <a href="#journey" className={styles.navLink}>Journey</a>
                <a href="#faq" className={styles.navLink}>FAQ</a>
                <a href="#contact" className={styles.navLink}>Contact</a>
              </nav>
              <div className={styles.socialLinks}>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Dribbble</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>X / Twitter</a>
              </div>
            </div>
          </div>
        </div>
        <div ref={metaRef} className={`${styles.meta} revealChild`}>
          <div className={styles.footerBrand}>
            <img src="/logo.png" alt="Elevate Web Studios" className={styles.footerLogo} width="20" height="20" />
            <span className={styles.footerBrandName}>Elevate Web Studios</span>
          </div>
          <div className={styles.metaLinks}>
            <a href="#" className={styles.metaLink}>Privacy Policy</a>
            <a href="#" className={styles.metaLink}>Terms of Service</a>
            <a href="#" className={styles.metaLink}>Sitemap</a>
          </div>
          <div>© 2025 Elevate Web Studios. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
