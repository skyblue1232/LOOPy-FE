import ArrowDownIcon from "/src/assets/images/ArrowDown.svg?react";

interface Props {
  label: string;
  onClick: () => void;
  variant?: "map" | "search";
}

const FilterDropdownButton = ({ label, onClick, variant = "map" }: Props) => {
  const isMap = variant === "map";

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center h-8 px-3 text-[0.875rem] rounded-full gap-[0.375rem] whitespace-nowrap
        ${isMap
          ? "bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.15)]"
          : "border border-[#CFCFCF] bg-white"
        }
      `}
    >
      <span>{label}</span>
      <ArrowDownIcon
        className="w-[0.75rem] h-[0.75rem]" // 12px
      />
    </button>
  );
};

export default FilterDropdownButton;
