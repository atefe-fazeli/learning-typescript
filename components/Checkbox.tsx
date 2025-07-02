/** @jsxImportSource react */
'use client';

import React from 'react';

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
  name?: string;
  className?: string;
  label?: string;
}

export function DScheckbox({
  checked,
  onChange,
  disabled = false,
  id,
  name,
  className = '',
  label,
}: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        id={id}
        name={name}
        className={`
          
          w-4 h-4
          tablet:w-[18px] tablet:h-[18px]
          desktop:w-5 desktop:h-5
          
          rounded
          border-2
          cursor-pointer
          
          border-gray-400
          
          hover:border-indigo-500
          
          checked:bg-indigo-600
          checked:border-indigo-600
          checked:hover:bg-indigo-600
          checked:hover:border-indigo-600
          
          disabled:bg-gray-100
          disabled:border-gray-300
          disabled:cursor-not-allowed
          
          focus:ring-2
          focus:ring-indigo-500
          focus:ring-offset-2
          
          transition-colors
          duration-200
          ${className}
        `}
      />
      {label && (
        <label
          htmlFor={id}
          className={`
          text-base
          tablet:text-lg 
          desktop:text-xl 
            text-zink-700
            cursor-pointer
            select-none
            ${disabled ? 'text-gray-300 cursor-not-allowed' : ''}
          `}
        >
          {label}
        </label>
      )}
    </div>
  );
} 