import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LoopyIconGreen from '../../../assets/images/LoopyIconGreen.svg?react';
import LoopyTitle from '../../../assets/images/LoopyTitle.svg?react';
import AdminChallenge from '../../../assets/images/AdminChallenge.svg?react';
import AdminCoupon from '../../../assets/images/AdminCoupon.svg?react';
import AdminStamp from '../../../assets/images/AdminStamp.svg?react';
import AdminHome from '../../../assets/images/AdminHome.svg?react';
import AdminChallengePurple from '../../../assets/images/AdminChallengePurple.svg?react';
import AdminCouponPurple from '../../../assets/images/AdminCouponPurple.svg?react';
import AdminStampPurple from '../../../assets/images/AdminStampPurple.svg?react';
import AdminHomePurple from '../../../assets/images/AdminHomePurple.svg?react';
import AdminSetting from '../../../assets/images/AdminSetting.svg?react';
import AdminLogout from '../../../assets/images/AdminLogout.svg?react';

const menuItems = [
  {
    label: '홈',
    path: '/admin/home',
    icon: <AdminHome />,
    iconSelected: <AdminHomePurple />,
  },
  {
    label: '스탬프 관리',
    path: '/admin/stamp',
    icon: <AdminStamp />,
    iconSelected: <AdminStampPurple />,
  },
  {
    label: '챌린지 관리',
    path: '/admin/challenge',
    icon: <AdminChallenge />,
    iconSelected: <AdminChallengePurple />,
  },
  {
    label: '쿠폰 관리',
    path: '/admin/coupon',
    icon: <AdminCoupon />,
    iconSelected: <AdminCouponPurple />,
  },
];

const CommonSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (item: { label: string; path: string }) => {
    navigate(item.path);
    setIsOpen(false);
  };

  const currentPath = location.pathname;
  const selectedLabel = menuItems.find((item) =>
    currentPath.startsWith(item.path),
  )?.label;

  return (
    <>
      {/* 햄버거 버튼 */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setIsOpen(!isOpen)}>햄버거</button>
      </div>

      {/* 사이드바 */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-[#6970F3] text-white w-[12.875rem] px-6 py-6 z-40
          transform transition-transform duration-300 ease-in-out
          flex flex-col justify-between
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:block
          ${!isOpen ? 'hidden md:block' : ''}
        `}
      >
        {/* 상단: 로고 + 메뉴 */}
        <div>
          <div className="flex gap-4 items-center mb-10">
            <LoopyIconGreen className="w-[1.75rem]" />
            <LoopyTitle className="w-[5rem]" />
          </div>

          <nav className="flex flex-col">
            {menuItems.map((item, index) => {
              const isSelected = selectedLabel === item.label;
              return (
                <button
                  key={index}
                  onClick={() => handleMenuClick(item)}
                  className={`
          flex items-center gap-2
          text-left font-semibold text-[0.875rem] leading-none px-6 py-3 rounded-lg
          ${isSelected ? 'bg-[#F0F1FE] text-[#6970F3]' : 'text-white'}
        `}
                >
                  <div className="w-4 h-4">
                    {isSelected ? item.iconSelected : item.icon}
                  </div>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* 설정 / 로그아웃 */}
        <div className="absolute bottom-8">
          <div className="flex flex-col">
            <button
              onClick={() => {
                console.log('설정페이지');
                setIsOpen(false);
              }}
              className="flex items-center gap-2 text-left font-semibold text-[0.875rem] px-6 py-3 leading-none"
            >
              <div className="w-4 h-4">
                <AdminSetting />
              </div>
              설정
            </button>

            <button
              onClick={() => {
                console.log('로그아웃');
                setIsOpen(false);
              }}
              className="flex items-center gap-2 text-left font-semibold text-[0.875rem] px-6 py-3 leading-none"
            >
              <div className="w-4 h-4">
                <AdminLogout />
              </div>
              로그아웃
            </button>
          </div>
        </div>
      </aside>

      {/* 오버레이 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default CommonSideBar;
