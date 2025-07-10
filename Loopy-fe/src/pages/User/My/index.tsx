import { useState } from 'react';
import CommonBottomBar from '../../../components/bottomBar/CommonBottomBar';
import CommonHeader from '../../../components/header/CommonHeader';
import CommonCard from '../../../components/card/CommonCard';
import ProfileSection from './_components/ProfileSection.tsx';
import QuickAccessMenu from './_components/QuickAccessMenu.tsx';
import ActivityList from './_components/ActivityList.tsx';
import CafeNotification from './_components/CafeNotification.tsx';

import SettingPage from './Setting';
import StampExchangePage from './StampExchange';
import MyChallengePage from './Challenge';
import CouponBoxPage from './CouponBox';
import StampHistoryPage from './StampHistory';
import ReviewPage from './Review';
import FilterPage from './Filter';
import CafeNoticePage from './CafeNotice';

import Setting from '../../../assets/images/Setting.svg?react';
import { stepTitles } from '../../../constants/stepTitles.ts';

const MyPage = () => {
  const [step, setStep] = useState(0);

  const renderStep = () => {
    const PageComponent = [
      SettingPage,
      StampExchangePage,
      MyChallengePage,
      CouponBoxPage,
      StampHistoryPage,
      ReviewPage,
      FilterPage,
      CafeNoticePage,
    ][step - 1];

    if (!PageComponent) return null;

    return (
      <div className="min-h-screen bg-white text-[#252525]">
        <CommonHeader title={stepTitles[step]} onBack={() => setStep(0)} />
        <PageComponent />
      </div>
    );
  };

  return step === 0 ? (
    <div className="min-h-screen bg-[#F3F3F3] text-[#252525] overflow-y-auto -mx-[1.5rem] px-[1.5rem] pb-[6rem]">
      <div className="py-[1.5rem] flex justify-between items-center">
        <h1 className="text-[1.25rem] font-bold">마이페이지</h1>
        <Setting
          className="w-[1.25rem] h-[1.25rem]"
          onClick={() => setStep(1)}
        />
      </div>

      <div>
        <CommonCard padding="p-[1.5rem]" className="bg-white mb-[1rem]">
          <ProfileSection />
          <QuickAccessMenu onNavigate={setStep} />
        </CommonCard>
        <CommonCard padding="p-[1.5rem]" className="bg-white mb-[1rem]">
          <ActivityList onNavigate={setStep} />
        </CommonCard>
        <CommonCard padding="p-[1.5rem]" className="bg-white mb-[1.5rem]">
          <CafeNotification onNavigate={() => setStep(8)} />
        </CommonCard>
      </div>

      <CommonBottomBar
        active="mypage"
        onChange={(tab) => {
          console.log(tab);
        }}
      />
    </div>
  ) : (
    renderStep()
  );
};

export default MyPage;
