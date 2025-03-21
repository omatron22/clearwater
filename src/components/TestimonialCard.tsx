'use client';

import { motion } from 'framer-motion';
import Card from './Card';

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  rating: number;
  avatarUrl?: string;
  delay?: number;
  className?: string;
}

/**
 * TestimonialCard component
 * Displays client testimonials with consistent styling and animations
 */
const TestimonialCard = ({
  name,
  location,
  quote,
  rating,
  avatarUrl,
  delay = 0,
  className = '',
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className={`h-full flex flex-col ${className}`} shadow="lg" padding="p-8">
        {/* Rating Stars */}
        <div className="flex items-center mb-6">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
              viewBox="0 0 24 24"
              data-testid={`star-${i}`}
            >
              <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
            </svg>
          ))}
        </div>
        
        {/* Quote */}
        <div className="relative mb-8 flex-grow">
          <svg 
            className="absolute top-0 left-0 w-8 h-8 text-blue-100 transform -translate-x-4 -translate-y-4 opacity-50"
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-gray-600 italic">
            &quot;{quote}&quot;
          </p>
        </div>
        
        {/* Author */}
        <div className="flex items-center border-t border-gray-100 pt-4 mt-auto">
          {avatarUrl ? (
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600 font-medium">
                {name.charAt(0)}
              </span>
            </div>
          )}
          <div>
            <p className="font-bold text-blue-900">{name}</p>
            <p className="text-gray-500 text-sm">{location}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;