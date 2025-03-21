'use client';

import Link from 'next/link';
import Container from './Container';

interface CallToActionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  bgColor?: string;
  textColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
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
  buttonColor = 'bg-white',
  buttonTextColor = 'text-blue-900',
}: CallToActionProps) => {
  return (
    <section className={`py-16 ${bgColor} ${textColor}`}>
      <Container>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          {subtitle && (
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <Link
            href={buttonLink}
            className={`${buttonColor} ${buttonTextColor} hover:bg-opacity-90 font-bold py-3 px-8 rounded-md text-lg transition duration-300 inline-block`}
          >
            {buttonText}
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;