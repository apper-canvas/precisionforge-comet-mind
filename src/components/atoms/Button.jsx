import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  iconPosition = 'left',
  loading = false,
  disabled = false,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-accent/90 focus:ring-accent shadow-lg hover:shadow-xl",
    secondary: "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary shadow-md hover:shadow-lg",
    outline: "border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-white focus:ring-accent",
    ghost: "text-primary hover:bg-primary/5 focus:ring-primary",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-md hover:shadow-lg"
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl"
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled || loading ? 'opacity-50 cursor-not-allowed' : '';
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${disabledClass} ${className}`;
  
  const iconElement = icon && (
    <ApperIcon 
      name={icon} 
      size={size === 'sm' ? 16 : size === 'lg' ? 20 : size === 'xl' ? 24 : 18}
      className={children ? (iconPosition === 'left' ? 'mr-2' : 'ml-2') : ''}
    />
  );
  
  const loadingElement = loading && (
    <ApperIcon 
      name="Loader2" 
      size={size === 'sm' ? 16 : size === 'lg' ? 20 : size === 'xl' ? 24 : 18}
      className={`animate-spin ${children ? 'mr-2' : ''}`}
    />
  );

  return (
    <motion.button
      className={buttonClasses}
      disabled={disabled || loading}
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      {...props}
    >
      {loading && loadingElement}
      {!loading && iconPosition === 'left' && iconElement}
      {children}
      {!loading && iconPosition === 'right' && iconElement}
    </motion.button>
  );
};

export default Button;