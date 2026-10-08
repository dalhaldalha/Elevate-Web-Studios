import { useEffect, useRef } from 'react';

export function useScrollReveal({
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  stagger = 80,
  once = true,
  observeChildren = false,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user's motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('isRevealed');
      el.querySelectorAll('.revealChild').forEach((child) => {
        child.classList.add('isRevealed');
      });
      return;
    }

    const revealTarget = (target, delay = 0) => {
      if (delay && !target.style.transitionDelay) {
        target.style.transitionDelay = `${delay}ms`;
      }
      target.classList.add('isRevealed');
    };

    if (observeChildren) {
      const children = el.querySelectorAll('.revealChild');
      if (children.length === 0) {
        el.classList.add('isRevealed');
        return;
      }

      let batchCount = 0;
      let batchTimer = null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const currentDelay = batchCount * stagger;
              batchCount++;
              clearTimeout(batchTimer);
              batchTimer = setTimeout(() => {
                batchCount = 0;
              }, 160);

              revealTarget(entry.target, currentDelay);
              if (once) {
                observer.unobserve(entry.target);
              }
            }
          });
        },
        { threshold, rootMargin }
      );

      children.forEach((c) => observer.observe(c));

      return () => {
        clearTimeout(batchTimer);
        observer.disconnect();
      };
    } else {
      const revealAll = () => {
        el.classList.add('isRevealed');
        const children = el.querySelectorAll('.revealChild');
        children.forEach((child, index) => {
          revealTarget(child, index * stagger);
        });
      };

      const triggerReveal = () => {
        if (typeof window !== 'undefined' && window.__preloaderActive) {
          const onPreloaderReveal = () => {
            revealAll();
            window.removeEventListener('preloaderReveal', onPreloaderReveal);
          };
          window.addEventListener('preloaderReveal', onPreloaderReveal);
          setTimeout(() => {
            revealAll();
            window.removeEventListener('preloaderReveal', onPreloaderReveal);
          }, 1200);
        } else {
          revealAll();
        }
      };

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              triggerReveal();
              if (once) {
                observer.unobserve(entry.target);
              }
            }
          });
        },
        { threshold, rootMargin }
      );

      observer.observe(el);

      return () => {
        observer.disconnect();
      };
    }
  }, [threshold, rootMargin, stagger, once, observeChildren]);

  return ref;
}
