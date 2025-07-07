interface LocationLabelProps {
  dongName: string; // 예: "서대문구 연희동"
}

const LocationLabel = ({ dongName }: LocationLabelProps) => {
  return (
    <div className="flex items-center text-[0.875rem] text-[#3B3B3B]">
      <img
        src="/src/assets/images/PinIcon.svg"
        alt="위치 아이콘"
        className="w-[1rem] h-[1rem] mr-[0.25rem]"
      />
      <span>{dongName}</span>
    </div>
  );
};

export default LocationLabel;
