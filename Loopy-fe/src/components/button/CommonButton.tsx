interface CommonButtonProps {
  text: string;
  onClick?: () => void;
  className?: string; 
  type?: 'button' | 'submit' | 'reset';
}

const CommonButton = ({ text, onClick, className = '', type = 'button' }: CommonButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-[1rem] text-center font-suit font-semibold rounded-[8px] bg-[#FA9820] text-white ${className}`}
    >
      {text}
    </button>
  );
};

export default CommonButton;
