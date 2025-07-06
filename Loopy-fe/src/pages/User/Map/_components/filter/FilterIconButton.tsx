interface Props {
  onClick: () => void;
}

const FilterIconButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="w-8 aspect-square rounded-full bg-white flex items-center justify-center shadow-[0_4px_4px_rgba(0,0,0,0.15)] overflow-hidden"
    >
      <img
        src="/src/assets/images/Filter.svg"
        alt="필터"
        className="w-4 h-4 object-contain"
      />
    </button>
  );
};

export default FilterIconButton;
