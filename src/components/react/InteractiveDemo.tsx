import React, { useState, useEffect } from "react";
import styles from "./InteractiveDemo.module.css";

type InteractiveDemoProps = {
  title: string;
  description: string;
  initialValue?: number;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
};

function InteractiveDemo({
  title,
  description,
  initialValue = 50,
  min = 0,
  max = 100,
  step = 1,
  unit = "%",
}: InteractiveDemoProps) {
  const [value, setValue] = useState(initialValue);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setValue((prev) => {
          const newValue = prev + (Math.random() - 0.5) * 10;
          return Math.max(min, Math.min(max, newValue));
        });
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isAnimating, min, max]);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const resetValue = () => {
    setValue(initialValue);
    setIsAnimating(false);
  };

  return (
    <div className={styles.interactiveDemo}>
      <div className={styles.demoHeader}>
        <h3 className={styles.demoTitle}>{title}</h3>
        <p className={styles.demoDescription}>{description}</p>
      </div>

      <div className={styles.demoControls}>
        <div className={styles.sliderContainer}>
          <label htmlFor="demo-slider" className={styles.sliderLabel}>
            Value: {value.toFixed(1)}
            {unit}
          </label>
          <input
            id="demo-slider"
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleSliderChange}
            className={styles.demoSlider}
            disabled={isAnimating}
          />
        </div>

        <div className={styles.demoButtons}>
          <button
            onClick={toggleAnimation}
            className={`${styles.demoButton} ${
              isAnimating ? styles.active : ""
            }`}
          >
            {isAnimating ? "Stop Animation" : "Start Animation"}
          </button>
          <button
            onClick={resetValue}
            className={`${styles.demoButton} ${styles.secondary}`}
            disabled={isAnimating}
          >
            Reset
          </button>
        </div>
      </div>

      <div className={styles.demoVisualization}>
        <div
          className={styles.demoBar}
          style={{
            height: "30px",
            width: `${((value - min) / (max - min)) * 100}%`,
            backgroundColor: `hsl(${
              55 + ((value - min) / (max - min)) * 220
            }, 100%, 50%)`,
          }}
        />
      </div>
    </div>
  );
}

export default InteractiveDemo;
