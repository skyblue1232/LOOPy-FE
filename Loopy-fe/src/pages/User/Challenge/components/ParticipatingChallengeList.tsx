import ChallengeCard from './ChallengeCard';
import { challengeCardList } from '../mock/mockData';

const ParticipatingChallengeList: React.FC = () => {
  const participatingChallenges = challengeCardList.filter(
    (challenge) => challenge.participating,
  );

  return (
    <div className="flex flex-col gap-6">
      {participatingChallenges.length > 0 ? (
        participatingChallenges.map((challenge, index) => (
          <ChallengeCard
            key={index}
            data={challenge}
            hideParticipatingTag={true}
          />
        ))
      ) : (
        <div className="text-gray-500 text-sm text-center">
          참여 중인 챌린지가 없습니다.
        </div>
      )}
    </div>
  );
};

export default ParticipatingChallengeList;
