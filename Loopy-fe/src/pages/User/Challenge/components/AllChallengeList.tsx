import ChallengeCard from './ChallengeCard';
import { useAllChallengeList } from '../../../../hooks/query/challenge/useChallengeList';

const AllChallengeList: React.FC = () => {
  const { allChallengeList, isLoading, isError } = useAllChallengeList();

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

  if (allChallengeList.length === 0) {
    return (
      <div className="text-gray-500 text-sm text-center">
        챌린지가 없습니다.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {allChallengeList.map((challenge) => (
        <ChallengeCard key={challenge.id} data={challenge} />
      ))}
    </div>
  );
};

export default AllChallengeList;
