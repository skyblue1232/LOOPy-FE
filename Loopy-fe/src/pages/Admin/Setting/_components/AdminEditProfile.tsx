import { useState } from 'react';
import CommonSideBar from '../../../../components/admin/sideBar/CommonSideBar';
import CommonTopBar from '../../../../components/admin/topBar/CommonTopBar';
import BasicInfoTab from './tabList/BasicInfoTab';
import OperationInfoTab from './tabList/OperationInfoTab';
import MenuRegisterTab from './tabList/MenuRegisterTab';
import clsx from 'clsx';

interface Props {
  onBack: () => void;
}

const tabList = [
  { id: 'basic', label: '기본 정보' },
  { id: 'operation', label: '운영 정보' },
  { id: 'menu', label: '메뉴 등록' },
];

const AdminEditProfile = ({ onBack }: Props) => {
  const [selectedTab, setSelectedTab] = useState('basic');

  return (
    <div className="w-full min-h-screen flex font-suit text-[#252525]">
      <CommonSideBar />

      <div className="flex-1 flex flex-col ml-[12.875rem]">
        <CommonTopBar title="매장 정보 수정" profileImageUrl="" onBack={onBack} />

        <div className="grid grid-cols-3 bg-[#F3F3F3] rounded-[8px] overflow-hidden max-w-[34rem]">
          {tabList.map((tab, index) => {
            const isFirst = index === 0;
            const isLast = index === tabList.length - 1;
            const isSelected = selectedTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={clsx(
                  'py-2 text-[1rem] font-semibold transition-all text-center',
                  !isFirst && 'border-l-[0.5px] border-[#A8A8A8]/60 outline-none',
                  isFirst && 'rounded-l-[8px]',
                  isLast && 'rounded-r-[8px]',
                  isSelected ? 'text-white bg-[#6970F3]' : 'text-[#7F7F7F]'
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 max-w-[34rem]">
          {selectedTab === 'basic' && <BasicInfoTab />}
          {selectedTab === 'operation' && <OperationInfoTab />}
          {selectedTab === 'menu' && <MenuRegisterTab />}
        </div>
      </div>
    </div>
  );
};

export default AdminEditProfile;
