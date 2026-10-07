import { useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    company: 'Enterprise SaaS',
    quote: '"Elevate Web Studios transformed our online presence completely. Their team delivered a platform that increased our qualified leads by 40% within the first quarter."',
    name: 'Sarah Chen',
    title: 'VP of Marketing at NexaTech Solutions',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
  },
  {
    company: 'FinTech Startup',
    quote: '"The team at Elevate brought strategic thinking and technical excellence to every phase. Our new platform handles 10x the traffic with half the infrastructure cost."',
    name: 'Marcus Rodriguez',
    title: 'CTO at Vertex Financial',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80',
  },
  {
    company: 'Healthcare Platform',
    quote: '"Working with Elevate was seamless from day one. They understood our compliance requirements and delivered a patient portal that our users genuinely love."',
    name: 'Dr. Emily Walsh',
    title: 'Chief Digital Officer at Meridian Health',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className={styles.section} aria-label="Testimonials">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>Client Success Stories</h2>
          <p className={styles.headerText}>
            Hear directly from the teams we have partnered with to deliver transformative digital experiences.
          </p>
          <a href="#contact" className={styles.ctaButton}>
            <span>Get in Touch</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
        </div>
        <div className={styles.card}>
          <div className={styles.graphBackground} aria-hidden="true" />
          <button className={styles.prevButton} onClick={prev} aria-label="Previous Testimonial" type="button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          <div className={styles.testimonialContent}>
            <span className={styles.company}>{t.company}</span>
            <blockquote className={styles.quote}>{t.quote}</blockquote>
            <div className={styles.authorInfo}>
              <img src={t.avatar} alt={t.name} className={styles.avatar} width={100} height={100} loading="lazy" />
              <cite className={styles.authorName}>{t.name}</cite>
              <span className={styles.authorTitle}>{t.title}</span>
            </div>
          </div>
          <button className={styles.nextButton} onClick={next} aria-label="Next Testimonial" type="button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
