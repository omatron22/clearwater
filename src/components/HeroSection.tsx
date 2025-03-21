'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import PlaceholderImage from './PlaceholderImage';
import WaveDivider from './WaveDivider';
import Container from './Container';
import { themeColors } from '@/utils/config';

type HeroSectionProps = {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCategory?: string;
  wave?: boolean;
  wavePattern?: 'default' | 'smooth' | 'pointed' | 'curved';
  waveColor?: string;
  overlayColor?: string;
  overlayOpacity?: string;
  children?: ReactNode;
  height?: string;
  textAlign?: 'left' | 'center' | 'right';
  usePlaceholder?: boolean;
  paddingTop?: string;
  paddingBottom?: string;
  titleSize?: string;
  subtitleSize?: string;
};

/**
 * Reusable hero section component for page headers with consistent styling
 */
const HeroSection = ({
  title,
  subtitle,
  imageSrc = '',
  imageAlt = 'Hero image',
  imageCategory = 'hero',
  wave = true,
  wavePattern = 'default',
  waveColor = 'text-white',
  overlayColor = `bg-${themeColors.primary.darker}`,
  overlayOpacity = '60',
  children,
  height = 'min-h-[70vh]',
  textAlign = 'center',
  usePlaceholder = true,
  paddingTop = 'pt-32 md:pt-40',
  paddingBottom = 'pb-16 md:pb-24',
  titleSize = 'text-4xl md:text-5xl lg:text-6xl',
  subtitleSize = 'text-xl md:text-2xl',
}: HeroSectionProps) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <section className={`relative ${height} flex items-center ${paddingTop} ${paddingBottom}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {usePlaceholder ? (
          <PlaceholderImage
            alt={imageAlt}
            category={imageCategory}
            fill={true}
          />
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        ) : null}
        <div className={`absolute inset-0 ${overlayColor}/${overlayOpacity}`}></div>
      </div>
      
      {/* Content */}
      <Container className="z-10 relative text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`max-w-3xl ${textAlign === 'center' ? 'mx-auto' : ''} ${alignmentClasses[textAlign]}`}
        >
          <h1 className={`${titleSize} font-bold mb-6 leading-tight`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`${subtitleSize} max-w-2xl ${textAlign === 'center' ? 'mx-auto' : ''} opacity-90`}>
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </Container>

      {/* Wave Divider */}
      {wave && (
        <WaveDivider
          position="bottom"
          color={waveColor}
          height={70}
          wavePattern={wavePattern}
        />
      )}
    </section>
  );
};

export default HeroSection;