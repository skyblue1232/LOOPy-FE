import React from 'react';
import clsx from 'clsx';
import CheckCircle from '../../../pages/User/Signin/_components/CheckCircle';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  showCheckText?: boolean;    
  agree?: boolean;             
  onToggleAgree?: () => void;  
}

const CommonAdminButton = ({
  label,
  disabled = false,
  className = '',
  showCheckText = false,
  agree = false,
  onToggleAgree,
  ...props
}: Props) => {
  return (
    <div className="absolute bottom-[2rem] left-[1.5rem] right-0 ml-[12.875rem] max-w-[34rem] w-full z-30 px-0">
      <div className="flex flex-col items-start px-0">
        {showCheckText && (
          <div
            className="flex items-center gap-[0.5rem] mb-[1.25rem] cursor-pointer"
            onClick={onToggleAgree}
          >
            <CheckCircle checked={agree} />
            <span className="text-[1rem] text-[#3A3D40] font-normal">
              안내 사항을 모두 확인하였으며, 이에 동의합니다.
            </span>
          </div>
        )}

        <button
          type="button"
          disabled={disabled}
          className={clsx(
            `
            w-full
            py-[0.875rem] text-[1rem] rounded-[8px]
            text-center transition-colors duration-200
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
      </div>
    </div>
  );
};

export default CommonAdminButton;
