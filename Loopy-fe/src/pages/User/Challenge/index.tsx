import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import CommonHeader from '../../../components/header/CommonHeader';
import ChallengeTab from './components/ChallengeTab';
import ParticipatingChallengeList from './components/ParticipatingChallengeList';
import AllChallengeList from './components/AllChallengeList';
import ChallengeListSkeleton from './Skeleton/ChallengeListSkeleton';

const ChallengePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'participating' | 'all'>(
    'participating',
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 로딩 시간 조정 가능
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* 상단 헤더 */}
      <CommonHeader title="챌린지" onBack={() => navigate(-1)} />

      {/* 탭 메뉴 */}
      <ChallengeTab activeTab={activeTab} onChangeTab={setActiveTab} />

      {/* 콘텐츠 영역 */}
      <div className="mt-[1.5rem] mb-[3rem] px-4">
        {loading ? (
          activeTab === 'participating' ? (
            <ChallengeListSkeleton />
          ) : (
            <ChallengeListSkeleton />
          )
        ) : activeTab === 'participating' ? (
          <ParticipatingChallengeList />
        ) : (
          <AllChallengeList />
        )}
      </div>
    </div>
  );
};

export default ChallengePage;
