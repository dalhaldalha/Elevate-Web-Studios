import styles from './Work.module.css';

const projects = [
  {
    title: 'Nexus SaaS Platform',
    description: 'End-to-end design and development of a B2B analytics dashboard. Built with React, Node.js, and a custom design system — resulting in a 60% increase in user engagement.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=1000&fit=crop&q=80',
    alt: 'Nexus SaaS analytics dashboard interface',
    offset: false,
  },
  {
    title: 'Vertex Finance Rebrand',
    description: 'Complete brand identity and website redesign for a fintech startup. Delivered a conversion-optimized landing page that increased demo requests by 45%.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=1000&fit=crop&q=80',
    alt: 'Vertex Finance fintech website redesign',
    offset: true,
  },
  {
    title: 'Meridian Health Portal',
    description: 'HIPAA-compliant patient portal with real-time scheduling, telehealth integration, and a fully accessible interface. Reduced appointment no-shows by 35%.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=1000&fit=crop&q=80',
    alt: 'Meridian Health patient portal interface',
    offset: false,
  },
  {
    title: 'Stratos Cloud Infrastructure',
    description: 'Marketing site and documentation hub for a cloud infrastructure company. Server-rendered Next.js site with sub-second load times and 98+ Lighthouse scores.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=1000&fit=crop&q=80',
    alt: 'Stratos cloud infrastructure marketing website',
    offset: true,
  },
  {
    title: 'Luminary E-Commerce',
    description: 'Custom headless commerce platform built on Next.js and Shopify APIs. Achieved a 2x improvement in page speed and a 38% lift in conversion rate.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1000&fit=crop&q=80',
    alt: 'Luminary e-commerce platform product page',
    offset: false,
  },
  {
    title: 'Arcadia Real Estate',
    description: 'Property listing platform with interactive maps, virtual tours, and an AI-powered recommendation engine. Increased qualified leads by 52%.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=1000&fit=crop&q=80',
    alt: 'Arcadia real estate platform property listings',
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
              <div className={styles.imageWrap}>
                <img
                  src={project.image}
                  alt={project.alt}
                  className={styles.projectImage}
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <a href="#" className={styles.readMore}>
                View Case Study <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
