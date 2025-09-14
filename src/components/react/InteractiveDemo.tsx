import React, { useState, useEffect } from "react";

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
    <div className="interactive-demo">
      <div className="demo-header">
        <h3 className="demo-title">{title}</h3>
        <p className="demo-description">{description}</p>
      </div>

      <div className="demo-controls">
        <div className="slider-container">
          <label htmlFor="demo-slider" className="slider-label">
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
            className="demo-slider"
            disabled={isAnimating}
          />
        </div>

        <div className="demo-buttons">
          <button
            onClick={toggleAnimation}
            className={`demo-button ${isAnimating ? "active" : ""}`}
          >
            {isAnimating ? "Stop Animation" : "Start Animation"}
          </button>
          <button
            onClick={resetValue}
            className="demo-button secondary"
            disabled={isAnimating}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="demo-visualization">
        <div
          className="demo-bar"
          style={{
            height: "30px",
            width: `${((value - min) / (max - min)) * 100}%`,
            backgroundColor: `hsl(${
              120 + ((value - min) / (max - min)) * 120
            }, 70%, 50%)`,
          }}
        />
      </div>
    </div>
  );
}

export default InteractiveDemo;
