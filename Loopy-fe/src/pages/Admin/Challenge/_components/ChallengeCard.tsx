import { useState, type FC } from 'react';
import CommonTwoButtonModal from '../../../../components/admin/modal/CommonTwoButtonModal';
import CommonCompleteModal from '../../../../components/admin/modal/CommonCompleteModal';

type ChallengeCardProps = {
  title: string;
  period: string;
  thumbnailUrl: string;
  isJoined: boolean;
};

const ChallengeCard: FC<ChallengeCardProps> = ({
  title,
  period,
  thumbnailUrl,
  isJoined,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);

  const buttonText = isJoined ? '참여 중' : '참여';
  const buttonStyle =
    buttonText === '참여 중'
      ? 'bg-[#ECECFE] text-[#6970F3]'
      : 'bg-[#6970F3] text-white';

  const handleButtonClick = () => {
    if (buttonText === '참여') setIsModalOpen(true);
  };

  const handleParticipate = () => {
    setIsModalOpen(false);
    setIsCompleteModalOpen(true);
  };

  return (
    <>
      <div className="relative flex gap-6 items-center bg-white rounded-lg p-4">
        <div className="w-18 h-18">
          <img src={thumbnailUrl} alt={title} className="w-full h-full" />
        </div>
        <div className="flex flex-col w-full gap-2">
          <div className="text-[#6970F3] text-[0.75rem] font-semibold leading-none">
            월간 챌린지
          </div>
          <div className="text-black text-[1rem] font-semibold leading-none">
            {title}
          </div>
          <div className="text-[#7F7F7F] text-[0.875rem] font-normal leading-none">
            {period}
          </div>
        </div>

        <button
          className={`absolute right-0 h-[2.125rem] w-[4.5rem] px-4 py-2.5 rounded-md text-sm font-semibold leading-none ${buttonStyle}`}
          onClick={handleButtonClick}
        >
          {buttonText}
        </button>
      </div>

      {isModalOpen && (
        <CommonTwoButtonModal
          onClose={() => setIsModalOpen(false)}
          title={`${title}에 참여할까요?`}
          message={
            '멤버쉽 QR 스캔을 통해 인증을 진행해주시면 됩니다.\n정해진 횟수만큼 인증이 누적되면 고객에게 자동으로 혜택이 제공되어요.'
          }
          purpleButton="참여하기"
          purpleButtonOnClick={handleParticipate}
        />
      )}

      {isCompleteModalOpen && (
        <CommonCompleteModal
          onClose={() => setIsCompleteModalOpen(false)}
          message={`${title}에 참여했어요!`}
        />
      )}
    </>
  );
};

export default ChallengeCard;
