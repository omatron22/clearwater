'use client';

import React from 'react';

type WaveDividerProps = {
  position?: 'top' | 'bottom';
  color?: string;
  height?: number;
  width?: string;
  className?: string;
  preserveAspectRatio?: string;
  viewBox?: string;
  path?: string;
  wavePattern?: 'default' | 'smooth' | 'pointed' | 'curved';
};

/**
 * Reusable wave divider component for section transitions with different wave patterns.
 */
const WaveDivider = ({ 
  position = 'bottom', 
  color = 'text-white', 
  height = 70, 
  width = '100%',
  className = '',
  preserveAspectRatio = 'none',
  viewBox = '0 0 1200 120',
  wavePattern = 'default'
}: WaveDividerProps) => {
  const isTop = position === 'top';
  
  // Different wave patterns
  const wavePaths = {
    default: "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
    smooth: "M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z",
    pointed: "M1200 0L0 0 598.97 114.72 1200 0z",
    curved: "M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
  };

  const wavePath = wavePaths[wavePattern];
  
  return (
    <div 
      className={`absolute ${position}-0 left-0 w-full overflow-hidden ${className}`} 
      aria-hidden="true"
    >
      <svg
        className={`fill-current ${color} w-full`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        preserveAspectRatio={preserveAspectRatio}
        style={{ 
          height: `${height}px`,
          width,
          display: 'block',
          transform: isTop ? 'rotate(180deg)' : 'none'
        }}
      >
        <path d={wavePath}></path>
      </svg>
    </div>
  );
};

export default WaveDivider;