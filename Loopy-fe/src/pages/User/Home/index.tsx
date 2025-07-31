import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonBottomBar from '../../../components/bottomBar/CommonBottomBar';
import MyStamp from './components/MyStamp';
import ProfileCardContainer from './components/ProfileCardContainer';
import TopBar from './components/TopBar';
import StampSort from './components/StampSort';
import DetailButton from './components/DetailButton';
import ChallengeCarousel from './components/ChallengeCarousel';
import HomePageSkeleton from './Skeleton/HomeSkeleton';
import { useStampBooks } from '../../../hooks/query/stampBook/useStampBook';

const HomePage = () => {
  const [sortType, setSortType] = useState<'most' | 'due'>('most');
  const apiSortBy = sortType === 'most' ? 'mostStamped' : 'shortestDeadline';

  const {
    data: stampBooks,
    isLoading,
    error,
  } = useStampBooks({ sortBy: apiSortBy });

  const navigate = useNavigate();

  if (isLoading) {
    return <HomePageSkeleton />;
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-500">오류가 발생했습니다.</div>
    );
  }

  if (!stampBooks || stampBooks.length === 0) {
    return <div className="p-4 text-center">스탬프북이 없습니다.</div>;
  }

  return (
    <div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#6970F3] to-[#3D418D] z-0" />
      <div className="relative z-10">
        <div className="mt-[1.5rem]">
          <TopBar />
        </div>
        <CommonBottomBar active="home" onChange={(tab) => console.log(tab)} />
        <div className="mt-[1.5rem]">
          <ProfileCardContainer />
        </div>
        <div className="bg-white rounded-t-xl mt-8 pt-8 -mx-[1.5rem] px-[1.5rem]">
          <div className="font-bold text-[1.125rem] flex justify-between items-center leading-none mb-6">
            <span>루피와 진행 중인 챌린지</span>
            <DetailButton
              onClick={() => navigate('/challenge')}
              textColor="text-[#7F7F7F]"
              label="전체보기"
            />
          </div>
          <div className="-mr-[1.5rem]">
            <ChallengeCarousel />
          </div>
          {/* stampBooks가 있을 때만 아래 섹션 보여주기 */}
          {stampBooks && stampBooks.length > 0 && (
            <>
              <div className="flex justify-between items-center mt-8">
                <div className="font-bold text-[1.125rem] flex items-center gap-2">
                  <span>내 스탬프지</span>
                  <span className="text-[#6970F3] text-[1.125rem]">
                    {stampBooks.length}개
                  </span>
                </div>
                <StampSort value={sortType} onChange={setSortType} />
              </div>
              <div className="text-[0.875rem] text-gray-500 mt-3">
                1달 내 재방문이 없으면 포인트로 자동 환전되어요
              </div>
              <div className="mt-6 pb-[4rem] flex flex-col items-center">
                {stampBooks.map((stamp) => (
                  <MyStamp
                    key={stamp.id}
                    stampBook={stamp}
                    imageUrl={undefined}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
