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
        <div className="w-[1.5rem]" />
      )}
      <h1 className="text-[1.125rem] font-bold text-[#000000]">{title}</h1>
      <div className="w-[1.5rem]" />
    </div>
  );
};

export default CommonHeader;
