import React from 'react';

interface ApexIconProps {
  className?: string;
  size?: number; // width & height in px
  glow?: boolean;
}

export const ApexIcon: React.FC<ApexIconProps> = ({ 
  className = '', 
  size = 48,
  glow = true
}) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 200 200" 
        width={size} 
        height={size} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={glow ? 'drop-shadow-[0_0_12px_rgba(255,0,51,0.5)]' : ''}
      >
        <defs>
          <linearGradient id="iconRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#A1A1AA" />
            <stop offset="100%" stopColor="#3F3F46" />
          </linearGradient>

          <linearGradient id="iconRedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF0033" />
            <stop offset="100%" stopColor="#990011" />
          </linearGradient>

          <linearGradient id="iconCarBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#27272A" />
            <stop offset="50%" stopColor="#09090B" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>

          <radialGradient id="iconDarkDisc" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1C1C1C" />
            <stop offset="85%" stopColor="#0B0B0B" />
            <stop offset="100%" stopColor="#000000" />
          </radialGradient>

          <filter id="iconCyanGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Metallic Red & Silver Rim */}
        <circle cx="100" cy="100" r="96" fill="url(#iconRedGrad)" />
        <circle cx="100" cy="100" r="91" fill="url(#iconRimGrad)" />
        <circle cx="100" cy="100" r="88" fill="url(#iconDarkDisc)" stroke="url(#iconRedGrad)" strokeWidth="2" />

        {/* Speedometer Gauge Arc */}
        <path d="M 40 100 C 60 40, 140 40, 160 100" stroke="url(#iconRimGrad)" strokeWidth="4" fill="none" />
        <path d="M 120 45 C 140 50, 155 70, 160 100" stroke="url(#iconRedGrad)" strokeWidth="6" strokeDasharray="8 4" fill="none" />

        {/* Sleek Black Car Silhouette */}
        <path 
          d="M 45 110 C 60 95, 90 85, 115 88 C 135 90, 150 100, 165 110 C 150 112, 120 112, 95 112 Z" 
          fill="url(#iconCarBody)" 
          stroke="#71717A" 
          strokeWidth="1"
        />
        <path d="M 75 95 C 95 86, 120 86, 135 92" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.9" />
        <ellipse cx="158" cy="108" rx="4" ry="2" fill="#00F0FF" filter="url(#iconCyanGlow)" />

        {/* Wheel Rim Icon (O) */}
        <g transform="translate(100, 138) scale(0.85)">
          <circle cx="0" cy="0" r="28" fill="#09090B" stroke="#3F3F46" strokeWidth="2" />
          <path d="M -16 -12 A 20 20 0 0 1 6 -18 L 3 -10 A 12 12 0 0 0 -12 -6 Z" fill="#FF0033" />
          {[0, 72, 144, 216, 288].map((angle, idx) => {
            const rad = (angle * Math.PI) / 180;
            const x2 = Math.sin(rad) * 20;
            const y2 = -Math.cos(rad) * 20;
            return (
              <line key={idx} x1="0" y1="0" x2={x2} y2={y2} stroke="url(#iconRimGrad)" strokeWidth="4" strokeLinecap="round" />
            );
          })}
          <circle cx="0" cy="0" r="6" fill="#09090B" stroke="url(#iconRimGrad)" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="2" fill="#FF0033" />
        </g>
      </svg>
    </div>
  );
};

