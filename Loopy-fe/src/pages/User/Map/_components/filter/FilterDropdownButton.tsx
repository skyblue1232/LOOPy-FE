interface Props {
  label: string;
  onClick: () => void;
}

const FilterDropdownButton = ({ label, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center h-8 px-3 text-[0.875rem] rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.15)] gap-[0.375rem] whitespace-nowrap"
    >
      <span>{label}</span>
      <img
        src="/src/assets/images/ArrowDown.svg"
        alt="열기"
        className="w-[0.75rem] h-[0.75rem]" // 12px
      />
    </button>
  );
};

export default FilterDropdownButton;
