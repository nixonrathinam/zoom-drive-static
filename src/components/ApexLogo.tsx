import React from 'react';

interface ApexLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'badge' | 'wide';
  showTagline?: boolean;
}

export const ApexLogo: React.FC<ApexLogoProps> = ({ 
  className = '', 
  size = 'md',
  variant = 'badge',
}) => {
  const sizeMap = {
    sm: 'h-9 w-9',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24'
  };

  const wideHeightMap = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-16',
    xl: 'h-24'
  };

  if (variant === 'wide') {
    return (
      <div className={`inline-flex items-center gap-3 cursor-pointer select-none group ${className}`}>
        <svg 
          viewBox="0 0 620 310" 
          className={`${wideHeightMap[size]} w-auto transition-transform duration-300 group-hover:scale-105`}
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="chromeGradWide" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="30%" stopColor="#E2E8F0" />
              <stop offset="60%" stopColor="#94A3B8" />
              <stop offset="85%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>
            <linearGradient id="rimGradWide" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#A1A1AA" />
              <stop offset="100%" stopColor="#3F3F46" />
            </linearGradient>
            <linearGradient id="redSpeedGradWide" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF0033" />
              <stop offset="50%" stopColor="#E11D48" />
              <stop offset="100%" stopColor="#990011" />
            </linearGradient>
            <linearGradient id="carBodyGradWide" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#27272A" />
              <stop offset="40%" stopColor="#09090B" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>

          {/* Speedometer Arch Arc */}
          <path d="M 120 120 C 180 35, 340 10, 480 95" stroke="#94A3B8" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M 330 22 C 370 20, 410 28, 480 95" stroke="url(#redSpeedGradWide)" strokeWidth="12" strokeDasharray="16 8" strokeLinecap="butt" fill="none" />
          <path d="M 345 70 L 400 62 L 355 75 Z" fill="#FF0033" />

          {/* Black Sports Car Silhouette */}
          <path d="M 135 130 C 145 110, 180 98, 205 92 C 240 82, 280 72, 340 78 C 390 82, 430 96, 475 112 C 510 125, 530 135, 545 145 C 510 148, 480 148, 450 148 C 420 148, 380 148, 310 148 C 240 148, 190 148, 135 130 Z" fill="url(#carBodyGradWide)" stroke="#52525B" strokeWidth="1.5" />
          <path d="M 195 95 C 235 80, 280 74, 340 80 C 375 84, 405 92, 440 106" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.85" />
          <path d="M 485 118 Q 515 125 525 132 Q 500 130 480 124 Z" fill="#00F0FF" />
          <ellipse cx="510" cy="128" rx="8" ry="3" fill="#FFFFFF" />

          {/* ZOOM */}
          <path d="M 35 152 L 130 152 L 110 162 L 15 162 Z" fill="url(#redSpeedGradWide)" />
          <path d="M 60 170 L 140 170 L 125 178 L 45 178 Z" fill="url(#redSpeedGradWide)" />
          <path d="M 105 142 L 205 142 L 205 158 L 138 198 L 210 198 L 210 216 L 100 216 L 100 200 L 168 160 L 105 160 Z" fill="url(#chromeGradWide)" stroke="#475569" strokeWidth="1.5" />

          {/* WHEEL O 1 */}
          <g transform="translate(255, 178)">
            <circle cx="0" cy="0" r="38" fill="#09090B" stroke="#3F3F46" strokeWidth="3" />
            <path d="M -22 -18 A 26 26 0 0 1 8 -26 L 4 -14 A 18 18 0 0 0 -16 -8 Z" fill="#FF0033" />
            <circle cx="0" cy="0" r="28" fill="none" stroke="url(#rimGradWide)" strokeWidth="3" />
            {[0, 72, 144, 216, 288].map((angle, idx) => (
              <line key={idx} x1="0" y1="0" x2={Math.sin(angle * Math.PI / 180) * 27} y2={-Math.cos(angle * Math.PI / 180) * 27} stroke="url(#rimGradWide)" strokeWidth="5.5" strokeLinecap="round" />
            ))}
            <circle cx="0" cy="0" r="9" fill="#09090B" stroke="url(#rimGradWide)" strokeWidth="2" />
            <circle cx="0" cy="0" r="3" fill="#FF0033" />
          </g>

          {/* WHEEL O 2 */}
          <g transform="translate(350, 178)">
            <circle cx="0" cy="0" r="38" fill="#09090B" stroke="#3F3F46" strokeWidth="3" />
            <path d="M -22 -18 A 26 26 0 0 1 8 -26 L 4 -14 A 18 18 0 0 0 -16 -8 Z" fill="#FF0033" />
            <circle cx="0" cy="0" r="28" fill="none" stroke="url(#rimGradWide)" strokeWidth="3" />
            {[0, 72, 144, 216, 288].map((angle, idx) => (
              <line key={idx} x1="0" y1="0" x2={Math.sin(angle * Math.PI / 180) * 27} y2={-Math.cos(angle * Math.PI / 180) * 27} stroke="url(#rimGradWide)" strokeWidth="5.5" strokeLinecap="round" />
            ))}
            <circle cx="0" cy="0" r="9" fill="#09090B" stroke="url(#rimGradWide)" strokeWidth="2" />
            <circle cx="0" cy="0" r="3" fill="#FF0033" />
          </g>

          {/* M */}
          <path d="M 400 142 L 424 142 L 444 185 L 464 142 L 488 142 L 488 216 L 468 216 L 468 168 L 448 210 L 440 210 L 420 168 L 420 216 L 400 216 Z" fill="url(#chromeGradWide)" stroke="#475569" strokeWidth="1.5" />

          {/* KEY FOB */}
          <g transform="translate(505, 175) rotate(18)">
            <circle cx="0" cy="-28" r="8" fill="none" stroke="url(#chromeGradWide)" strokeWidth="2.5" />
            <rect x="-14" y="-20" width="28" height="52" rx="14" fill="#09090B" stroke="url(#chromeGradWide)" strokeWidth="2" />
            <circle cx="0" cy="-8" r="4" fill="#27272A" stroke="#A1A1AA" strokeWidth="1" />
            <circle cx="0" cy="5" r="4" fill="#27272A" stroke="#A1A1AA" strokeWidth="1" />
            <rect x="-4" y="16" width="8" height="3" rx="1" fill="#FF0033" />
          </g>

          {/* DRIVE */}
          <text x="235" y="256" fontFamily="Impact, 'Arial Black', sans-serif" fontStyle="italic" fontWeight="900" fontSize="48" letterSpacing="2" fill="url(#redSpeedGradWide)">DRIVE</text>

          {/* CAR RENTAL */}
          <line x1="120" y1="280" x2="200" y2="280" stroke="#FF0033" strokeWidth="2" />
          <text x="305" y="285" fontFamily="sans-serif" fontWeight="800" fontSize="18" letterSpacing="8" fill="#E2E8F0" textAnchor="middle">CAR RENTAL</text>
          <line x1="410" y1="280" x2="490" y2="280" stroke="#FF0033" strokeWidth="2" />
        </svg>
      </div>
    );
  }

  {/* DEFAULT: Circular Badge Emblem matching uploaded image */}
  return (
    <div className={`inline-flex items-center gap-2 cursor-pointer select-none group ${className}`}>
      <svg 
        viewBox="0 0 500 500" 
        className={`${sizeMap[size]} transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(255,0,51,0.25)]`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Outer Bezel Chrome 3D Metallic Gradient */}
          <linearGradient id="badgeBezel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#CBD5E1" />
            <stop offset="50%" stopColor="#475569" />
            <stop offset="75%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          {/* Inner Disc Dark Matte Radial Gradient */}
          <radialGradient id="badgeDarkDisc" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1A1A1E" />
            <stop offset="70%" stopColor="#0B0B0E" />
            <stop offset="100%" stopColor="#020203" />
          </radialGradient>

          {/* Metallic Silver Chrome Gradient */}
          <linearGradient id="badgeChrome" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#E2E8F0" />
            <stop offset="65%" stopColor="#94A3B8" />
            <stop offset="85%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          {/* Vivid Red Speed Gradient */}
          <linearGradient id="badgeRed" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF0033" />
            <stop offset="50%" stopColor="#E11D48" />
            <stop offset="100%" stopColor="#990011" />
          </linearGradient>

          {/* Wheel Rim Metallic Gradient */}
          <linearGradient id="badgeRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#A1A1AA" />
            <stop offset="100%" stopColor="#3F3F46" />
          </linearGradient>

          {/* Car Body Gradient */}
          <linearGradient id="badgeCarBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#27272A" />
            <stop offset="40%" stopColor="#09090B" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>

          <filter id="badgeCyanGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. OUTER CIRCULAR CHROME BEZEL RING */}
        <circle cx="250" cy="250" r="242" fill="url(#badgeBezel)" />
        <circle cx="250" cy="250" r="236" fill="#0A0A0C" />
        <circle cx="250" cy="250" r="232" fill="url(#badgeDarkDisc)" stroke="url(#badgeBezel)" strokeWidth="1.5" />

        {/* 2. INNER RED ACCENT CIRCULAR ARC */}
        <path 
          d="M 60 210 A 200 200 0 1 1 440 210" 
          stroke="url(#badgeRed)" 
          strokeWidth="3.5" 
          fill="none" 
          opacity="0.95"
        />

        {/* 3. SPEEDOMETER ARCH & CAR SILHOUETTE */}
        <g transform="translate(15, 15)">
          {/* Speedometer Gauge Arc */}
          <path d="M 100 175 C 160 80, 310 55, 370 145" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M 260 70 C 295 68, 330 75, 370 145" stroke="url(#badgeRed)" strokeWidth="10" strokeDasharray="12 6" fill="none" />
          <path d="M 270 115 L 315 110 L 280 120 Z" fill="#FF0033" />

          {/* Black Sports Car */}
          <path 
            d="M 105 180 C 115 160, 150 148, 175 142 C 210 132, 250 122, 310 128 C 360 132, 400 146, 435 162 C 455 170, 465 178, 470 185 C 435 188, 405 188, 375 188 C 305 188, 220 188, 105 180 Z" 
            fill="url(#badgeCarBody)" 
            stroke="#52525B" 
            strokeWidth="1.5"
          />
          {/* Roof highlight */}
          <path d="M 165 145 C 205 130, 250 124, 310 130 C 345 134, 375 142, 410 156" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.8" />
          {/* Headlight */}
          <path d="M 430 168 Q 455 173 462 178 Q 442 176 425 172 Z" fill="#00F0FF" filter="url(#badgeCyanGlow)" />
          <ellipse cx="452" cy="175" rx="6" ry="2.5" fill="#FFFFFF" />
          {/* Taillight */}
          <path d="M 112 165 Q 105 170 102 176 Q 118 172 128 168 Z" fill="#FF0033" />
        </g>

        {/* 4. ZOOM TEXT WITH WHEEL RIMS AND KEY FOB */}
        <g transform="translate(0, 15)">
          {/* Speed Streaks behind Z */}
          <path d="M 40 230 L 125 230 L 108 238 L 22 238 Z" fill="url(#badgeRed)" />
          <path d="M 60 245 L 132 245 L 118 251 L 48 251 Z" fill="url(#badgeRed)" />
          <path d="M 80 258 L 140 258 L 128 263 L 70 263 Z" fill="url(#badgeRed)" />

          {/* Letter Z */}
          <path 
            d="M 98 220 L 180 220 L 180 234 L 125 268 L 185 268 L 185 282 L 94 282 L 94 268 L 148 234 L 98 234 Z" 
            fill="url(#badgeChrome)" 
            stroke="#475569" 
            strokeWidth="1.5"
          />

          {/* Wheel Rim 1 (O) */}
          <g transform="translate(222, 251)">
            <circle cx="0" cy="0" r="32" fill="#09090B" stroke="#3F3F46" strokeWidth="2.5" />
            <path d="M -18 -14 A 20 20 0 0 1 6 -20 L 3 -11 A 14 14 0 0 0 -13 -6 Z" fill="#FF0033" />
            <circle cx="0" cy="0" r="23" fill="none" stroke="url(#badgeRim)" strokeWidth="2.5" />
            {[0, 72, 144, 216, 288].map((angle, idx) => (
              <line key={idx} x1="0" y1="0" x2={Math.sin(angle * Math.PI / 180) * 22} y2={-Math.cos(angle * Math.PI / 180) * 22} stroke="url(#badgeRim)" strokeWidth="4.5" strokeLinecap="round" />
            ))}
            <circle cx="0" cy="0" r="7" fill="#09090B" stroke="url(#badgeRim)" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="2.5" fill="#FF0033" />
          </g>

          {/* Wheel Rim 2 (O) */}
          <g transform="translate(302, 251)">
            <circle cx="0" cy="0" r="32" fill="#09090B" stroke="#3F3F46" strokeWidth="2.5" />
            <path d="M -18 -14 A 20 20 0 0 1 6 -20 L 3 -11 A 14 14 0 0 0 -13 -6 Z" fill="#FF0033" />
            <circle cx="0" cy="0" r="23" fill="none" stroke="url(#badgeRim)" strokeWidth="2.5" />
            {[0, 72, 144, 216, 288].map((angle, idx) => (
              <line key={idx} x1="0" y1="0" x2={Math.sin(angle * Math.PI / 180) * 22} y2={-Math.cos(angle * Math.PI / 180) * 22} stroke="url(#badgeRim)" strokeWidth="4.5" strokeLinecap="round" />
            ))}
            <circle cx="0" cy="0" r="7" fill="#09090B" stroke="url(#badgeRim)" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="2.5" fill="#FF0033" />
          </g>

          {/* Letter M */}
          <path 
            d="M 342 220 L 362 220 L 378 256 L 394 220 L 414 220 L 414 282 L 398 282 L 398 242 L 382 278 L 374 278 L 358 242 L 358 282 L 342 282 Z" 
            fill="url(#badgeChrome)" 
            stroke="#475569" 
            strokeWidth="1.5"
          />

          {/* Key Fob */}
          <g transform="translate(428, 250) rotate(16)">
            <circle cx="0" cy="-22" r="6" fill="none" stroke="url(#badgeChrome)" strokeWidth="2" />
            <rect x="-11" y="-16" width="22" height="42" rx="11" fill="#09090B" stroke="url(#badgeChrome)" strokeWidth="1.8" />
            <circle cx="0" cy="-6" r="3" fill="#27272A" stroke="#A1A1AA" strokeWidth="0.8" />
            <circle cx="0" cy="4" r="3" fill="#27272A" stroke="#A1A1AA" strokeWidth="0.8" />
            <rect x="-3" y="13" width="6" height="2.5" rx="0.8" fill="#FF0033" />
          </g>
        </g>

        {/* 5. DRIVE TEXT */}
        <g transform="translate(0, 12)">
          <path d="M 98 292 L 195 292 L 182 298 L 110 298 Z" fill="url(#badgeRed)" />
          <text 
            x="200" 
            y="320" 
            fontFamily="Impact, 'Arial Black', sans-serif" 
            fontStyle="italic"
            fontWeight="900" 
            fontSize="44" 
            letterSpacing="2" 
            fill="url(#badgeRed)"
          >
            DRIVE
          </text>
        </g>

        {/* 6. CAR RENTAL SUBTITLE */}
        <g transform="translate(0, 20)">
          <line x1="110" y1="342" x2="175" y2="342" stroke="#FF0033" strokeWidth="2" />
          <text 
            x="250" 
            y="346" 
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
            fontWeight="800" 
            fontSize="16" 
            letterSpacing="7" 
            fill="#E2E8F0"
            textAnchor="middle"
          >
            CAR RENTAL
          </text>
          <line x1="325" y1="342" x2="390" y2="342" stroke="#FF0033" strokeWidth="2" />
        </g>
      </svg>

      {/* Optional visible text beside the logo when desired */}
      <div className="flex flex-col">
        <span className="font-extrabold text-lg sm:text-xl tracking-wider leading-none text-white font-sans flex items-center gap-1">
          ZOOM <span className="text-[#FF0033] italic font-black">DRIVE</span>
        </span>
        <span className="text-[9px] font-bold tracking-[0.25em] text-gray-400 uppercase leading-tight">
          Car Rental
        </span>
      </div>
    </div>
  );
};


