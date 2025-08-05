import React from 'react';
import clsx from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled?: boolean;
  className?: string;
}

const CommonAdminButton = ({ label, disabled = false, className = '', ...props }: Props) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx(
        `
        absolute bottom-0 left-[1.5rem] right-0
        mx-auto
        max-w-[34rem] ml-[12.875rem] w-full
        py-[0.875rem] text-[1rem] rounded-[8px]
        text-center transition-colors duration-200
        z-30
        `,
        disabled
          ? 'bg-[#DFDFDF] text-[#7F7F7F]'
          : 'bg-[#6970F3] text-white hover:opacity-90',
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default CommonAdminButton;
