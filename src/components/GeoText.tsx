'use client';

import { useEffect, useState } from 'react';

interface GeoTextProps {
  gtaText: string;
  defaultText: string;
  className?: string;
}

export default function GeoText({ gtaText, defaultText, className = '' }: GeoTextProps) {
  const [isGTA, setIsGTA] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Get geo cookie
    const cookies = document.cookie.split(';');
    const geoCookie = cookies.find(cookie => cookie.trim().startsWith('clyvanta-geo='));
    
    if (geoCookie) {
      const geoValue = geoCookie.split('=')[1];
      setIsGTA(geoValue === 'gta');
    }
    
    setIsLoaded(true);
  }, []);

  // Show default text while loading to prevent layout shift
  if (!isLoaded) {
    return <span className={className}>{defaultText}</span>;
  }

  return (
    <span className={className}>
      {isGTA ? gtaText : defaultText}
    </span>
  );
}