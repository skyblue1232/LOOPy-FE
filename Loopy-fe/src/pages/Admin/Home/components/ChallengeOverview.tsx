import ChallengeCard from './ChallengeCard';
import ChallengePurple from '../../../../assets/images/ChallengePurple.svg?react';

const ChallengeOverview = () => {
  return (
    <div className="w-full bg-[#F0F1FE] rounded-lg p-6 flex flex-col">
      <div className="flex gap-2 items-center mb-6">
        <ChallengePurple />
        <div className="text-[1rem] text-black font-semibold leading-none">
          오늘 스탬프 적립 수
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
      </div>
    </div>
  );
};

export default ChallengeOverview;
