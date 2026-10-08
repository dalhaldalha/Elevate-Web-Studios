import { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [percent, setPercent] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = 'hidden';
    if (typeof window !== 'undefined') {
      window.__preloaderActive = true;
    }

    // Smooth counter progression
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 4;
      if (current >= 100) {
        current = 100;
        setPercent(100);
        clearInterval(interval);

        // Pause briefly at 100% before curtain slides up
        setTimeout(() => {
          setIsExiting(true);
          if (typeof window !== 'undefined') {
            window.__preloaderActive = false;
            window.dispatchEvent(new CustomEvent('preloaderReveal'));
          }
        }, 160);
      } else {
        setPercent(current);
      }
    }, 28);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
      if (typeof window !== 'undefined') {
        window.__preloaderActive = false;
      }
    };
  }, []);

  const handleAnimationEnd = (e) => {
    if (e.animationName.includes('slideUpCurtain') || e.animationName.includes('fadeOutFast')) {
      document.body.style.overflow = '';
      setIsDone(true);
    }
  };

  if (isDone) return null;

  return (
    <div
      className={`${styles.preloader} ${isExiting ? styles.exiting : ''}`}
      onAnimationEnd={handleAnimationEnd}
      aria-hidden="true"
    >
      <div className={styles.topBar}>
        <div className={styles.brandTitle}>
          <span>ELEVATE WEB STUDIOS</span>
        </div>
        <div className={styles.tagline}>
          <span>B2B WEB DEVELOPMENT & STRATEGY</span>
        </div>
      </div>

      <div className={styles.centerContent}>
        <img
          src="/logo-black.png"
          alt="Elevate Web Studios Logo"
          className={styles.centerLogo}
          width="72"
          height="72"
        />
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.status}>
          <span className={styles.statusDot} />
          <span>LOADING EXPERIENCE</span>
        </div>
        <div className={styles.counter}>
          <span className={styles.number}>
            {String(percent).padStart(2, '0')}
          </span>
          <span className={styles.symbol}>%</span>
        </div>
      </div>
    </div>
  );
}
