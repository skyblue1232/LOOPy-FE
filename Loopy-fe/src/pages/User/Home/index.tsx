import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonBottomBar from '../../../components/bottomBar/CommonBottomBar';
import MyStamp from './components/MyStamp';
import ProfileCard from './components/ProfileCard';
import TopBar from './components/TopBar';
import StampSort from './components/StampSort';
import { stampList, profileCardData } from './mock/mockData';
import DetailButton from './components/DetailButton';
import ChallengeCarousel from './components/ChallengeCarousel';
import HomePageSkeleton from './Skeleton/HomeSkeleton';

const HomePage = () => {
  const [sortType, setSortType] = useState('most');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <HomePageSkeleton />;
  }

  const sortedList = [...stampList].sort((a, b) => {
    if (sortType === 'most') return b.stampCount - a.stampCount;
    if (sortType === 'due')
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    return 0;
  });

  return (
    <div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#6970F3] to-[#3D418D] z-0" />
      <div className="relative z-10">
        <div className="mt-[1.5rem]">
          <TopBar />
        </div>
        <CommonBottomBar active="home" onChange={(tab) => console.log(tab)} />
        <div className="mt-[1.5rem]">
          <ProfileCard {...profileCardData} />
        </div>
        <div className="bg-white rounded-t-xl mt-8 pt-8 -mx-[1.5rem] px-[1.5rem]">
          <div className=" font-bold text-[1.125rem] flex justify-between items-center leading-none mb-6">
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
          <div className="flex justify-between items-center mt-8">
            <div className="font-bold text-[1.125rem] flex items-center gap-2">
              <span>내 스탬프지</span>
              <span className="text-[#6970F3] text-[1.125rem]">
                {stampList.length}개
              </span>
            </div>
            <StampSort value={sortType} onChange={setSortType} />
          </div>
          <div className=" text-[0.875rem] text-gray-500 mt-3">
            1달 내 재방문이 없으면 포인트로 자동 환전되어요
          </div>
          <div className="mt-6 pb-[4rem] flex flex-col items-center">
            {sortedList.map((stamp, idx) => (
              <MyStamp key={idx} {...stamp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
