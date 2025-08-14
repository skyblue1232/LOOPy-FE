import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CommonHeader from '../../../../components/header/CommonHeader';
import LocationLabel from '../../../../components/etc/LocationLabel';
import SmallButton from '../components/SmallButton';
import CommonBottomPopup from '../../../../components/popup/CommonBottomPopup';
import ChallengeStoreListSkeleton from '../Skeleton/ChallengeStorListSkeleton';
import { joinChallenge } from '../../../../apis/challenge/challengeJoin/api';
import { useChallengeDetail } from '../../../../hooks/query/challenge/useChallengeDetail';

const ChallengeStoreListPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const challengeId = Number(id);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { challengeDetail, isLoading, isError } =
    useChallengeDetail(challengeId);

  const handleJoinChallenge = async () => {
    try {
      const res = await joinChallenge(challengeId);
      alert(res?.success?.message || '챌린지에 참여했어요!');
      setIsPopupOpen(false);
      navigate(`/challenge`);
    } catch (err) {
      console.error('챌린지 참여 실패:', err);
      alert('참여에 실패했습니다. 다시 시도해주세요.');
    }
  };

  if (isLoading) return <ChallengeStoreListSkeleton />;
  if (isError)
    return <div>참여 가능 매장을 불러오는 중 오류가 발생했습니다.</div>;
  if (!challengeDetail?.availableCafes.length)
    return (
      <div>
        <CommonHeader
          title="카공 챌린지 가능 매장"
          onBack={() => navigate(-1)}
        />
        <p className="text-center text-gray-500 mt-4">
          등록된 매장이 없습니다.
        </p>
      </div>
    );

  return (
    <div>
      <CommonHeader title="카공 챌린지 가능 매장" onBack={() => navigate(-1)} />
      <div className="space-y-4">
        <div className="mt-[1.5rem] mb-[1rem]">
          <LocationLabel
            dongName={
              challengeDetail.availableCafes[0]?.region2DepthName ||
              '지역 정보 없음'
            }
          />
        </div>
        {challengeDetail.availableCafes.map((store) => (
          <div key={store.id} className="flex items-center gap-4">
            <img
              src={store.imageUrl || '/default-cafe.jpg'}
              alt={store.name}
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1 flex flex-col justify-center gap-1">
              <div className="flex items-center gap-2">
                <p className="font-bold text-[1.125rem]">{store.name}</p>
              </div>
              <p className="text-[0.875rem] text-[#7F7F7F]">{store.address}</p>
            </div>
            <SmallButton text="참여" onClick={() => setIsPopupOpen(true)} />
          </div>
        ))}
      </div>

      <CommonBottomPopup
        show={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        titleText="이 매장에서 챌린지를 진행할까요?"
        purpleButton="참여하기"
        purpleButtonOnClick={handleJoinChallenge}
        contentsText="챌린지는 한 카페에서만 진행하실 수 있어요"
      />
    </div>
  );
};

export default ChallengeStoreListPage;
