import SelectableButton from "../../../../components/button/SelectableButton";
import { useState } from "react";

const tableTags = ["텀블러 할인", "포장 할인", "사이즈업 가능", "두유 변경 가능", "비건"];
const storeTags = ["노트북", "1인석", "디저트 맛집", "예약 가능", "원두 판매", "브런치", "베이커리", "비건", "글루텐프리"];

const StepCafeInfo = ({ onNext }: { onNext: () => void }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div>
      <h2 className="text-[1.375rem] text-[#323232] font-bold mt-[5rem] mb-[1rem]">관심 있는 카페 정보를 골라주세요</h2>
      <p className="text-sm text-[#323232] mb-[1.25rem]">해당하는 카페를 먼저 알려드려요.</p>

      <div className="mb-[0.75rem] font-medium text-[1rem] text-[#434343]">테이크아웃</div>
      <div className="flex flex-wrap gap-2 mb-[2.75rem]">
        {tableTags.map(tag => {
            const key = `table/${tag}`;
            return (
                <SelectableButton
                key={key}
                label={tag}
                selected={selectedTags.includes(key)}
                onClick={() => toggleTag(key)}
                />
            );
            })}
      </div>

      <div className="mb-[0.75rem] font-medium text-[1rem] text-[#434343]">매장</div>
      <div className="flex flex-wrap gap-2 mb-6">
        {storeTags.map(tag => {
            const key = `store/${tag}`;
            return (
                <SelectableButton
                key={key}
                label={tag}
                selected={selectedTags.includes(key)}
                onClick={() => toggleTag(key)}
                />
            );
            })}
      </div>

      <button
        onClick={onNext}
        className="w-full bg-[#00A55D] text-white py-3 rounded-md"
      >
        다음
      </button>
    </div>
  );
};

export default StepCafeInfo;