import React, { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  isHighlighted?: boolean;
  onClick?: () => void;
}

function FeatureCard({
  title,
  description,
  icon,
  isHighlighted = false,
  onClick,
}: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`feature-card ${isHighlighted ? "highlighted" : ""} ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="feature-icon">
        <span className="icon-emoji">{icon}</span>
      </div>
      <div className="feature-content">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
      <div className="feature-action">
        <span className="action-arrow">→</span>
      </div>
    </div>
  );
}

export default FeatureCard;
