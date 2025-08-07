const stats = [
  { label: '참여한 챌린지 수', value: '5개' },
  { label: '총 참여 고객 수', value: '238명' },
  { label: '혜택 수령한 고객 수', value: '200명' },
  { label: '챌린지로 판매된 건', value: '32건' },
];

const ChallengeChart = () => {
  return (
    <div className="flex w-full mt-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex-1 h-16 px-8 ${index < stats.length - 1 ? 'border-r border-[#DFDFDF]' : ''}`}
        >
          <div className="flex flex-col justify-center gap-6 text-center">
            <div className="text-[1rem] text-[#7F7F7F] font-semibold leading-none">
              {stat.label}
            </div>
            <div className="text-[1.5rem] text-[#000000] font-bold leading-none">
              {stat.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChallengeChart;
