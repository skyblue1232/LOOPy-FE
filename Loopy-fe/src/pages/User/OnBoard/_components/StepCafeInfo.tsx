import CommonButton from "../../../../components/button/CommonButton";
import SelectableButton from "../../../../components/button/SelectableButton";
import { useState } from "react";

const storeTags = ["노트북", "1인석", "단체석", "주차 가능", "예약 가능", "와이파이 제공", "애견 동반", "24시간 운영"];
const takeawayTags = ["텀블러 할인", "포장 할인"];
const menuTags = ["비건", "저당/무가당", "글루텐프리", "디카페인"];

const StepCafeInfo = ({ onNext }: { onNext: () => void }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div>
      <div className="flex items-center mb-[0.5rem]">
        <h2 className="text-[1.5rem] text-[#323232] font-bold">
          관심 있는 카페 정보를 골라주세요
        </h2>
      </div>
      <div className="flex items-center gap-[0.75rem] mb-[3rem]">
        <p className="text-[0.875rem] text-[#7F7F7F] font-medium">
          해당하는 카페를 먼저 추천드릴게요
        </p>
        <span className="text-[#A8A8A8] text-[1rem] font-normal">
          (1 ~ 5개 선택 필수)
        </span>
      </div>

      <div className="mb-[1rem] font-semibold text-[1rem] text-[#252525]">매장 이용</div>
      <div className="flex flex-wrap gap-[0.5rem] mb-[2.75rem]">
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

      <div className="mb-[1rem] font-semibold text-[1rem] text-[#252525]">테이크아웃</div>
      <div className="flex flex-wrap gap-[0.5rem] mb-6">
        {takeawayTags.map(tag => {
          const key = `takeout/${tag}`;
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

      <div className="mb-[1rem] font-semibold text-[1rem] text-[#252525]">메뉴</div>
      <div className="flex flex-wrap gap-[0.5rem] mb-6">
        {menuTags.map(tag => {
          const key = `menu/${tag}`;
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

      <div className='absolute left-0 w-full px-[1.5rem] bottom-[2rem]'>
        <CommonButton
          text="완료하기"
          onClick={onNext}
          autoStyle={false}
          className={`w-full mt-[1.5rem] ${
            selectedTags.length >= 1 && selectedTags.length <= 5
            ? "bg-[#6970F3] text-white"
            : "bg-[#CCCCCC] text-[#7F7F7F] pointer-events-none"
          }`}
          disabled={selectedTags.length < 1 || selectedTags.length > 5}
        />
      </div>
    </div>
  );
};

export default StepCafeInfo;
