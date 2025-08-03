// components/admin/home/components/HomeQRButton.tsx
import AdminQRIcon from '../../../../assets/images/AdminQRIcon.svg?react';
import HomeButton from '../components/HomeButton';

const HomeQRButton = () => {
  return (
    <HomeButton
      Icon={AdminQRIcon}
      label="맴버쉽 QR스캔"
      onClick={() => console.log('맴버쉽 QR스캔')}
      aria-label="맴버쉽 QR 스캔 버튼"
    />
  );
};

export default HomeQRButton;
