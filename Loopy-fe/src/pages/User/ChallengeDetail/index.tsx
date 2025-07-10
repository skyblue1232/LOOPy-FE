import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CommonHeader from '../../../components/header/CommonHeader';
import { challengeCardList } from '../Challenge/mock/mockData';
import Calendar from '../../../assets/images/Calendar.svg';
import Crown from '../../../assets/images/Crown.svg';

const ChallengeDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const challengeId = Number(id);

  const challenge = challengeCardList.find(
    (item) => item.challengeId === challengeId,
  );
  if (!challenge) {
    return <div>챌린지를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <CommonHeader title="챌린지 정보" onBack={() => navigate(-1)} />
      <div className="flex flex-col items-center mt-6">
        <div className="w-[6rem] h-[6rem] rounded-full flex items-center justify-center mb-4">
          <img
            src={challenge.challengeImage}
            alt={challenge.challengeName}
            className="w-[6rem] h-[6rem] rounded-full object-cover"
          />
        </div>
        <p className="text-xs text-[#6970F3] font-normal mb-1">
          {challenge.challengeMonth
            ? `${challenge.challengeMonth}월의 이벤트`
            : '루피만의 챌린지!'}
        </p>
        <h1 className="text-lg font-bold mb-4 text-center">
          {challenge.challengeName}
        </h1>

        {challenge.participating && (
          <p className="bg-[#F0F1FE] rounded text-[#6970F3] text-[0.75rem] font-regular mb-4 px-[0.5rem] py-[0.375rem]">
            카페 위니에서 챌린지 중
          </p>
        )}

        {/* 구분선 */}
        <div className="w-full max-w-md h-px bg-[#E0E0E0] mt-4 mb-4" />

        <p className="text-base font-medium text-center whitespace-pre-line">
          {challenge.challengeDescription}
        </p>

        {/* 구분선 */}
        <div className="w-full max-w-md h-px bg-[#E0E0E0] mt-4 mb-4" />

        <p className="text-sm font-normal leading-relaxed mb-8">
          {challenge.challengeDetail}
        </p>

        <div className="w-full max-w-md space-y-4 mb-6">
          <div className="flex items-center justify-between bg-[#F0F1FE] p-3 rounded-md">
            <div className="flex items-center gap-1">
              <img src={Calendar} alt="달력 아이콘" className="w-4 h-4" />
              <span className="text-sm font-medium text-[#6970F3]">기간</span>
            </div>
            <span className="text-base font-medium">
              {challenge.challengeStartDate} ~ {challenge.challengeDoneDate}
            </span>
          </div>

          <div className="flex items-center justify-between bg-[#F0F1FE] p-3 rounded-md">
            <div className="flex items-center gap-1">
              <img src={Crown} alt="왕관 아이콘" className="w-4 h-4" />
              <span className="text-sm font-medium text-[#6970F3]">
                챌린지 혜택
              </span>
            </div>
            <span className="text-base font-medium">
              {challenge.challengeReward}
            </span>
          </div>
        </div>

        {!challenge.participating ? (
          <button
            onClick={() => navigate(`/challenge/${challengeId}/stores`)}
            className="w-full max-w-md bg-[#6970F3] hover:bg-[#5b62d8] text-white py-3 rounded-xl font-semibold transition-colors"
          >
            참여 가능 매장 찾기
          </button>
        ) : (
          <div className="flex gap-[1rem] justify-center mt-4">
            <div className="w-[5rem] h-[5rem] rounded-full bg-[#D9D9D9]" />
            <div className="w-[5rem] h-[5rem] rounded-full bg-[#D9D9D9]" />
            <div className="w-[5rem] h-[5rem] rounded-full bg-[#D9D9D9]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengeDetailPage;
