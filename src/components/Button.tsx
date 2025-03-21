// src/components/Button.tsx
import Link from 'next/link';
import { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'white';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

/**
 * Button component that can be either a button or a link
 * with consistent styling options
 */
const Button = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  // Variant styles
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-indigo-500 hover:bg-indigo-600 text-white',
    outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'bg-transparent hover:bg-blue-50 text-blue-600',
    white: 'bg-white/90 hover:bg-white text-blue-900 backdrop-blur-sm',
  };

  // Size styles
  const sizeStyles = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  const baseStyles = [
    'font-medium rounded-md transition-all duration-300 inline-flex items-center justify-center gap-2',
    fullWidth ? 'w-full' : '',
    variantStyles[variant],
    sizeStyles[size],
    isLoading ? 'opacity-70 cursor-wait' : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {isLoading && (
        <span className="animate-spin h-4 w-4 mr-2 border-t-2 border-b-2 border-current rounded-full" />
      )}
      {leftIcon && !isLoading && <span>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseStyles} disabled={isLoading} {...props}>
      {content}
    </button>
  );
};

export default Button;