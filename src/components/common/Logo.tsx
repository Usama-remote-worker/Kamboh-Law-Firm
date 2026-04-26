import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 56 }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#F9E272', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#B8860B', stopOpacity: 1 }} />
          </linearGradient>
          
          <linearGradient id="metallicGold" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#B8860B', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#8B6508', stopOpacity: 1 }} />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Circular Dark Green Background */}
        <circle cx="50" cy="50" r="48" fill="#003924" stroke="url(#goldGradient)" strokeWidth="1" />
        
        {/* Decorative Ring */}
        <circle cx="50" cy="50" r="42" fill="none" stroke="url(#goldGradient)" strokeWidth="0.5" strokeDasharray="1 3" opacity="0.5" />

        {/* KA Initials in Center */}
        <text
          x="50"
          y="56"
          textAnchor="middle"
          fill="url(#metallicGold)"
          style={{
            fontSize: '32px',
            fontWeight: '900',
            fontFamily: 'Inter, sans-serif',
            filter: 'url(#glow)'
          }}
        >
          KA
        </text>

        {/* Circular Text: KAMBOH ASSOCIATES */}
        <path
          id="textCircle"
          d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
          fill="none"
        />
        <text fill="url(#goldGradient)" style={{ fontSize: '7.5px', fontWeight: 'bold', letterSpacing: '0.15em', fontFamily: 'Inter, sans-serif' }}>
          <textPath href="#textCircle" startOffset="50%" textAnchor="middle">
            KAMBOH ASSOCIATES • TAX CONSULTANT • 
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default Logo;
