import DetailButton from './DetailButton';
import { useNavigate } from 'react-router-dom';

interface ProfileCardProps {
  username: string;
  level: string;
  imageUrl?: string;
  receivedStamps: number;
  ongoingChallenges: number;
  totalStamps: number;
  points: number;
}

const ProfileCard = ({
  username,
  level,
  imageUrl,
  receivedStamps,
  ongoingChallenges,
  totalStamps,
  points,
}: ProfileCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="text-white">
      {/* 이름 + 레벨 + 레벨 전체보기 */}
      <div className="text-[1.5rem] font-bold">{username}님은</div>
      <div className="flex items-center justify-between mt-1">
        <div className="text-[1.5rem] font-bold text-[#E3F389]">{level}</div>
        <DetailButton
          onClick={() => navigate('/level')}
          textColor="text-white"
          label="레벨 전체보기"
        />
      </div>

      {/* 이미지 + 우측 정보 묶기 */}
      <div className="flex mt-4">
        {/* 프로필 이미지 */}
        <div className="w-[10.875rem] h-[9.75rem] overflow-hidden  flex-shrink-0">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-[#ddd] flex items-center justify-center text-black">
              이미지
            </div>
          )}
        </div>

        {/*현황 + 카드 */}
        <div className="ml-4 flex flex-col justify-between">
          {/* 이번달 현황 */}
          <div className="text-[1rem] font-semibold">
            <div>이번달 현황</div>
            <div className="flex justify-between mt-1 text-[0.875rem] text-[#E3F389] pr-4">
              <div className="font-normal">받은 스탬프</div>
              <div className="font-semibold">{receivedStamps}개</div>
            </div>
            <div className="flex justify-between text-[0.875rem]  text-[#E3F389] pr-4">
              <div className="font-normal">진행 중인 챌린지</div>
              <div className="font-semibold">{ongoingChallenges}개</div>
            </div>
          </div>

          {/* 하단 카드 */}
          <div className="flex gap-2 mt-4">
            <div className="w-[4.5rem] h-[4.5rem] bg-white/30 rounded-[4px] p-2 text-center">
              <div className="text-[0.875rem] font-semibold mt-0.5">
                총 스탬프
              </div>
              <div className="text-[1.125rem] font-bold text-[#E3F389] mt-1">
                {totalStamps}개
              </div>
            </div>
            <div className="w-[4.5rem] h-[4.5rem] bg-white/30 rounded-[4px] p-2 text-center">
              <div className="text-[0.875rem] font-semibold mt-0.5">포인트</div>
              <div className="text-[1.125rem] font-bold text-[#E3F389] mt-1">
                {points}p
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
