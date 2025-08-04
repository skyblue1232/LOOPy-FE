import QuestionMark from '../../../../assets/images/QuestionMark.svg?react';
import StampPurple from '../../../../assets/images/StampPurple.svg?react';

const StampOverview = () => {
  return (
    <div className="h-[19rem] bg-[#F0F1FE] p-8">
      <div className="flex gap-2 items-center">
        <StampPurple />
        <div className="text-[1rem] text-black font-semibold leading-none">
          오늘 스탬프 적립 수
        </div>
      </div>
      <div></div>
      {/*우측 흰색 상자들*/}
      <div className="flex flex-col gap-2">
        <div className="h-[4.688rem] bg-white rounded-lg px-[3.563rem] py-[0.688rem] flex flex-col items-center justify-center">
          <div className="flex gap-2">
            <span className="leading-none text-[1rem] font-semibold">
              주간 적립 수
            </span>
            <QuestionMark />
          </div>
          <span className="text-[1.25rem] font-bold">182개</span>
        </div>
        <div className="h-[4.688rem] bg-white rounded-lg px-[3.563rem] py-[0.688rem] flex flex-col items-center justify-center">
          <div className="flex gap-2">
            <span className="leading-none text-[1rem] font-semibold">
              활성 고객 수
            </span>
            <QuestionMark />
          </div>
          <span className="text-[1.25rem] font-bold">94명</span>
        </div>
        <div className="h-[4.688rem] bg-white rounded-lg px-[3.563rem] py-[0.688rem] flex flex-col items-center justify-center">
          <div className="flex gap-2">
            <span className="leading-none text-[1rem] font-semibold">
              스탬프 달성 건수
            </span>
            <QuestionMark />
          </div>
          <span className="text-[1.25rem] font-bold">17건</span>
        </div>
      </div>
    </div>
  );
};

export default StampOverview;
