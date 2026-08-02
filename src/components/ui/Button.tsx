import { type ReactNode, type ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  href?: string;
  isLoading?: boolean;
}

const variantClasses: Record<string, string> = {
  primary:
    'bg-accent-400 hover:bg-accent-500 text-white shadow-button hover:shadow-lg',
  secondary:
    'bg-secondary-600 hover:bg-secondary-700 text-white',
  ghost:
    'bg-transparent hover:bg-warm-100 text-secondary-700',
  outline:
    'bg-transparent border-2 border-secondary-600 text-secondary-600 hover:bg-secondary-600 hover:text-white',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  isLoading = false,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center gap-2 
    font-semibold rounded-[var(--radius-button)] 
    transition-all duration-300 ease-out 
    focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    cursor-pointer
    ${variantClasses[variant]} 
    ${sizeClasses[size]} 
    ${className}
  `;

  const content = isLoading ? (
    <>
      <svg
        className="animate-spin h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
      Sending...
    </>
  ) : (
    children
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      disabled={isLoading}
      {...(props as object)}
    >
      {content}
    </motion.button>
  );
}
