import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  hover = false, 
  padding = 'default',
  shadow = 'default',
  className = '',
  ...props 
}) => {
  const baseClasses = "bg-white rounded-lg border border-gray-200";
  
  const paddings = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8'
  };
  
  const shadows = {
    none: '',
    sm: 'shadow-sm',
    default: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };
  
  const hoverClasses = hover ? 'cursor-pointer transition-all duration-200' : '';
  
  const cardClasses = `${baseClasses} ${paddings[padding]} ${shadows[shadow]} ${hoverClasses} ${className}`;
  
  if (hover) {
    return (
      <motion.div
        className={cardClasses}
        whileHover={{ 
          scale: 1.02,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
  
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;