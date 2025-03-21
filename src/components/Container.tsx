// src/components/Container.tsx
import { ReactNode, ElementType } from 'react';

type ContainerProps<T extends ElementType = 'div'> = {
  children: ReactNode;
  className?: string;
  as?: T;
  fluid?: boolean;
  padded?: boolean;
  paddingX?: string;
  paddingY?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none';
};

/**
 * A responsive container component for consistent layout across the site.
 * Handles padding, maximum width, and other container styling.
 */
const Container = <T extends ElementType = 'div'>({ 
  children, 
  className = '', 
  as,
  fluid = false,
  padded = true,
  paddingX = 'px-4 md:px-6',
  paddingY = '',
  maxWidth = 'xl',
}: ContainerProps<T>) => {
  const Component = as || 'div';
  
  const maxWidthClasses = {
    'sm': 'max-w-screen-sm',
    'md': 'max-w-screen-md',
    'lg': 'max-w-screen-lg',
    'xl': 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    'full': 'max-w-full',
    'none': '',
  };

  const containerClasses = [
    !fluid && maxWidth !== 'none' ? maxWidthClasses[maxWidth] : '',
    fluid ? 'w-full' : '',
    padded ? paddingX : '',
    paddingY,
    'mx-auto',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={containerClasses}>
      {children}
    </Component>
  );
};

export default Container;