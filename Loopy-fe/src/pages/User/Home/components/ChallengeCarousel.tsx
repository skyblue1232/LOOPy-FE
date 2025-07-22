import { useRef } from 'react';
import ChallengeCard from './ChallangeCard';
import { challengeCardList } from '../mock/mockData';

const ChallengeCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth px-0 pb-2"
      >
        {challengeCardList.map((challenge, index) => (
          <div
            key={index}
            className={`mr-2 ${index === challengeCardList.length - 1 ? 'mr-5' : ''}`}
          >
            <ChallengeCard
              challengeName={challenge.challengeName}
              challengeImage={challenge.challengeImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengeCarousel;
