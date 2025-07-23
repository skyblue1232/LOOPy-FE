import type { ChallengeCardData } from '../mock/mockData';
import { useNavigate } from 'react-router-dom';

interface ChallengeCardProps {
  data: ChallengeCardData;
  hideParticipatingTag?: boolean;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  data,
  hideParticipatingTag,
}) => {
  const navigate = useNavigate();
  const {
    challengeId,
    challengeMonth,
    challengeName,
    challengeStartDate,
    challengeDoneDate,
    challengeImage,
    participating,
  } = data;

  const handleClick = () => {
    navigate(`/challenge/${challengeId}`);
  };

  return (
    <div onClick={handleClick} className="flex items-center cursor-pointer">
      {/* 좌측 이미지 */}
      <img
        src={challengeImage}
        alt={challengeName}
        className="w-[4.5rem] h-[4.5rem] object-cover rounded-full mr-4"
      />
      {/* 중앙 텍스트 */}
      <div className="flex-1">
        <div className="text-xs font-normal text-[#6970F3] leading-none mb-2">
          {challengeMonth ? `${challengeMonth}월의 이벤트` : '루피만의 챌린지!'}
        </div>
        <div className="text-base font-bold leading-none mb-2">
          {challengeName}
        </div>
        <div className="text-sm font-normal text-[#7F7F7F] leading-none">
          {challengeStartDate} ~ {challengeDoneDate}
        </div>
      </div>

      {/* 우측 태그 */}
      {!hideParticipatingTag && participating && (
        <div className="w-[3.188rem] h-[1.25rem] ml-4 px-2 py-1 bg-[#F0F1FE] text-[#6970F3] rounded-sm text-xs font-[0.75rem] flex items-center justify-center">
          <p>참여 중</p>
        </div>
      )}
    </div>
  );
};

export default ChallengeCard;
