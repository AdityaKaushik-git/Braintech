import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — triggers when an element enters the viewport.
 * @param {Object} options  IntersectionObserver options
 * @returns { ref, isVisible }
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // fire once
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

/**
 * ScrollReveal — wrapper component for reveal animations.
 * Usage: <ScrollReveal animation="fade-up" delay={200}> ... </ScrollReveal>
 */
const animations = {
  'fade-up':    'translate-y-8 opacity-0',
  'fade-down':  '-translate-y-8 opacity-0',
  'fade-left':  'translate-x-8 opacity-0',
  'fade-right': '-translate-x-8 opacity-0',
  'fade':       'opacity-0',
  'zoom-in':    'scale-95 opacity-0',
  'zoom-up':    'scale-95 translate-y-6 opacity-0',
};

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  className = '',
  as: Tag = 'div',
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out will-change-transform ${
        isVisible ? 'translate-y-0 translate-x-0 scale-100 opacity-100' : animations[animation]
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </Tag>
  );
}
