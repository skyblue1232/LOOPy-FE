import CheckCircle from "./CheckCircle";

interface AgreementItemProps {
  label: string;
  checked: boolean;
  onClick: () => void;
}

const AgreementItem = ({ label, checked, onClick }: AgreementItemProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full py-4 border-b border-gray-100"
    >
      <div className="flex items-center gap-2">
        <CheckCircle checked={checked} />
        <span className="text-sm">{label}</span>
      </div>
      <span className="text-xl text-gray-400">{">"}</span>
    </button>
  );
};

export default AgreementItem;
