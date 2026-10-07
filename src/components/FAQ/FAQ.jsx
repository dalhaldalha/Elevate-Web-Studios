import { useRef } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'What is your typical project timeline?',
    hint: 'How long does a project take?',
    answer: 'Most projects take 6–12 weeks from kickoff to launch, depending on scope. A marketing website typically takes 6–8 weeks, while complex web applications can take 10–16 weeks. We provide a detailed timeline during our discovery phase.',
  },
  {
    question: 'What technologies do you work with?',
    hint: 'Which tech stack do you use?',
    answer: 'Our core stack includes React, Next.js, TypeScript, Node.js, and PostgreSQL. We also work with headless CMS platforms like Sanity and Contentful, and deploy primarily on Vercel and AWS. We choose the best tools for each project.',
  },
  {
    question: 'How does your pricing work?',
    hint: 'What do your services cost?',
    answer: 'We offer project-based pricing with clear milestones and deliverables. Engagements typically start at $15,000 for a marketing website and $40,000+ for web applications. We provide a detailed proposal after our discovery call.',
  },
  {
    question: 'Do you offer ongoing support?',
    hint: 'What happens after launch?',
    answer: 'Yes. We offer monthly retainer packages that include maintenance, performance monitoring, content updates, and iterative improvements. Many of our clients continue working with us for years after the initial launch.',
  },
  {
    question: 'What does your process look like?',
    hint: 'How do you work with clients?',
    answer: 'Our process follows four phases: Discovery (research & strategy), Design (wireframes & visual design), Development (engineering & testing), and Launch (deployment & optimization). You will have a dedicated project manager throughout.',
  },
];

export default function FAQ() {
  const listRef = useRef(null);

  const handleToggle = (e) => {
    if (e.target.open && listRef.current) {
      const allDetails = listRef.current.querySelectorAll('details');
      allDetails.forEach((detail) => {
        if (detail !== e.target) {
          detail.removeAttribute('open');
        }
      });
    }
  };

  return (
    <section className={styles.section} aria-label="Frequently Asked Questions" id="faq">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>Frequently<br />Asked Questions</h2>
          <p className={styles.headerText}>
            Everything you need to know about working with Elevate Web Studios. Can't find what you're looking for? Reach out directly.
          </p>
          <a href="#contact" className={styles.ctaButton}>
            <span>Get in Touch</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>
        <div className={styles.list} ref={listRef}>
          {faqs.map((faq, index) => (
            <details key={index} className={styles.details} onToggle={handleToggle}>
              <summary className={styles.summary}>
                <div className={styles.summaryLeft}>
                  <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                  <span className={styles.question}>{faq.question}</span>
                </div>
                <div className={styles.summaryRight}>
                  <span className={styles.hint}>{faq.hint}</span>
                  <div className={styles.toggleIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v16m8-8H4"/></svg>
                  </div>
                </div>
              </summary>
              <div className={styles.answer}>{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
