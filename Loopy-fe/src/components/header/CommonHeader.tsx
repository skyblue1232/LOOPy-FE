import BackIcon from "../../assets/images/Back.svg?react";
import CloseIcon from "../../assets/images/Close.svg?react";

interface CommonHeaderProps {
  title: string;
  onBack?: () => void;
  onClose?: () => void;
}

const CommonHeader = ({ title, onBack, onClose }: CommonHeaderProps) => {
  return (
    <div className="w-full h-[3rem] flex items-center justify-between">
      {onBack ? (
        <button onClick={onBack}>
          <BackIcon />
        </button>
      ) : (
        <div className="w-[24px]" />
      )}
      <h1 className="text-[18px] font-bold text-[#323232]">{title}</h1>
      {onClose ? (
        <button onClick={onClose}>
          <CloseIcon />
        </button>
      ) : (
        <div className="w-[24px]" />
      )}
    </div>
  );
};

export default CommonHeader;
