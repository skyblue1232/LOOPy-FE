import QuestionMark from '../../../../assets/images/QuestionMark.svg?react';

const StampOverview = () => {
  return (
    <div className="h-[19rem] w-full bg-[#F0F1FE]">
      <div></div>
      {/*우측 흰색 상자들*/}
      <div className="flex flex-col gap-2">
        <div className="h-[4.688rem] bg-white rounded-lg px-[3.563rem] py-[3.563rem] flex flex-col items-center justify-center">
          <div className="flex gap-3">
            <span className="leading-none text-[1rem] font-semibold">
              주간 적립 수
            </span>
            <QuestionMark />
          </div>
          <span className="text-[1.25rem] font-bold">182개</span>
        </div>
      </div>
    </div>
  );
};

export default StampOverview;
