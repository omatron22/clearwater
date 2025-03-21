// src/components/ResponsiveImage.tsx
'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import PlaceholderImage from './PlaceholderImage';

// Get environment flag for placeholders
// In a real app, you might use an env var like process.env.NEXT_PUBLIC_USE_PLACEHOLDERS
const USE_PLACEHOLDERS = true;

interface ResponsiveImageProps extends Omit<ImageProps, 'onError'> {
  category?: string;
  // Removed fallbackSrc as it's not currently used
  // Can be added back when implementing fallback functionality
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
  // Removed fallbackSrc from props destructuring
  ...props
}: ResponsiveImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // If we're using placeholders globally or this image has an error
  if (USE_PLACEHOLDERS || hasError) {
    return (
      <PlaceholderImage
        alt={alt as string}
        category={category}
        fill={fill}
        width={typeof width === 'number' ? width : undefined}
        height={typeof height === 'number' ? height : undefined}
        className={className}
      />
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