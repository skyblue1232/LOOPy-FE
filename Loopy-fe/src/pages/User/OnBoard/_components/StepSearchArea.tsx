import { useState } from "react";
import { useSearchRegion } from "../../../../hooks/useSearchRegion.ts";
import DestinationIcon from "../../../../assets/images/Destination.svg?react";
import SearchIcon from "../../../../assets/images/Search.svg?react";
import { generateRegionKey } from "../../../../utils/region";
import CommonButton from "../../../../components/button/CommonButton";
import LocationConsentModal from "../../../../components/modal/LocationConsentModal";

const StepSearchArea = ({ onNext }: { onNext: () => void }) => {
  const {
    input,
    setInput,
    selected,
    setSelected,
    handleSearch,
    filteredResults,
  } = useSearchRegion();

  const [locationConsent, setLocationConsent] = useState<"whileUsing" | "once" | "deny" | null>(null);
  const [showConsentModal, setShowConsentModal] = useState(false);

  const handleNext = () => {
    if (!selected || !locationConsent) return;

    console.log("선택된 장소 정보:", {
      name: `${selected.region_1depth_name} ${selected.region_2depth_name} ${selected.region_3depth_name}`,
      x: selected.x,
      y: selected.y,
      locationConsent,
    });

    onNext();
  };

  return (
    <div className="relative">
      <h2 className="text-[1.375rem] font-bold mb-[1rem] mt-[5rem]">
        자주 가는 지역을 설정해주세요
      </h2>
      <p className="font-medium text-[#252525] mb-[0.75rem]">
        해당 지역을 기준으로 설정해드려요.
      </p>

      <div className="flex items-center gap-2 mb-4 font-bold text-[#323232]">
        <input
          type="text"
          placeholder="동/도로명 주소로 검색"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-md px-4 py-3 text-[1rem] text-[#252525]"
        />
        <DestinationIcon
          className="w-5 h-5 cursor-pointer"
          onClick={() => setShowConsentModal(true)}
        />
        <SearchIcon
          onClick={handleSearch}
          className="w-5 h-5 cursor-pointer"
        />
      </div>

      <div className="space-y-4 mb-6">
        {filteredResults.map((place) => {
          const isSelected =
            selected && generateRegionKey(selected) === generateRegionKey(place);
          return (
            <div
              key={generateRegionKey(place)}
              className={`px-4 py-4 rounded-[15px] text-[1rem] font-[medium] cursor-pointer flex items-center gap-2 transition
                ${isSelected ? "bg-[#00A55D] text-white" : "bg-[#F1F4F8] text-[#252729]"}`}
              onClick={() => setSelected(place)}
            >
              {place.region_1depth_name} {place.region_2depth_name} {place.region_3depth_name}
            </div>
          );
        })}
      </div>

      {selected && locationConsent && (
        <div className="fixed bottom-[3.375rem] left-0 right-0 px-[1.5rem]">
          <CommonButton
            text="다음"
            onClick={handleNext}
            autoStyle={false}
            className="bg-[#4AA366] text-white"
          />
        </div>
      )}

      {showConsentModal && (
        <LocationConsentModal
          onConfirm={(option) => {
            setLocationConsent(option);
            setShowConsentModal(false);
          }}
        />
      )}
    </div>
  );
};

export default StepSearchArea;
