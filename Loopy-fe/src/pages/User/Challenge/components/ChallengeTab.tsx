interface ChallengeTabProps {
  activeTab: 'participating' | 'all';
  onChangeTab: (tab: 'participating' | 'all') => void;
}

const ChallengeTab = ({ activeTab, onChangeTab }: ChallengeTabProps) => {
  return (
    <div className="w-[21.563rem] flex justify-between mt-4">
      <button
        onClick={() => onChangeTab('participating')}
        className={`w-[10.75rem] pb-2 text-sm border-b ${
          activeTab === 'participating'
            ? 'text-[#6970F3] font-semibold border-[#6970F3]'
            : 'text-[#A8A8A8] font-medium border-[#F3F3F3]'
        }`}
      >
        참여 중인 챌린지
      </button>
      <button
        onClick={() => onChangeTab('all')}
        className={`w-[10.75rem] pb-2 text-sm border-b ${
          activeTab === 'all'
            ? 'text-[#6970F3] font-semibold border-[#6970F3]'
            : 'text-[#A8A8A8] font-medium border-[#F3F3F3]'
        }`}
      >
        전체 챌린지
      </button>
    </div>
  );
};

export default ChallengeTab;
