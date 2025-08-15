import StampIcon from '/src/assets/images/StampIcon.svg?react';

export default function StampPolicyCardSkeleton() {
  return (
    <div className="w-full max-w-[48.125rem] min-h-[13.5rem] bg-[#F0F1FE] rounded-[1rem] p-[1.5rem] animate-pulse">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[0.5rem]">
          <StampIcon className="w-[1rem] h-[1rem] text-[#6A6FF3]" />
          <div className="w-[6rem] h-[1rem] bg-gray-300 rounded" />
        </div>
        <div className="w-[4.5rem] h-[1rem] bg-gray-300 rounded" />
      </div>

      {/* 본문 */}
      <div className="mt-[2rem] flex gap-[1.5rem]">
        {/* 스탬프 이미지 자리 */}
        <div className="w-[7.5rem] h-[7.5rem] rounded-full bg-gray-200 shrink-0" />

        {/* 오른쪽 내용 */}
        <div className="flex flex-col justify-center gap-[1rem] flex-1">
          {/* 적립 조건 */}
          <div className="flex items-center">
            <div className="w-[10.75rem] h-[1rem] bg-gray-300 rounded" />
            <div className="w-[4rem] h-[1.5rem] bg-gray-300 rounded ml-[0.5rem]" />
            <div className="w-[12rem] h-[1rem] bg-gray-300 rounded ml-[1rem]" />
          </div>

          {/* 10번째 적립 리워드 */}
          <div className="flex items-center">
            <div className="w-[10.75rem] h-[1rem] bg-gray-300 rounded" />
            <div className="w-[4rem] h-[1.5rem] bg-gray-300 rounded ml-[0.5rem]" />
            <div className="w-[8rem] h-[1rem] bg-gray-300 rounded ml-[1rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}
