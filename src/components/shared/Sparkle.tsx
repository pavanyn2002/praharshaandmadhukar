'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

interface SparkleProps {
  style?: React.CSSProperties;
}

const Sparkle: React.FC<SparkleProps> = ({ style }) => {
  return (
    <div className="absolute pointer-events-none" style={style}>
      {Array.from({ length: 12 }).map((_, i) => {
        const size = Math.random() * 16 + 8;
        const angle = (i / 12) * 360;
        const distance = 40;
        const x = Math.cos(angle * (Math.PI / 180)) * distance;
        const y = Math.sin(angle * (Math.PI / 180)) * distance;
        return (
          <Sparkles
            key={i}
            className="absolute text-accent"
            style={{
              width: size,
              height: size,
              top: y,
              left: x,
              animation: `sparkle 0.8s ease-out forwards`,
              animationDelay: `${Math.random() * 0.2}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Sparkle;
