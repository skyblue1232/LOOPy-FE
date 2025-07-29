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
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      <CommonHeader title="챌린지" onBack={() => navigate(-1)} />
      <ChallengeTab activeTab={activeTab} onChangeTab={setActiveTab} />
      <div className="mt-[1.5rem] mb-[3rem]">
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
