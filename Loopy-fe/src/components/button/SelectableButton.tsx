interface SelectableButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const SelectableButton = ({ label, selected, onClick }: SelectableButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 rounded-[6.25rem] text-[0.875rem] font-normal
        ${selected ? "bg-[#434343] text-white" : "bg-[#F1F4F8] text-[#252729]"}`}
    >
      {label}
    </button>
  );
};

export default SelectableButton;
