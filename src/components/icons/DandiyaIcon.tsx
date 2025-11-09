import type { FC, SVGProps } from 'react';

const DandiyaIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="dandiya-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f97316" />
        <stop offset="50%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#fde047" />
      </linearGradient>
    </defs>
    <g transform="rotate(45 24 24)">
      <rect x="6" y="21" width="36" height="6" rx="3" fill="url(#dandiya-grad)" />
      <path d="M6 22h36" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
      <path d="M9 21v6" stroke="white" strokeOpacity="0.5" strokeWidth="1" />
      <path d="M39 21v6" stroke="white" strokeOpacity="0.5" strokeWidth="1" />
    </g>
  </svg>
);

export default DandiyaIcon;
