import ChallengeCard from './ChallengeCard';
import { useParticipatingChallengeList } from '../../../../hooks/query/challenge/useChallengeList';

const ParticipatingChallengeList: React.FC = () => {
  const { participatingChallengeList, isLoading, isError } =
    useParticipatingChallengeList();

  if (isLoading) {
    return <div className="text-center text-gray-400">로딩 중...</div>;
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">
        챌린지 목록을 불러오지 못했습니다.
      </div>
    );
  }

  if (participatingChallengeList.length === 0) {
    return (
      <div className="text-gray-500 text-sm text-center">
        챌린지가 없습니다.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {participatingChallengeList.map((challenge) => (
        <ChallengeCard
          key={challenge.id}
          data={challenge}
          hideParticipatingTag={true}
        />
      ))}
    </div>
  );
};

export default ParticipatingChallengeList;
