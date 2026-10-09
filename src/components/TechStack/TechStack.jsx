import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import styles from './TechStack.module.css';

const row1 = [
  {
    name: 'React',
    category: 'Component UI',
    icon: (
      <svg width="20" height="20" viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    category: 'Core Web Standard',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 16c.5.7 1.3 1 2.2 1 1.2 0 1.8-.7 1.8-2v-4.5M17.5 10.5h-3.5c-.8 0-1.5.6-1.5 1.5 0 2 4.8 1.2 4.8 3.5 0 .9-.7 1.5-1.6 1.5h-3.2" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    category: 'Strict Type Safety',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 11h4m-2-3v8m5-8h3a1.5 1.5 0 010 3h-2a1.5 1.5 0 000 3h3" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    category: 'Async Runtime',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 21 7.5 21 16.5 12 22 3 16.5 3 7.5 12 2" />
        <path d="M12 12v10m-9-14.5l9 5.5 9-5.5" />
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    category: 'Design Systems',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: 'Vite',
    category: 'Build Architecture',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: 'Vercel',
    category: 'Edge Network',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L24 22H0L12 1Z" />
      </svg>
    ),
  },
  {
    name: 'Python',
    category: 'Backend & Data',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2H8a4 4 0 0 0-4 4v3a3 3 0 0 0 3 3h5v-2a2 2 0 0 1 2-2h4V6a4 4 0 0 0-4-4zm-2 3h.01" />
        <path d="M12 22h4a4 4 0 0 0 4-4v-3a3 3 0 0 0-3-3h-5v2a2 2 0 0 1-2 2H6v2a4 4 0 0 0 4 4zm4-3h.01" />
      </svg>
    ),
  },
];

const row2 = [
  {
    name: 'PostgreSQL',
    category: 'Relational Database',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    name: 'MySQL',
    category: 'Enterprise SQL Engine',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 11c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M12 14v4" />
      </svg>
    ),
  },
  {
    name: 'PHP',
    category: 'Server-Side Web Engine',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="6.5" />
        <path d="M7 9.5h2a1.5 1.5 0 0 1 0 3H7v2M12 9.5v5M12 12h2a1.5 1.5 0 0 0 0-3h-2M17 9.5h2a1.5 1.5 0 0 1 0 3h-2v2" />
      </svg>
    ),
  },
  {
    name: 'C++',
    category: 'High-Performance Systems',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 21 7.2 21 16.8 12 22 3 16.8 3 7.2 12 2" />
        <path d="M9 9.5a3 3 0 1 0 0 5M14 12h2M15 11v2M18 12h2M19 11v2" />
      </svg>
    ),
  },
  {
    name: 'Shopify Plus',
    category: 'Headless Commerce',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    category: 'Containerization',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 10h3v3H4zm4 0h3v3H8zm4 0h3v3h-3zm4 0h3v3h-3zm-8-4h3v3H8zm4 0h3v3h-3z" />
        <path d="M2 13c1 2 4 4 10 4 8 0 10-5 10-5a3 3 0 01-2-1c-1 0-2 1-3 1-3 0-5-2-5-2H2v3z" />
      </svg>
    ),
  },
  {
    name: 'Supabase',
    category: 'Backend & Auth',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    name: 'Stripe',
    category: 'Payment Pipelines',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
];

export default function TechStack() {
  const headerRef = useScrollReveal({ stagger: 90 });

  // Double arrays for seamless infinite CSS marquee loops
  const row1Duplicated = [...row1, ...row1];
  const row2Duplicated = [...row2, ...row2];

  return (
    <section className={styles.section} aria-label="Technology Stack" id="stack">
      <div className="container">
        <div ref={headerRef} className={styles.header}>
          <span className={`${styles.eyebrow} revealChild`}>Architecture &amp; Stack</span>
          <h2 className={`${styles.heading} revealChild`}>
            Modern tools engineered for performance, scale &amp; longevity.
          </h2>
          <p className={`${styles.description} revealChild`}>
            We build with battle-tested languages, frameworks, and infrastructure tailored to your business needs — ensuring sub-second page loads, strict type safety, and effortless scalability.
          </p>
        </div>
      </div>

      <div className={styles.marqueeWrapper} aria-hidden="true">
        <div className={styles.marqueeRow}>
          <div className={styles.trackLeft}>
            {row1Duplicated.map((tech, index) => (
              <div key={`row1-${index}`} className={styles.techCard}>
                <span className={styles.techIcon}>{tech.icon}</span>
                <div className={styles.techInfo}>
                  <span className={styles.techName}>{tech.name}</span>
                  <span className={styles.techCategory}>{tech.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.marqueeRow}>
          <div className={styles.trackRight}>
            {row2Duplicated.map((tech, index) => (
              <div key={`row2-${index}`} className={styles.techCard}>
                <span className={styles.techIcon}>{tech.icon}</span>
                <div className={styles.techInfo}>
                  <span className={styles.techName}>{tech.name}</span>
                  <span className={styles.techCategory}>{tech.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
