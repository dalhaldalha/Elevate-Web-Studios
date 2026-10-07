import styles from './Work.module.css';

const projects = [
  {
    title: 'Café Disco',
    description: 'Bilingual (EN / AR) interactive digital experience and retro neo-brutalist bento interface for an artisan Levantine vinyl listening sanctuary & specialty coffee bar. Built with React, dynamic audio atmosphere, and live order dispatch.',
    image: '/cafe-disco.png',
    alt: 'Café Disco retro neo-brutalist bento website interface',
    link: 'https://cafe-disco.vercel.app/',
    isLive: true,
    offset: false,
  },
  {
    title: 'FlowSpace',
    description: 'All-in-one agency operations operating system designed for African creative and tech service teams. Built with React and Vite, featuring integrated project tracking, automated billable time, M-Pesa & card invoicing, and an interactive ROI calculator.',
    image: '/flowspace.png',
    alt: 'FlowSpace agency management operating system interface',
    link: 'https://flowspace-group-13.vercel.app/',
    isLive: true,
    offset: true,
  },
  {
    title: 'Vertex Finance Rebrand',
    description: 'Complete brand identity and website redesign for a fintech startup. Delivered a conversion-optimized landing page that increased demo requests by 45%.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop&q=80',
    alt: 'Vertex Finance fintech website redesign',
    offset: false,
  },
  {
    title: 'Meridian Health Portal',
    description: 'HIPAA-compliant patient portal with real-time scheduling, telehealth integration, and a fully accessible interface. Reduced appointment no-shows by 35%.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=1000&fit=crop&q=80',
    alt: 'Meridian Health patient portal interface',
    offset: true,
  },
  {
    title: 'Stratos Cloud Infrastructure',
    description: 'Marketing site and documentation hub for a cloud infrastructure company. Server-rendered Next.js site with sub-second load times and 98+ Lighthouse scores.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=1000&fit=crop&q=80',
    alt: 'Stratos cloud infrastructure marketing website',
    offset: false,
  },
  {
    title: 'Luminary E-Commerce',
    description: 'Custom headless commerce platform built on Next.js and Shopify APIs. Achieved a 2x improvement in page speed and a 38% lift in conversion rate.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1000&fit=crop&q=80',
    alt: 'Luminary e-commerce platform product page',
    offset: true,
  },
];

export default function Work() {
  return (
    <section className={styles.section} aria-label="Selected Work" id="work">
      <div className="container">
        <div className={styles.header}>
          <div>
            <h2 className={styles.heading}>Selected<br />Work.</h2>
          </div>
          <div className={styles.headerRight}>
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
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <article key={index} className={project.offset ? styles.cardOffset : styles.card}>
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
