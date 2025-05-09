import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  variant = 'primary',
}) => {
  const baseClasses = 'py-1.5 px-2 sm:py-2 sm:px-3 md:py-3 md:px-4 lg:py-[14px] lg:px-5 xlg:py-4 xlg:px-6  rounded-[10px] font-medium transition-all duration-200';
  
  const variantClasses = {
    primary: 'bg-[#395DF7] hover:bg-[#1D39B2] active:bg-[#0F247E] text-white disabled:bg-[#F0F0F0] disabled:text-[#ABA8B2] focus:bg-[#395DF7] focus:outline-none focus:ring-[3px] focus:ring-[#9CAEFB]',
    secondary: 'bg-white text-[#395DF7] border-[2px] border-[#395DF7] hover:bg-[#E7EEFE] active:bg-[#9CAEFB] disabled:bg-white disabled:text-[#ABA8B2] disabled:border-[#ABA8B2] focus:bg-white focus:outline-none focus:ring-[3px] focus:ring-[#9CAEFB]',
    outline: 'bg-white text-[#395DF7] hover:bg-[#E7EEFE] active:bg-[#9CAEFB]  disabled:text-[#ABA8B2]  focus:outline-none focus:ring-[3px] focus:ring-[#9CAEFB]',
  };

  const disabledClasses = disabled ? 'cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button; 