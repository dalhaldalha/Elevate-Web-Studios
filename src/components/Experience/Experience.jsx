import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import styles from './Experience.module.css';

const milestones = [
  { period: '2018 – 2019', role: 'Founded Elevate Web Studios', company: 'Independent Studio' },
  { period: '2019 – 2020', role: 'First Enterprise Client', company: 'NexaTech Partnership' },
  { period: '2020 – 2022', role: 'Scaled to 12-Person Team', company: 'Full-Service Agency' },
  { period: '2022 – 2024', role: 'Launched Product Division', company: 'SaaS & Custom Platforms' },
  { period: '2024 – Present', role: '50+ Projects Delivered', company: 'Global B2B Clients' },
];

export default function Experience() {
  const leftRef = useScrollReveal({ stagger: 90 });
  const timelineRef = useScrollReveal({ observeChildren: true, stagger: 80 });

  return (
    <section className={styles.section} aria-label="Our Journey" id="journey">
      <div className="container">
        <div className={styles.grid}>
          <div ref={leftRef}>
            <h2 className={`${styles.heading} revealChild`}>Our Journey<br />&amp; Milestones.</h2>
            <p className={`${styles.description} revealChild`}>
              From a two-person startup to a trusted B2B agency, our trajectory reflects a relentless commitment to quality and client success.
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
          <div ref={timelineRef} className={styles.timeline}>
            {milestones.map((item, index) => (
              <div key={index} className={`${styles.item} revealChild`}>
                <div className={styles.itemDate}>
                  <span className={styles.milestoneDot} />
                  {item.period}
                </div>
                <div className={styles.itemTitle}>{item.role}</div>
                <div className={styles.itemCompany}>{item.company}</div>
                <div className={styles.expandIcon}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v16m8-8H4"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
