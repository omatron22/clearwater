// src/components/SectionHeader.tsx
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionHeaderProps = {
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
  titleColor?: string;
  subtitleColor?: string;
  className?: string;
  animation?: boolean;
  delay?: number;
};

/**
 * Reusable section header component for consistent section headings across the site.
 * Includes optional motion animation and styling options.
 */
const SectionHeader = ({
  title,
  subtitle,
  centered = true,
  titleColor = 'text-blue-900',
  subtitleColor = 'text-gray-600',
  className = '',
  animation = true,
  delay = 0,
}: SectionHeaderProps) => {
  const TextWrapper = animation ? motion.div : 'div';
  const animationProps = animation
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay },
        viewport: { once: true },
      }
    : {};

  return (
    <TextWrapper 
      className={`${centered ? 'text-center' : ''} mb-12 md:mb-16 ${className}`}
      {...animationProps}
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        typeof subtitle === 'string' ? (
          <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${subtitleColor}`}>
            {subtitle}
          </p>
        ) : (
          subtitle
        )
      )}
    </TextWrapper>
  );
};

export default SectionHeader;