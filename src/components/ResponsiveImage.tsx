// src/components/ResponsiveImage.tsx
'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { imageConfig } from '@/utils/config';

// Create a new interface that doesn't include placeholder or onError from ImageProps
interface ResponsiveImageProps extends Omit<ImageProps, 'onError' | 'placeholder'> {
  category?: string;
  usePlaceholder?: boolean;
}

/**
 * ResponsiveImage component that handles placeholders, error fallbacks, and loading states.
 * This component wraps the Next.js Image component to provide a consistent image experience
 * across the site.
 */
const ResponsiveImage = ({
  src,
  alt,
  fill,
  width,
  height,
  className = '',
  style = {},
  category = 'default',
  usePlaceholder = imageConfig.usePlaceholders,
  ...props
}: ResponsiveImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Generate gradient based on image category
  const getGradient = () => {
    const gradients: Record<string, string> = {
      default: 'from-blue-400 to-blue-600',
      hero: 'from-blue-500 to-indigo-700',
      pool: 'from-blue-400 to-cyan-600',
      before: 'from-yellow-500 to-red-600',
      after: 'from-green-400 to-blue-500',
      maintenance: 'from-blue-300 to-blue-500',
      seasonal: 'from-orange-300 to-blue-400',
      'before-after': 'from-red-400 to-green-500',
      team: 'from-indigo-400 to-purple-600',
      testimonial: 'from-blue-300 to-indigo-500',
      map: 'from-blue-200 to-blue-600',
    };
    
    return gradients[category] || gradients.default;
  };

  // If we're using placeholders globally or this image has an error
  if (usePlaceholder || hasError) {
    return (
      <div 
        className={`relative overflow-hidden ${className}`}
        style={fill ? { width: '100%', height: '100%', position: 'relative', ...style } : { ...style }}
      >
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${getGradient()} flex items-center justify-center text-white text-opacity-70`}
        >
          <div className="text-center p-4">
            <div className="text-sm font-bold uppercase">{category}</div>
            <div className="text-xs opacity-80">{alt}</div>
          </div>
        </div>
        
        {fill ? (
          <div style={{ width: '100%', height: '100%', position: 'relative' }} />
        ) : (
          <div 
            style={{ 
              width: '100%', 
              paddingBottom: `${(typeof height === 'number' && typeof width === 'number') ? 
                (height / width) * 100 : 75}%`,
            }} 
          />
        )}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ ...style }}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        {...props}
      />
    </div>
  );
};

export default ResponsiveImage;