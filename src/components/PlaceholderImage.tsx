// src/components/PlaceholderImage.tsx
'use client';

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
  category = 'default',
  fill = false
}: PlaceholderImageProps) => {
  // Define gradients based on category - improved color schemes
  const gradients: Record<string, string> = {
    default: 'from-blue-400 to-blue-600',
    hero: 'from-blue-600 to-indigo-800',
    pool: 'from-cyan-400 to-blue-600',
    before: 'from-orange-400 to-red-600',
    after: 'from-emerald-400 to-teal-600',
    maintenance: 'from-blue-400 to-indigo-600',
    seasonal: 'from-amber-300 to-blue-500',
    'before-after': 'from-orange-400 to-emerald-500',
    people: 'from-violet-400 to-purple-600',
    team: 'from-indigo-500 to-violet-700',
    testimonial: 'from-blue-400 to-indigo-600',
    map: 'from-blue-300 to-blue-700',
  };

  const gradientClass = gradients[category] || gradients.default;
  
  return (
    <div 
      className={`relative overflow-hidden rounded-md ${className}`}
      style={fill ? { width: '100%', height: '100%', position: 'relative' } : {}}
    >
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${gradientClass} flex items-center justify-center text-white`}
      >
        <div className="text-center p-4">
          <div className="text-sm font-bold uppercase tracking-wide">{category}</div>
          <div className="text-xs opacity-80 mt-1">{alt}</div>
        </div>
      </div>
      
      {fill ? (
        <div style={{ position: 'relative', width: '100%', height: '100%' }} />
      ) : (
        <div 
          style={{ 
            width: '100%', 
            paddingBottom: `${(height / width) * 100}%`,
            background: 'transparent' 
          }} 
        />
      )}
    </div>
  );
};

export default PlaceholderImage;