import ChallengeCard from './ChallengeCard';
import { challengeCardList } from '../mock/mockData';

const AllChallengeList: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      {challengeCardList.length > 0 ? (
        challengeCardList.map((challenge, index) => (
          <ChallengeCard key={index} data={challenge} />
        ))
      ) : (
        <div className="text-gray-500 text-sm text-center">
          챌린지가 없습니다.
        </div>
      )}
    </div>
  );
};

export default AllChallengeList;
