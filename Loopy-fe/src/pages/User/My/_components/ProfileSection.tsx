const ProfileSection = () => {
  return (
    <div className="flex flex-col items-start text-[#252525]">
      <div className="flex flex-row gap-[1.5rem]">
        <div className="w-[4.5rem] h-[4.5rem] bg-red-500 rounded-full" />
        <div className="flex flex-col gap-[0.75rem]">
          <p className="text-[1.125rem] font-bold">루피25</p>
          <span className="text-[0.875rem] font-normal border border-[#DFDFDF] px-[1rem] py-[0.25rem] rounded-[4px] w-fit">
            호기심 많은 탐색가
          </span>
        </div>
      </div>


        <div className="w-full mt-[1.5rem] flex flex-row text-sm text-[#252525] text-center">
          <div className="flex-1 flex items-center justify-center flex-row py-[1rem] border-t border-b border-r border-[#DFDFDF] gap-[1rem]">
              <p className="text-[0.875rem] font-semibold">총 스탬프</p>
              <p className="text-[#6970F3] font-bold text-[1.125rem]">60개</p>
          </div>
          <div className="flex-1 flex items-center justify-center flex-row py-[1rem] border-t border-b border-l border-[#DFDFDF] gap-[1rem]">
              <p className="text-[0.875rem] font-semibold">포인트</p>
              <p className="text-[#6970F3] font-bold text-[1.125rem]">326p</p>
          </div>
        </div>
    </div>
  );
};

export default ProfileSection;
