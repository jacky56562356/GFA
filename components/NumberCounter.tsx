import React, { useEffect, useState, useRef } from 'react';

interface NumberCounterProps {
  end: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  useCommas?: boolean;
}

const NumberCounter: React.FC<NumberCounterProps> = ({
  end,
  decimals = 0,
  duration = 2000,
  prefix = '',
  suffix = '',
  useCommas = false,
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number | null = null;
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        const easeOutQuart = 1 - Math.pow(1 - progress / duration, 4);
        setCount(easeOutQuart * end);
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [end, duration, isVisible]);

  let displayValue = count.toFixed(decimals);
  if (useCommas) {
    const parts = displayValue.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    displayValue = parts.join('.');
  }

  return (
    <span ref={countRef}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

export default NumberCounter;
