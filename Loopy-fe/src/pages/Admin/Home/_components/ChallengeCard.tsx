const ChallengeCard = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-18 h-18 ">이미지</div>
      {/*내용*/}
      <div className="flex flex-col">
        <div className="text-black text-[1rem] font-semibold leading-none mb-2">
          지구를 지켜요! 텀블러 챌린지
        </div>
        <div className="text-[#7F7F7F] text-[0.875rem] font-normal leading-none mb-4">
          2025.08.15 ~ 205.09.15
        </div>
        <div className="flex gap-1">
          <div className="text-[#6970F3] text-[0.75rem] font-normal leading-none">
            참여자
          </div>
          <div className="text-[#6970F3] text-[0.75rem] font-semibold leading-none">
            54명
          </div>
          <div className="text-[#6970F3] text-[0.75rem] font-normal leading-none ml-1">
            완료자
          </div>
          <div className="text-[#6970F3] text-[0.75rem] font-semibold leading-none">
            38명 (70%)
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
