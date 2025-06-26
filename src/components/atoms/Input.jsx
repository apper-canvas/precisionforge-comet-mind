import { forwardRef, useState } from 'react';
import ApperIcon from '@/components/ApperIcon';

const Input = forwardRef(({
  label,
  type = 'text',
  placeholder,
  error,
  icon,
  iconPosition = 'left',
  required = false,
  disabled = false,
  className = '',
  ...props
}, ref) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = (e) => {
    setFocused(false);
    setHasValue(e.target.value !== '');
  };

  const baseClasses = "w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent";
  const errorClasses = error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-gray-300";
  const disabledClasses = disabled ? "bg-gray-50 cursor-not-allowed opacity-60" : "";
  const iconPadding = icon ? (iconPosition === 'left' ? 'pl-12' : 'pr-12') : '';

  const inputClasses = `${baseClasses} ${errorClasses} ${disabledClasses} ${iconPadding} ${className}`;

  const iconElement = icon && (
    <div className={`absolute top-1/2 transform -translate-y-1/2 ${iconPosition === 'left' ? 'left-4' : 'right-4'} text-gray-400`}>
      <ApperIcon name={icon} size={18} />
    </div>
  );

  return (
    <div className="relative">
      {label && (
        <label className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          focused || hasValue 
            ? 'top-2 text-xs text-accent' 
            : 'top-1/2 -translate-y-1/2 text-gray-500'
        }`}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <input
          ref={ref}
          type={type}
          placeholder={focused || !label ? placeholder : ''}
          className={inputClasses}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={(e) => setHasValue(e.target.value !== '')}
          {...props}
        />
        {iconElement}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-600 flex items-center">
          <ApperIcon name="AlertCircle" size={16} className="mr-1" />
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;