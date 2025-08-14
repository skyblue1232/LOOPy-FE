import { useNavigate } from 'react-router-dom';
import CommonSideBar from '../../../../components/admin/sideBar/CommonSideBar';
import CommonTopBar from '../../../../components/admin/topBar/CommonTopBar';
import ChallengeCard from './ChallengeCard';
import { useAdminCafe } from '../../../../contexts/AdminContext';
import { useAvailableChallenges } from '../../../../hooks/query/admin/challenge/useAvailableChallenges';
import LoadingSpinner from '../../../../components/loading/LoadingSpinner';

const AdminChallengeList = () => {
  const navigate = useNavigate();
  const { activeCafeId } = useAdminCafe();
  const cafeId = activeCafeId ?? 0;

  const { data, isLoading, isError } = useAvailableChallenges(cafeId);

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>챌린지 목록을 불러오지 못했습니다.</div>;

  return (
    <div className="w-full min-h-screen flex font-suit text-[#252525]">
      <CommonSideBar />
      <div className="flex-1 flex flex-col ml-[12.875rem]">
        <CommonTopBar
          title="챌린지 목록"
          profileImageUrl=""
          onBack={() => navigate(-1)}
        />

        {data?.data.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            title={challenge.title}
            period={`${challenge.startDate} ~ ${challenge.endDate}`}
            thumbnailUrl={challenge.thumbnailUrl}
            isJoined={challenge.isJoined}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminChallengeList;
