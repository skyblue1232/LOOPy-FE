import PinIcon from "/src/assets/images/PinIcon.svg?react";

interface LocationLabelProps {
  dongName: string; // 예: "서대문구 연희동"
}

const LocationLabel = ({ dongName }: LocationLabelProps) => {
  return (
    <div className="flex items-center text-[0.875rem] text-[#3B3B3B]">
      <PinIcon
        className="w-[1rem] h-[1rem] mr-[0.25rem]"
      />
      <span>{dongName}</span>
    </div>
  );
};

export default LocationLabel;
