// src/components/BeforeAfterComparison.tsx
'use client';

import ResponsiveImage from './ResponsiveImage';

interface BeforeAfterComparisonProps {
  beforeImage: {
    src: string;
    alt: string;
    title: string;
    description: string;
  };
  afterImage: {
    src: string;
    alt: string;
    title: string;
    description: string;
  };
  className?: string;
}

/**
 * Before and After Comparison Component
 * Displays before and after pool images with consistent styling
 */
const BeforeAfterComparison = ({
  beforeImage,
  afterImage,
  className = '',
}: BeforeAfterComparisonProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
      {/* Before Image */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
        <div className="relative h-72 md:h-96">
          <ResponsiveImage
            src={beforeImage.src}
            alt={beforeImage.alt}
            category="before"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute top-4 left-4 bg-red-600 text-white py-1 px-4 rounded-md">
            Before
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-blue-900">{beforeImage.title}</h3>
          <p className="text-gray-600">
            {beforeImage.description}
          </p>
        </div>
      </div>

      {/* After Image */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
        <div className="relative h-72 md:h-96">
          <ResponsiveImage
            src={afterImage.src}
            alt={afterImage.alt}
            category="after"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute top-4 left-4 bg-green-600 text-white py-1 px-4 rounded-md">
            After
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-blue-900">{afterImage.title}</h3>
          <p className="text-gray-600">
            {afterImage.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterComparison;