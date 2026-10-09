import { useScrollReveal } from '../../hooks/useScrollReveal.js';
import styles from './Work.module.css';

const projects = [
  {
    title: 'Oasis Brew',
    description: 'Serene digital experience for an artisanal Arabian coffee sanctuary and roastery. Features bilingual English & Arabic localization, interactive signature roast menus, ethical sourcing showcases, and online table reservations.',
    image: '/oasis-brew.png',
    alt: 'Oasis Brew artisanal Arabian specialty coffee and roastery website',
    link: 'https://oasis-brew.vercel.app/',
    isLive: true,
    offset: false,
  },
  {
    title: 'Atelier Noir',
    description: 'Ultra-luxury bespoke grooming sanctuary and private chair studio. Features custom appointment booking, master artisan profiles, spatial architectural design showcases, and bilingual English & Arabic typography.',
    image: '/atelier-noir.png',
    alt: 'Atelier Noir bespoke luxury grooming sanctuary website',
    link: 'https://atelier-noir-jet.vercel.app/',
    isLive: true,
    offset: true,
  },
  {
    title: 'FlowSpace',
    description: 'All-in-one agency operations operating system designed for African creative and tech service teams. Built with React and Vite, featuring integrated project tracking, automated billable time, M-Pesa & card invoicing, and an interactive ROI calculator.',
    image: '/flowspace.png',
    alt: 'FlowSpace agency management operating system interface',
    link: 'https://flowspace-group-13.vercel.app/',
    isLive: true,
    offset: false,
  },
  {
    title: 'Café Disco',
    description: 'Bilingual (EN / AR) interactive digital experience and retro neo-brutalist bento interface for an artisan Levantine vinyl listening sanctuary & specialty coffee bar. Built with React, dynamic audio atmosphere, and live order dispatch.',
    image: '/cafe-disco.png',
    alt: 'Café Disco retro neo-brutalist bento website interface',
    link: 'https://cafe-disco.vercel.app/',
    isLive: true,
    offset: true,
  },
  {
    title: 'HMD Limited',
    description: 'Comprehensive corporate digital platform and real estate property portal for a premier construction and civil engineering firm in Nigeria. Features dynamic property listings, service showcases, building material procurement, and client consultation workflows.',
    image: '/hmd-limited.png',
    alt: 'HMD Limited construction and real estate corporate platform',
    link: 'https://hmdlimited.com/',
    isLive: true,
    offset: false,
  },
];

export default function Work() {
  const headerRef = useScrollReveal({ stagger: 90 });
  const gridRef = useScrollReveal({ observeChildren: true, stagger: 100 });

  return (
    <section className={styles.section} aria-label="Selected Work" id="work">
      <div className="container">
        <div ref={headerRef} className={styles.header}>
          <div className="revealChild">
            <h2 className={styles.heading}>Selected<br />Work.</h2>
          </div>
          <div className={`${styles.headerRight} revealChild`}>
            <p className={styles.headerText}>
              A curated selection of projects where strategy, design, and engineering converge to deliver exceptional digital products for B2B clients.
            </p>
            <div className={styles.headerActions}>
              <a href="mailto:hello@elevatewebstudios.com" className={styles.btnSecondary}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>Write an Email</span>
              </a>
              <a href="#contact" className={styles.btnPrimary}>
                <span>View All Work</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div ref={gridRef} className={styles.grid}>
          {projects.map((project, index) => (
            <article key={index} className={`${project.offset ? styles.cardOffset : styles.card} revealChild`}>
              <a
                href={project.link || "#"}
                className={styles.imageWrap}
                {...(project.link ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-label={`View ${project.title}`}
              >
                {project.isLive && (
                  <span className={styles.liveBadge}>
                    <span className={styles.liveDot} />
                    Live Project
                  </span>
                )}
                <img
                  src={project.image}
                  alt={project.alt}
                  className={styles.projectImage}
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </a>
              <h3 className={styles.cardTitle}>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.titleLink}>
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <a
                href={project.link || "#"}
                className={styles.readMore}
                {...(project.link ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {project.link ? "Visit Live Site" : "View Case Study"}{" "}
                <span aria-hidden="true">{project.link ? "↗" : "→"}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
