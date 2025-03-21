'use client';

import { motion } from 'framer-motion';
import Container from './Container';
import Button from './Button';

interface CallToActionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  bgColor?: string;
  textColor?: string;
  buttonVariant?: 'primary' | 'secondary' | 'white' | 'outline' | 'ghost';
  align?: 'left' | 'center' | 'right';
  withWave?: boolean;
  withOverlay?: boolean;
  bgImage?: string;
}

/**
 * Reusable Call to Action Component
 * Displays a consistent CTA section with title, subtitle, and button
 */
const CallToAction = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  bgColor = 'bg-blue-900',
  textColor = 'text-white',
  buttonVariant = 'white',
  align = 'center',
  withWave = false,
  withOverlay = false,
  bgImage,
}: CallToActionProps) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <section className={`py-16 md:py-24 relative ${bgColor} ${textColor}`}>
      {/* Background image if provided */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img 
            src={bgImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          {withOverlay && <div className={`absolute inset-0 ${bgColor} opacity-80`}></div>}
        </div>
      )}
      
      {/* Top wave if enabled */}
      {withWave && (
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            className="text-white fill-current"
            style={{ height: '70px', width: '100%', transform: 'rotate(180deg)' }}
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      )}
      
      <Container className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`${alignClass[align]} ${align === 'center' ? 'max-w-3xl mx-auto' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{title}</h2>
          {subtitle && (
            <p className="text-xl mb-8 opacity-90">
              {subtitle}
            </p>
          )}
          <Button
            href={buttonLink}
            variant={buttonVariant}
            size="lg"
          >
            {buttonText}
          </Button>
        </motion.div>
      </Container>
      
      {/* Bottom wave if enabled */}
      {withWave && (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            className="text-white fill-current"
            style={{ height: '70px', width: '100%' }}
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      )}
    </section>
  );
};

export default CallToAction;