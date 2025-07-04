import CheckCircle from "./CheckCircle";
import NextIcon from "../../../../assets/images/Next.svg?react";

interface AgreementItemProps {
  label: string;
  checked: boolean;
  onClick: () => void;
}

const AgreementItem = ({ label, checked, onClick }: AgreementItemProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full py-3"
    >
      <div className="flex items-center gap-[0.75rem]">
        <CheckCircle checked={checked} />
        <span className="text-sm">{label}</span>
      </div>
      <NextIcon /> 
    </button>
  );
};

export default AgreementItem;
