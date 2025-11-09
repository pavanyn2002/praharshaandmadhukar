'use client';

import React, { useMemo } from 'react';
import DiyaIcon from '../icons/DiyaIcon';

interface ParticleBackgroundProps {
  type: 'diya' | 'confetti' | 'firework';
  count: number;
}

const colors = ['#fde047', '#f97316', '#ec4899', '#8b5cf6'];

const Particle = ({ type, style }: { type: 'diya' | 'confetti' | 'firework', style: React.CSSProperties }) => {
  switch (type) {
    case 'diya':
      return <DiyaIcon className="absolute w-10 h-10" style={style} />;
    case 'confetti':
      return <div className="absolute w-3 h-3" style={style}></div>;
    case 'firework':
       return <div className="absolute w-2 h-2 bg-primary rounded-full" style={style}></div>;
    default:
      return null;
  }
};

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ type, count }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const style: React.CSSProperties = {};
      const duration = Math.random() * 5 + 5; // 5 to 10 seconds
      const delay = Math.random() * 10;
      
      switch (type) {
        case 'diya':
          style.animation = `float ${duration}s linear ${delay}s infinite`;
          style.left = `${Math.random() * 100}vw`;
          style['--float-x-end'] = `${(Math.random() - 0.5) * 20}vw`;
          style['--float-rotate-end'] = `${(Math.random() - 0.5) * 50}deg`;
          break;
        case 'confetti':
          style.animation = `confetti-fall ${duration}s linear ${delay}s infinite`;
          style.left = `${Math.random() * 100}vw`;
          style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          break;
        case 'firework':
          const size = Math.random() * 5 + 2;
          style.width = `${size}px`;
          style.height = `${size}px`;
          style.backgroundColor = `hsl(${Math.random() * 60 + 320}, 100%, 70%)`; // Pinks and oranges
          style.animation = `firework 1.5s ease-out ${Math.random() * 2}s forwards`;
          style.borderRadius = '50%';
          style.position = 'absolute';
          style.top = `${Math.random() * 50 + 10}%`; // top half
          style.left = `${Math.random() * 80 + 10}%`;
          style['--x'] = `${(Math.random() - 0.5) * 200}px`;
          style['--y'] = `${(Math.random() - 0.5) * 200}px`;
          break;
      }
      return { id: i, type, style };
    });
  }, [type, count]);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      {particles.map(({ id, type, style }) => (
        <Particle key={id} type={type} style={style} />
      ))}
    </div>
  );
};

export default ParticleBackground;
