import CommonSideBar from '../../../components/admin/sideBar/CommonSideBar';
import CommonTopBar from '../../../components/admin/topBar/CommonTopBar';
import AnalysisCard from './components/AnalysisCard';
import HomeQRButton from './components/HomeQRButton';
import HomeStampButton from './components/HomeStampButton';
import StampOverview from './components/StampOverview';
import CouponOverview from './components/CouponOverview';
import ChallengeOverview from './components/ChallengeOverview';

const AdminHomePage = () => {
  return (
    <div className="w-full min-h-screen relative font-suit bg-white text-[#252525]">
      {/* 사이드바 */}
      <CommonSideBar />

      {/* 오른쪽 영역: TopBar + 본문 */}
      <div className="flex-1 flex flex-col ml-[12.875rem]">
        <CommonTopBar userName="카페 위니" profileImageUrl="" />
        <main className="flex-1 pt-22 space-y-4 overflow-x-auto mb-8">
          {/* AnalysisCard + 버튼 2개 */}
          <div className="flex gap-4 items-stretch flex-nowrap">
            <div className="w-[28rem] flex-shrink-0">
              <AnalysisCard />
            </div>
            <div className="flex gap-2 flex-1 min-w-0">
              <div className="flex-1 min-w-0">
                <HomeStampButton />
              </div>
              <div className="flex-1 min-w-0">
                <HomeQRButton />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <StampOverview />
          </div>
          <div className="flex gap-4">
            <ChallengeOverview />
            <CouponOverview />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminHomePage;
