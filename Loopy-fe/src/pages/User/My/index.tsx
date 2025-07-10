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
    switch (step) {
      case 0:
        return (
          <>
            <div className="py-[1.25rem] flex justify-between items-center text-[#252525]">
              <h1 className="text-[1.25rem] font-bold">마이페이지</h1>
              <Setting className="w-[1.25rem] h-[1.25rem]" onClick={() => setStep(1)} />
            </div>
            <div className="px-6 mt-4 text-[#252525]">
              <CommonCard padding="p-[1.5rem]">
                <ProfileSection />
                <QuickAccessMenu onNavigate={(step) => setStep(step)} />
              </CommonCard>
              <CommonCard padding="p-[1.5rem]">
                <ActivityList onNavigate={(step) => setStep(step)} />
              </CommonCard>
              <CommonCard padding="p-[1.5rem]">
                <CafeNotification onNavigate={() => setStep(8)} />
              </CommonCard>
            </div>
          </>
        );
      case 1:
        return <><CommonHeader title={stepTitles[step]} onBack={() => setStep(0)} /><SettingPage /></>;
      case 2:
        return <><CommonHeader title={stepTitles[step]} onBack={() => setStep(0)} /><StampExchangePage /></>;
      case 3:
        return <><CommonHeader title={stepTitles[step]} onBack={() => setStep(0)} /><MyChallengePage /></>;
      case 4:
        return <><CommonHeader title={stepTitles[step]} onBack={() => setStep(0)} /><CouponBoxPage /></>;
      case 5:
        return <><CommonHeader title={stepTitles[step]} onBack={() => setStep(0)} /><StampHistoryPage /></>;
      case 6:
        return <><CommonHeader title={stepTitles[step]} onBack={() => setStep(0)} /><ReviewPage /></>;
      case 7:
        return <><CommonHeader title={stepTitles[step]} onBack={() => setStep(0)} /><FilterPage /></>;
      case 8:
        return <><CommonHeader title={stepTitles[step]} onBack={() => setStep(0)} /><CafeNoticePage /></>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] text-[#252525] pb-[6rem]">
      {renderStep()}
      <CommonBottomBar
        active="mypage"
        onChange={(tab) => {
          console.log(tab);
        }}
      />
    </div>
  );
};

export default MyPage;
