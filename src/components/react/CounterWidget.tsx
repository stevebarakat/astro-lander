import React, { useState, useEffect } from "react";

interface CounterWidgetProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  title?: string;
  description?: string;
}

function CounterWidget({
  target,
  duration = 2000,
  prefix = "",
  suffix = "",
  title,
  description,
}: CounterWidgetProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;

    const updateCount = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(
        startValue + (target - startValue) * easeOutCubic
      );

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [target, duration, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("counter-widget");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div id="counter-widget" className="counter-widget">
      {title && <h3 className="counter-title">{title}</h3>}
      <div className="counter-display">
        <span className="counter-prefix">{prefix}</span>
        <span className="counter-number">{count.toLocaleString()}</span>
        <span className="counter-suffix">{suffix}</span>
      </div>
      {description && <p className="counter-description">{description}</p>}
    </div>
  );
}

export default CounterWidget;
