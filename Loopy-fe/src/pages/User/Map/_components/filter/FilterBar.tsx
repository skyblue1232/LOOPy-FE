import FilterIconButton from "./FilterIconButton";
import FilterDropdownButton from "./FilterDropdownButton";

interface FilterBarProps {
  onOpenFilterPopup: (group?: string) => void;
}

const FilterBar = ({ onOpenFilterPopup }: FilterBarProps) => {
  return (
    <div className="absolute z-10 flex gap-[0.5rem] left-6 right-6 top-[calc(71px+3.5rem)] pointer-events-auto">
      <FilterIconButton onClick={() => onOpenFilterPopup()} />
      <FilterDropdownButton label="매장 이용" onClick={() => onOpenFilterPopup("매장 이용")} />
      <FilterDropdownButton label="테이크아웃" onClick={() => onOpenFilterPopup("테이크아웃")} />
      <FilterDropdownButton label="메뉴" onClick={() => onOpenFilterPopup("메뉴")} />
    </div>
  );
};

export default FilterBar;
