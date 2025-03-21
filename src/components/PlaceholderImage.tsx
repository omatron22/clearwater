// src/components/PlaceholderImage.tsx
'use client';

// Remove unused import
// import Image from 'next/image';

type PlaceholderImageProps = {
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  category?: string;
  fill?: boolean;
};

/**
 * PlaceholderImage component that provides a consistent placeholder solution
 * until actual images are added. It uses a combination of descriptive text and
 * color gradients based on the image category.
 */
const PlaceholderImage = ({ 
  alt, 
  className = '', 
  width = 800, 
  height = 600, 
  // Remove unused aspectRatio from destructuring but keep in props type for future use
  // aspectRatio,
  category = 'default',
  fill = false
}: PlaceholderImageProps) => {
  // Define gradients based on category
  const gradients = {
    default: 'from-blue-400 to-blue-600',
    hero: 'from-blue-500 to-indigo-700',
    pool: 'from-blue-400 to-cyan-600',
    before: 'from-yellow-500 to-red-600',
    after: 'from-green-400 to-blue-500',
    maintenance: 'from-blue-300 to-blue-500',
    seasonal: 'from-orange-300 to-blue-400',
    'before-after': 'from-red-400 to-green-500',
    people: 'from-indigo-400 to-purple-600',
    testimonial: 'from-blue-300 to-indigo-500',
    map: 'from-blue-200 to-blue-600',
  };

  const gradientClass = gradients[category as keyof typeof gradients] || gradients.default;
  
  // Removed unused style variable 
  
  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={fill ? { width: '100%', height: '100%', position: 'relative' } : {}}
    >
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${gradientClass} flex items-center justify-center text-white text-opacity-70 animate-pulse`}
      >
        <div className="text-center p-4">
          <div className="text-sm font-bold uppercase">{category}</div>
          <div className="text-xs opacity-80">{alt}</div>
        </div>
      </div>
      
      {fill ? (
        <div style={{ position: 'relative', width: '100%', height: '100%' }} />
      ) : (
        <div 
          style={{ 
            width: '100%', 
            // We could use aspectRatio here if provided, but for now calculating aspect ratio from width/height
            paddingBottom: `${(height / width) * 100}%`,
            background: 'transparent' 
          }} 
        />
      )}
    </div>
  );
};

export default PlaceholderImage;