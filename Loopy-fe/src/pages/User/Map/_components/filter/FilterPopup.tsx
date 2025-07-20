import CommonButton from "../../../../../components/button/CommonButton";
import TagButton from "../../../../../components/button/TagButton";
import { useState } from "react";
import { filterGroups } from "../../../../../constants/filterGroup";
import GrabHandle from "src/assets/images/GrabHandle.svg?react";
import ResetIcon from "src/assets/images/Reset.svg?react";

interface FilterPopupProps {
  onClose: () => void;
  selectedGroup?: string;
}

export default function FilterPopup({ onClose, selectedGroup }: FilterPopupProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleReset = () => setSelectedTags([]);

  const groupsToShow = selectedGroup
    ? filterGroups.filter(group => group.title === selectedGroup)
    : filterGroups;

  return (
    <div className="w-full bg-white rounded-t-[1rem] px-[1.5rem] pt-[2.5rem] pb-[10rem] relative">
      {/* Grab Handle */}
      <GrabHandle
        className="w-8 h-2 rounded-[0.25rem] absolute top-3 left-1/2 -translate-x-1/2"
      />

      {/* 헤더 */}
      <div className="flex justify-between items-center mb-[1rem]">
        <h2 className="text-[1.25rem] font-bold">
          {selectedGroup ? selectedGroup : "세부 필터"}
        </h2>
        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-[0.75rem] text-[#3B3B3B]"
        >
          <ResetIcon className="w-3 h-3" />
          전체 초기화
        </button>
      </div>

      {/* 그룹별 필터 태그 */}
      <div className="flex flex-col gap-[1rem]">
        {groupsToShow.map((group) => (
          <div key={group.title}>
            {!selectedGroup && (
              <div className="text-[1rem] font-bold mb-[1rem]">{group.title}</div>
            )}
            <div className="flex flex-wrap gap-[0.5rem]">
              {group.tags.map((tag) => (
                <TagButton
                  key={tag}
                  label={tag}
                  selected={selectedTags.includes(tag)}
                  onClick={() => toggleTag(tag)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 하단 버튼 */}
      <div className="absolute bottom-[2.25rem] left-0 w-full px-[1.5rem] flex flex-col gap-[0.5rem]">
        <CommonButton
          text="저장하기"
          autoStyle
          className="text-[1rem] h-[3.125rem] bg-[#6970F3] text-white font-semibold flex items-center justify-center"
          onClick={() => {
            // TODO: 저장 로직
            onClose();
          }}
        />
        <CommonButton
          text="닫기"
          autoStyle
          className="text-[1rem] h-[3.125rem] bg-[#DFDFDF] text-[#7F7F7F] font-semibold flex items-center justify-center"
          onClick={onClose}
        />
      </div>
    </div>
  );
}
