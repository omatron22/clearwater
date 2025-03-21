// src/components/SectionHeader.tsx
'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { themeColors } from '@/utils/config';

type SectionHeaderProps = {
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
  titleColor?: string;
  subtitleColor?: string;
  className?: string;
  animation?: boolean;
  delay?: number;
  eyebrow?: string;
  withLine?: boolean;
  withAccent?: boolean;
};

/**
 * Reusable section header component for consistent section headings across the site.
 * Includes optional motion animation and styling options.
 */
const SectionHeader = ({
  title,
  subtitle,
  centered = true,
  titleColor = `text-${themeColors.text.heading}`,
  subtitleColor = `text-${themeColors.text.body}`,
  className = '',
  animation = true,
  delay = 0,
  eyebrow,
  withLine = false,
  withAccent = false,
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
      {eyebrow && (
        <div className={`uppercase tracking-wide font-semibold mb-2 text-sm text-${themeColors.primary.DEFAULT}`}>
          {eyebrow}
        </div>
      )}
      
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor} relative inline-block`}>
        {withAccent && (
          <span className={`absolute -top-4 -left-4 text-${themeColors.primary.DEFAULT} text-6xl opacity-10`}>
            &ldquo;
          </span>
        )}
        {title}
        {withLine && (
          <span className={`block h-1 w-12 bg-${themeColors.primary.DEFAULT} mt-4 ${centered ? 'mx-auto' : ''}`}></span>
        )}
      </h2>
      
      {subtitle && (
        typeof subtitle === 'string' ? (
          <p className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${subtitleColor} text-balance`}>
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