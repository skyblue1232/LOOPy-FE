import CommonHeader from '../../../../../components/header/CommonHeader';
import Info from '../../../../../assets/images/Info.svg?react';
import ArrowRight from '../../../../../assets/images/ArrowRight.svg?react';
import CommonBottomPopup from '../../../../../components/popup/CommonBottomPopup';
import StampPaper from '../../../MyStamp/components/StampPaper';
import { GetRemainingDays } from '../../../MyStamp/components/GetRemainingDays';
import type { StampBook } from '../../../../../apis/myStamp/type';
import { useState } from 'react';

interface StampDetailPageProps {
  stampBook: StampBook;
  onBack: () => void;
}

const StampDetailPage = ({ stampBook, onBack }: StampDetailPageProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupStep, setPopupStep] = useState<1 | 2>(1);

  const dueDate = new Date(stampBook.expiredAt);
  const diffDays = GetRemainingDays(dueDate);
  const isExpired = diffDays < 0;

  const handlePurpleButtonClick = () => setPopupStep(2);
  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setPopupStep(1);
  };

  const popupContents = {
    1: {
      titleText: '스탬프지 기한을 연장할까요?',
      contentsText: `연장하면 지금까지 모은 스탬프를 그대로 유지할 수 있어요.\n단, 스탬프지는 14일 동안 연장돼요.`,
      purpleButtonText: '기한 연장하기',
    },
    2: {
      titleText: `스탬프지 기한이\n${dueDate.getMonth() + 1}.${dueDate.getDate()}까지 연장되었어요!`,
      contentsText: undefined,
      purpleButtonText: undefined,
    },
  };

  return (
    <div className="w-full flex justify-center">
      <div className="relative w-full sm:max-w-[393px] px-[1.5rem]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#6970F3] to-[#3D418D] z-0" />
        <div className="relative z-10 flex flex-col min-h-screen">
          <CommonHeader title="내 스탬프지" onBack={onBack} white />

          <div className="flex items-center gap-2 mt-6 text-white font-semibold text-lg">
            <span className="font-bold text-[1.25rem]">{stampBook.cafeName}</span>
            <span className="text-[#DFDFDF] text-[0.875rem] font-normal">
              {stampBook.cafeAddress}
            </span>
          </div>

          <div className="mt-1 text-[#E3F389] text-[1rem] font-medium">
            스탬프지 기한 ~
            {dueDate.toLocaleDateString('ko-KR', {
              month: '2-digit',
              day: '2-digit',
            }).replace(/\.$/, '')}
            까지
          </div>

          {!isExpired && diffDays <= 7 && (
            <>
              <div className="flex items-center gap-2 p-3 rounded bg-[rgba(255,255,255,0.3)] mt-4">
                <Info className="w-4 h-4 text-white" />
                <span className="text-white text-[0.875rem] font-semibold leading-none">
                  2일 후 포인트로 자동 환전되어요!
                </span>
              </div>
              <div className="flex h-[2.875rem] items-center text-center justify-center gap-2 px-3 rounded-[0.375rem] bg-[#E3F389] mt-2">
                <span
                  className="text-black text-[1rem] font-semibold cursor-pointer"
                  onClick={() => setIsPopupOpen(true)}
                >
                  스탬프지 기한 연장하기
                </span>
              </div>
            </>
          )}

          <div className="relative bg-white rounded-t-xl mt-6 pt-6 pb-6 flex-grow -mx-[1.5rem] px-[1.5rem]">
            <div className="text-[1rem] flex gap-[0.5rem] items-center mb-4">
                <span className="font-medium">스탬프 진행</span>
                <span className="font-semibold text-[#6970F3]">
                {stampBook.currentStampCount}/{stampBook.totalStampCount}
                </span>
            </div>

            <div className="my-20">
                <StampPaper currentStep={stampBook.currentStampCount} />
            </div>

            {isExpired && (
              <>
                <div className="absolute inset-0 bg-black/70 z-110 rounded-t-xl" />
                <div className="absolute top-[1.5rem] left-0 w-full z-120 px-[1.5rem]">
                  <div className="relative w-full flex items-center">
                    <span className="text-[1.25rem] font-bold text-white mx-auto">
                      1번째 스탬프지
                    </span>
                    <ArrowRight className="absolute right-0 w-[1.5rem] h-[1.5rem] text-white ml-auto" />
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full z-120 flex items-center justify-center px-[1.5rem]">
                  <p className="text-white text-[1.125rem] font-bold text-center leading-[150%]">
                    {stampBook.expiredAt}에 스탬프를 모두 모았어요! <br />
                    새로운 스탬프지를 채워보세요
                  </p>
                </div>
              </>
            )}

          </div>
        </div>

        <CommonBottomPopup
          show={isPopupOpen}
          onClose={handleClosePopup}
          titleText={popupContents[popupStep].titleText}
          contentsText={popupContents[popupStep].contentsText}
          purpleButton={popupContents[popupStep].purpleButtonText}
          purpleButtonOnClick={handlePurpleButtonClick}
        />
      </div>
    </div>
  );
};

export default StampDetailPage;
