import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import styles from './Services.module.css';

const services = [
  {
    title: 'Web Design & UX',
    description: 'We craft intuitive, conversion-focused interfaces that align business goals with user needs — from wireframes to pixel-perfect designs.',
    features: ['User Research & Strategy', 'UI/UX Design Systems', 'Responsive Prototyping', 'Accessibility Audits'],
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
    ),
  },
  {
    title: 'Full-Stack Development',
    description: 'Production-grade web applications built with React, Next.js, Node.js, and modern cloud infrastructure — engineered for scale.',
    features: ['React & Next.js Apps', 'API Development', 'Database Architecture', 'Cloud Deployment'],
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
    ),
  },
  {
    title: 'Brand Identity',
    description: 'Strategic brand development that positions your company for growth — logo systems, visual identity, and comprehensive brand guidelines.',
    features: ['Brand Strategy', 'Logo & Identity Design', 'Brand Guidelines', 'Marketing Collateral'],
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>
    ),
  },
  {
    title: 'Growth & SEO',
    description: 'Data-driven performance optimization, technical SEO, and conversion rate strategies that turn your website into a revenue engine.',
    features: ['Technical SEO', 'Performance Optimization', 'Analytics & Tracking', 'A/B Testing'],
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
    ),
  },
];

export default function Services() {
  const headerRef = useScrollReveal({ stagger: 90 });
  const gridRef = useScrollReveal({ observeChildren: true, stagger: 80 });
  const footerNoteRef = useScrollReveal();

  return (
    <section className={styles.section} aria-label="Services" id="services">
      <div className="container">
        <div ref={headerRef} className={styles.header}>
          <div className="revealChild">
            <h2 className={styles.heading}>Services<br />We Deliver.</h2>
          </div>
          <div className={`${styles.headerRight} revealChild`}>
            <p className={styles.headerText}>
              We offer end-to-end digital services, from initial strategy and design through to development and ongoing optimization.
            </p>
            <div className={styles.headerActions}>
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
        </div>
        <div ref={gridRef} className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={`${styles.card} revealChild`}>
              <div>
                <div className={styles.iconWrap}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
              </div>
              <ul className={styles.features}>
                {service.features.map((feature, i) => (
                  <li key={i} className={styles.feature}>
                    <span className={styles.featureDot}>•</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p ref={footerNoteRef} className={`${styles.footerNote} revealChild`}>
          Don't see what you need? <a href="#contact" className={styles.footerLink}>Let's talk about your project.</a>
        </p>
      </div>
    </section>
  );
}
