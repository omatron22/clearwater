// src/components/BeforeAfterComparison.tsx
'use client';

import { motion } from 'framer-motion';
import ResponsiveImage from './ResponsiveImage';
import Card from './Card';

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
 * Displays before and after pool images with consistent styling and animations
 */
const BeforeAfterComparison = ({
  beforeImage,
  afterImage,
  className = '',
}: BeforeAfterComparisonProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
      {/* Before Image */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className="h-full overflow-hidden" shadow="lg" padding="p-0">
          <div className="relative">
            <div className="relative h-72 md:h-80">
              <ResponsiveImage
                src={beforeImage.src}
                alt={beforeImage.alt}
                category="before"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white py-1 px-4 rounded-md font-semibold shadow-md">
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
        </Card>
      </motion.div>

      {/* After Image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className="h-full overflow-hidden" shadow="lg" padding="p-0">
          <div className="relative">
            <div className="relative h-72 md:h-80">
              <ResponsiveImage
                src={afterImage.src}
                alt={afterImage.alt}
                category="after"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute top-4 left-4 bg-emerald-600 text-white py-1 px-4 rounded-md font-semibold shadow-md">
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
        </Card>
      </motion.div>
    </div>
  );
};

export default BeforeAfterComparison;