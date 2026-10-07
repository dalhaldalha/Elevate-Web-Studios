import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main Navigation">
        <a href="#" className={styles.brand}>
          <img src="/logo.png" alt="Elevate Web Studios" className={styles.brandLogo} width="28" height="28" />
          <span className={styles.brandName}>Elevate Web Studios</span>
        </a>
        <div className={styles.desktopLinks}>
          <a href="#work" className={styles.navLink}>Work</a>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#faq" className={styles.navLink}>FAQ</a>
        </div>
        <a href="#contact" className={styles.ctaButton}>
          <span>Start a Project</span>
          <svg className={styles.ctaIcon} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
      </nav>
    </header>
  );
}
