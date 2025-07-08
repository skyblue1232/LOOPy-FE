import FilterIconButton from "./FilterIconButton";
import FilterDropdownButton from "./FilterDropdownButton";

interface FilterBarProps {
  onOpenFilterPopup: (group?: string) => void;
  variant?: "map" | "search";
}

const FilterBar = ({ onOpenFilterPopup, variant = "map" }: FilterBarProps) => {
  return (
    <div className="absolute z-10 flex gap-[0.5rem] top-[calc(71px+3.5rem)] pointer-events-auto">
      <FilterIconButton onClick={() => onOpenFilterPopup()} variant={variant} />
      <FilterDropdownButton label="매장 이용" onClick={() => onOpenFilterPopup("매장 이용")} variant={variant}/>
      <FilterDropdownButton label="테이크아웃" onClick={() => onOpenFilterPopup("테이크아웃")} variant={variant}/>
      <FilterDropdownButton label="메뉴" onClick={() => onOpenFilterPopup("메뉴")} variant={variant}/>
    </div>
  );
};

export default FilterBar;
