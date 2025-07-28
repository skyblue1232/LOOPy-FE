import FilterIconButton from "./FilterIconButton";
import FilterDropdownButton from "./FilterDropdownButton";

interface FilterBarProps {
  onOpenFilterPopup: (group?: string) => void;
  variant?: "map" | "search";
}

const FilterBar = ({ onOpenFilterPopup, variant = "map" }: FilterBarProps) => {
  return (
    <div className="absolute z-10 flex flex-wrap gap-[0.75rem] top-[calc(48px+0.75rem)] mt-[1.5rem] w-full pointer-events-auto">
      <FilterIconButton onClick={() => onOpenFilterPopup()} variant={variant} />
        <div className="flex flex-wrap gap-[0.375rem]">
          <FilterDropdownButton label="매장 이용" onClick={() => onOpenFilterPopup("매장 이용")} variant={variant}/>
          <FilterDropdownButton label="테이크아웃" onClick={() => onOpenFilterPopup("테이크아웃")} variant={variant}/>
          <FilterDropdownButton label="메뉴" onClick={() => onOpenFilterPopup("메뉴")} variant={variant}/>
        </div>
    </div>
  );
};

export default FilterBar;
