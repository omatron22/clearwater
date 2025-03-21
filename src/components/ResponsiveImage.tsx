// src/components/ResponsiveImage.tsx
'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { imageConfig } from '@/utils/config';
import PlaceholderImage from './PlaceholderImage';

// Create a new interface that extends from ImageProps but excludes some properties
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

  // If we're using placeholders globally or this image has an error
  if (usePlaceholder || hasError) {
    return (
      <PlaceholderImage
        alt={alt}
        className={className}
        width={typeof width === 'number' ? width : 800}
        height={typeof height === 'number' ? height : 600}
        category={category}
        fill={fill}
      />
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ ...style }}>
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