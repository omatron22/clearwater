// src/components/Card.tsx
'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: string;
  border?: boolean;
  shadow?: boolean | 'sm' | 'md' | 'lg' | 'xl';
  rounded?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  animate?: boolean;
  delay?: number;
  hoverEffect?: boolean;
}

/**
 * Reusable card component with consistent styling and animation options
 */
const Card = ({
  children,
  className = '',
  padding = 'p-6',
  border = false,
  shadow = 'md',
  rounded = 'md',
  animate = false,
  delay = 0,
  hoverEffect = false,
}: CardProps) => {
  // Get shadow class based on size
  const getShadowClass = () => {
    if (!shadow) return '';
    if (shadow === true) return 'shadow';
    return `shadow-${shadow}`;
  };

  // Get rounded class based on size
  const getRoundedClass = () => {
    if (!rounded) return '';
    if (rounded === true) return 'rounded';
    return `rounded-${rounded}`;
  };

  // Combine all classes
  const cardClasses = [
    'bg-white',
    padding,
    border ? 'border border-gray-200' : '',
    getShadowClass(),
    getRoundedClass(),
    hoverEffect ? 'transition-all duration-300 hover:shadow-lg' : '',
    className,
  ].filter(Boolean).join(' ');

  // If animation is enabled, wrap with motion.div
  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className={cardClasses}
      >
        {children}
      </motion.div>
    );
  }

  // Otherwise return regular div
  return <div className={cardClasses}>{children}</div>;
};

export default Card;