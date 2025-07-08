import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommonBottomBar from '../../../components/bottomBar/CommonBottomBar';
import MyStamp from './components/MyStamp';
import ProfileCard from './components/ProfileCard';
import TopBar from './components/TopBar';
import StampSort from './components/StampSort';
import { stampList, profileCardData } from './mock/mockData';
import DetailButton from './components/DetailButton';
import ChallengeCarousel from './components/ChallengeCarousel';

const HomePage = () => {
  const [sortType, setSortType] = useState('most');
  const navigate = useNavigate();
  const sortedList = [...stampList].sort((a, b) => {
    if (sortType === 'most') return b.stampCount - a.stampCount;
    if (sortType === 'due')
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    return 0;
  });

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -mx-[1.5rem] bg-gradient-to-b from-[#6970F3] to-[#3D418D] z-0" />
      <div className="relative z-10">
        <TopBar />
        <CommonBottomBar active="home" onChange={(tab) => console.log(tab)} />
        <ProfileCard {...profileCardData} />
        <div className="bg-white rounded-t-xl mt-8 pt-8 -mx-[1.5rem] px-[1.5rem]">
          <div className=" font-bold text-[1.125rem] flex justify-between items-center mb-4">
            <span>루피와 진행 중인 챌린지, 뤂챌린지</span>
            <DetailButton
              onClick={() => navigate('/challenge')}
              textColor="text-[#7F7F7F]"
              label="전체보기"
            />
          </div>
          <ChallengeCarousel />
          <div className="flex justify-between items-center mt-6">
            <div className="font-bold text-[1.125rem] flex items-center gap-2">
              <span>내 스탬프지</span>
              <span className="text-[#6970F3] text-[1.125rem]">
                {stampList.length}개
              </span>
            </div>
            <StampSort value={sortType} onChange={setSortType} />
          </div>
          <div className=" text-[0.875rem] text-gray-500 mt-2">
            1달 내 재방문이 없으면 포인트로 자동 환전되어요
          </div>
          <div className=" mt-4 pb-[5rem]">
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
