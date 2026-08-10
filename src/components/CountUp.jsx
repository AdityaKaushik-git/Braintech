import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from './ScrollReveal';

export default function CountUp({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5 });
  const countRef = useRef(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // easeOutExpo curve
      const easeProgress = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
      
      const currentVal = Math.floor(easeProgress * end);
      
      if (currentVal !== countRef.current) {
        setCount(currentVal);
        countRef.current = currentVal;
      }

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return <span ref={ref}>{count}{suffix}</span>;
}
