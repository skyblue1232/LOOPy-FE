import { useRef } from 'react';
import ChallengeCard from './ChallangeCard';
import RoundButton from './RoundButton';
import { challengeCardList } from '../mock/mockData';

const ChallengeCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-2 no-scrollbar scroll-smooth px-0 pb-2"
      >
        {challengeCardList.map((challenge, index) => (
          <ChallengeCard
            key={index}
            challengeName={challenge.challengeName}
            challengeImage={challenge.challengeImage}
          />
        ))}
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <div onClick={handleScroll}>
          <RoundButton />
        </div>
      </div>
    </div>
  );
};

export default ChallengeCarousel;
