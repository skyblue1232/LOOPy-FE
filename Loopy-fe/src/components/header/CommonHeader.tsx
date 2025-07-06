import BackIcon from "../../assets/images/Back.svg?react";

interface CommonHeaderProps {
  title: string;
  onBack?: () => void;
}

const CommonHeader = ({ title, onBack }: CommonHeaderProps) => {
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
      <div className="w-[24px]" />
    </div>
  );
};

export default CommonHeader;
