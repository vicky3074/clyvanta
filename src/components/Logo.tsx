interface LogoProps {
  variant?: 'horizontal' | 'vertical' | 'icon' | 'small';
  theme?: 'color' | 'monochrome' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export default function Logo({ 
  variant = 'horizontal', 
  theme = 'color',
  size = 'md',
  className = '' 
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12', 
    lg: 'h-16',
    xl: 'h-20'
  };

  const getColors = () => {
    switch (theme) {
      case 'monochrome':
        return {
          primary: '#2C3E50',
          secondary: '#666666',
          accent: '#666666'
        };
      case 'white':
        return {
          primary: 'white',
          secondary: '#CCCCCC',
          accent: '#CCCCCC'
        };
      default:
        return {
          primary: 'url(#techGradient)',
          secondary: 'url(#accentGradient)',
          accent: 'url(#accentGradient)'
        };
    }
  };

  const colors = getColors();

  if (variant === 'icon' || variant === 'small') {
    return (
      <svg 
        viewBox="0 0 80 80" 
        xmlns="http://www.w3.org/2000/svg" 
        className={`${sizeClasses[size]} ${className}`}
      >
        <defs>
          <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:"#00D4FF", stopOpacity:1}} />
            <stop offset="50%" style={{stopColor:"#0099CC", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#0066FF", stopOpacity:1}} />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:"#FF6B35", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#F7931E", stopOpacity:1}} />
          </linearGradient>
        </defs>
        <g transform="translate(15, 15)">
          <path 
            d="M 45 15 C 35 5, 15 5, 15 25 C 15 45, 35 45, 45 35" 
            fill="none" 
            stroke={colors.primary} 
            strokeWidth="6" 
            strokeLinecap="round"
          />
          <path 
            d="M 50 20 C 45 15, 40 15, 35 20" 
            fill="none" 
            stroke={colors.secondary} 
            strokeWidth="3" 
            strokeLinecap="round"
          />
          <path 
            d="M 50 30 C 45 35, 40 35, 35 30" 
            fill="none" 
            stroke={colors.accent} 
            strokeWidth="3" 
            strokeLinecap="round" 
            opacity="0.8"
          />
        </g>
      </svg>
    );
  }

  if (variant === 'vertical') {
    return (
      <svg 
        viewBox="0 0 200 140" 
        xmlns="http://www.w3.org/2000/svg" 
        className={`${sizeClasses[size]} ${className}`}
      >
        <defs>
          <linearGradient id="verticalTechGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{stopColor:"#00D4FF", stopOpacity:1}} />
            <stop offset="50%" style={{stopColor:"#0099CC", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#0066FF", stopOpacity:1}} />
          </linearGradient>
          <linearGradient id="verticalAccentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor:"#FF6B35", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"#F7931E", stopOpacity:1}} />
          </linearGradient>
        </defs>
        <g transform="translate(70, 15)">
          <path 
            d="M 45 15 C 35 5, 15 5, 15 25 C 15 45, 35 45, 45 35" 
            fill="none" 
            stroke={theme === 'color' ? 'url(#verticalTechGradient)' : colors.primary} 
            strokeWidth="6" 
            strokeLinecap="round"
          />
          <path 
            d="M 50 20 C 45 15, 40 15, 35 20" 
            fill="none" 
            stroke={theme === 'color' ? 'url(#verticalAccentGradient)' : colors.secondary} 
            strokeWidth="3" 
            strokeLinecap="round"
          />
          <path 
            d="M 50 30 C 45 35, 40 35, 35 30" 
            fill="none" 
            stroke={theme === 'color' ? 'url(#verticalAccentGradient)' : colors.accent} 
            strokeWidth="3" 
            strokeLinecap="round" 
            opacity="0.8"
          />
        </g>
        <text 
          x="100" 
          y="95" 
          textAnchor="middle" 
          fontFamily="Arial, Helvetica, sans-serif" 
          fontSize="28" 
          fontWeight="300" 
          fill={colors.primary} 
          letterSpacing="1px"
        >
          Clyvanta
        </text>
        <rect 
          x="55" 
          y="105" 
          width="90" 
          height="2" 
          fill={theme === 'color' ? 'url(#verticalTechGradient)' : colors.primary} 
          opacity="0.6"
        />
      </svg>
    );
  }

  // Default horizontal logo - using finalized design from logo system
  // Use a static ID to prevent hydration mismatch
  const uniqueId = 'clyvanta_horizontal';
  
  return (
    <svg 
      viewBox="0 0 280 48" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
    >
      <defs>
        <linearGradient id={`paint0_linear_horizontal_${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stopColor="#00D4FF"/>
          <stop offset="0.5" stopColor="#0099CC"/>
          <stop offset="1" stopColor="#0066FF"/>
        </linearGradient>
        <linearGradient id={`paint1_linear_horizontal_${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#FF6B35"/>
          <stop offset="1" stopColor="#F7931E"/>
        </linearGradient>
        <linearGradient id={`paint2_linear_horizontal_${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#FF6B35"/>
          <stop offset="1" stopColor="#F7931E"/>
        </linearGradient>
        <linearGradient id={`text_gradient_horizontal_${uniqueId}`} x1="65" y1="24" x2="280" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00D4FF"/>
          <stop offset="0.3" stopColor="#0099CC"/>
          <stop offset="0.7" stopColor="#0066FF"/>
          <stop offset="1" stopColor="#2C3E50"/>
        </linearGradient>
      </defs>
      <path d="M48 13.4C37.8 2.8 16.5 2.8 16.5 24.1C16.5 45.4 37.8 45.4 48 34.8" fill="none" stroke={`url(#paint0_linear_horizontal_${uniqueId})`} strokeWidth="6.4" strokeLinecap="round"/>
      <path d="M53.8 18.6C48 13.4 43.1 13.4 37.8 18.6" fill="none" stroke={`url(#paint1_linear_horizontal_${uniqueId})`} strokeWidth="3.2" strokeLinecap="round"/>
      <path d="M53.8 29.4C48 34.8 43.1 34.8 37.8 29.4" fill="none" stroke={`url(#paint2_linear_horizontal_${uniqueId})`} strokeWidth="3.2" strokeLinecap="round"/>
      <text x="65" y="24" fontFamily="Arial, Helvetica, sans-serif" fontSize="30" fontWeight="600" letterSpacing="0.6px" fill={`url(#text_gradient_horizontal_${uniqueId})`} dominantBaseline="central">Clyvanta</text>
    </svg>
  );
}