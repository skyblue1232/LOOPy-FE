import AdminBell from '../../../assets/images/AdminBell.svg?react';

const SIDEBAR_WIDTH = '12.875rem';

interface TopBarProps {
  userName: string;
  profileImageUrl?: string;
}

const CommonTopBar = ({ userName, profileImageUrl }: TopBarProps) => {
  return (
    <header
      aria-label="상단 바"
      className="flex items-center justify-between pt-8 bg-white "
      style={{
        position: 'absolute',
        top: 0,
        left: SIDEBAR_WIDTH,
        right: 0,
        zIndex: 20,
      }}
    >
      {/* 왼쪽: 인사말 */}
      <div className="flex items-center gap-2">
        <div className="text-[1.25rem] font-bold text-black">
          안녕하세요, {userName} 담당자님!
        </div>
      </div>

      {/* 오른쪽: 알림 + 프로필 */}
      <div className="flex items-center gap-4">
        {/* 알림 */}
        <div className="relative w-6 h-6">
          <AdminBell />
        </div>
        {/* 프로필 */}
        {profileImageUrl ? (
          <img
            src={profileImageUrl}
            alt="프로필 사진"
            className="w-8 h-8 rounded-full object-cover"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <div className="text-xs text-gray-500">L</div>
          </div>
        )}
      </div>
    </header>
  );
};

export default CommonTopBar;
