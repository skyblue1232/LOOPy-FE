import CommonHeader from "../../../../components/header/CommonHeader";
import StampHistoryItem from "./_components/StampHistoryItem.tsx";
import { stampHistoryDummy } from "../../../../mock/stampHistoryDummy";
import MapPin from "../../../../assets/images/MapPin.svg?react";

interface StampHistoryProps {
  onBack: () => void;
}

const StampHistoryPage = ({ onBack }: StampHistoryProps) => {
  return (
    <div className="min-h-screen bg-white text-[#252525] -mx-[1.5rem] px-[1.5rem] pb-[5rem]">
      <CommonHeader title="스탬프 히스토리" onBack={onBack} />

      <div className="flex items-center gap-[0.25rem] mt-[1.5rem] font-normal text-[#252525] text-[0.875rem]">
        <MapPin className="w-[0.865rem] h-[0.865rem]"/>
        <span>서대문구 연희동</span>
      </div>

      <div className="text-[#252525]">
        {stampHistoryDummy.map((item) => (
          <StampHistoryItem key={item.id} history={item} />
        ))}
      </div>
    </div>
  );
};

export default StampHistoryPage;
