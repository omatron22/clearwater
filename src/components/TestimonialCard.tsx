'use client';

import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  rating: number;
  delay?: number;
  className?: string;
}

/**
 * Testimonial Card Component
 * Displays client testimonials with consistent styling and animations
 */
const TestimonialCard = ({
  name,
  location,
  quote,
  rating,
  delay = 0,
  className = '',
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`bg-white rounded-lg shadow-lg p-8 h-full flex flex-col ${className}`}
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
        ))}
      </div>
      
      <p className="text-gray-600 mb-6 italic flex-grow">
        &quot;{quote}&quot;
      </p>
      
      <div>
        <p className="font-bold text-blue-900">{name}</p>
        <p className="text-gray-500">{location}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;