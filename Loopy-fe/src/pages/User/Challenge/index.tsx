import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CommonHeader from '../../../components/header/CommonHeader';
import ParticipatingChallengeList from './components/ParticipatingChallengeList';
import AllChallengeList from './components/AllChallengeList';
import ChallengeTab from './components/ChallengeTab';

const ChallengePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'participating' | 'all'>(
    'participating',
  );

  return (
    <div className="w-full min-h-screen bg-white">
      <CommonHeader title="챌린지" onBack={() => navigate(-1)} />
      {/* 탭 메뉴 */}
      <ChallengeTab activeTab={activeTab} onChangeTab={setActiveTab} />
      {/* 탭 콘텐츠 */}
      <div className="mt-[1.5rem] mb-[3rem]">
        {activeTab === 'participating' ? (
          <ParticipatingChallengeList />
        ) : (
          <AllChallengeList />
        )}
      </div>
    </div>
  );
};

export default ChallengePage;
