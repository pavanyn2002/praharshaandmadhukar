import type { FC, SVGProps } from 'react';

const DiyaIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    {...props}
  >
    <defs>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path
      d="M 10 70 Q 50 95, 90 70 L 85 80 Q 50 105, 15 80 Z"
      fill="#f97316"
    />
    <ellipse cx="50" cy="70" rx="40" ry="15" fill="#fb923c" />
    <path
      d="M 50 40 C 55 30, 60 45, 50 60 C 40 45, 45 30, 50 40 Z"
      fill="#fde047"
      filter="url(#glow)"
    >
      <animate
        attributeName="d"
        values="M 50 40 C 55 30, 60 45, 50 60 C 40 45, 45 30, 50 40 Z; M 50 35 C 60 25, 65 45, 50 60 C 35 45, 40 25, 50 35 Z; M 50 40 C 55 30, 60 45, 50 60 C 40 45, 45 30, 50 40 Z"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

export default DiyaIcon;
