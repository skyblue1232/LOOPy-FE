import CommonHeader from '../../../components/header/CommonHeader';
import { useNavigate, useParams } from 'react-router-dom';
import { stampList } from '../Home/mock/mockData';
import type { StampItem } from '../Home/mock/mockData';
import { useState, useEffect } from 'react';
import Info from '../../../assets/images/Info.svg?react';
import CommonBottomPopup from '../../../components/popup/CommonBottomPopup';
import StampPaper from './components/StampPaper';

const MyStampPage = () => {
  const { cafeId } = useParams<{ cafeId: string }>();
  const navigate = useNavigate();
  const [stampData, setStampData] = useState<StampItem | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupStep, setPopupStep] = useState<1 | 2>(1);

  useEffect(() => {
    if (!cafeId) return;
    const data = stampList.find((item) => item.cafeId === cafeId) || null;
    setStampData(data);
  }, [cafeId]);

  if (!stampData) return <div>해당 카페 스탬프 정보를 찾을 수 없습니다.</div>;

  // 남은 일수 계산
  const today = new Date();
  const dueDate = new Date(stampData.dueDate);
  const diffTime = dueDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 남은 일수

  const handlePurpleButtonClick = () => {
    setPopupStep(2);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setPopupStep(1);
  };

  const popupContents = {
    1: {
      titleText: '스탬프지 기한을 연장할까요?',
      contentsText: `연장하면 지금까지 모은 스탬프를 그대로 유지할 수 있어요.
단, 스탬프지는 14일 동안 연장돼요.`,
      purpleButtonText: '기한 연장하기',
    },
    2: {
      titleText: `스탬프지 기한이\n${dueDate.getMonth() + 1}.${dueDate.getDate()}까지 연장되었어요!`,
      contentsText: undefined,
      purpleButtonText: undefined,
    },
  };

  return (
    <div>
      <div className="absolute inset-0 -mx-[1.5rem] bg-gradient-to-b from-[#6970F3] to-[#3D418D] z-0" />
      <div className="relative z-10 flex flex-col min-h-screen">
        <CommonHeader title="내 스탬프지" onBack={() => navigate(-1)} white />
        <div className="flex items-center gap-2 mt-6 text-white font-semibold text-lg">
          <span className="font-bold text-[1.25rem]">{stampData.cafeName}</span>
          <span className="text-[#DFDFDF] text-[0.875rem] font-normal">
            {stampData.address}
          </span>
        </div>
        <div className="mt-1 text-[#E3F389] text-[1rem] font-medium">
          스탬프지 기한 ~
          {dueDate
            .toLocaleDateString('ko-KR', {
              month: '2-digit',
              day: '2-digit',
            })
            .replace(/\.$/, '')}
          까지
        </div>

        {/* 남은 기간이 7일 이하일 때만 보임 */}
        {diffDays <= 7 && (
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

        <div className="bg-white rounded-t-xl mt-6 pt-6 pb-6 flex-grow -mx-[1.5rem] px-[1.5rem]">
          <div className="text-[1rem] flex gap-[0.5rem] items-center mb-4">
            <span className="font-medium">스탬프지</span>
            <span className="font-semibold text-[#6970F3]">
              {stampData.stampPaper}장째 진행 중
            </span>
          </div>
          <div className="my-20">
            <StampPaper currentStep={stampData.stampCount} />
          </div>
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
  );
};

export default MyStampPage;
