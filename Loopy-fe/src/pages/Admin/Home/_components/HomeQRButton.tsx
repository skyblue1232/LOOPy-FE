import { useState } from 'react';
import AdminQRIcon from '../../../../assets/images/AdminQRIcon.svg?react';
import HomeButton from '../_components/HomeButton';
import QRModal from '../_components/modal/QRModal';

const HomeQRButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  // 제출 처리 함수 작성 (예시: 제출 내용 로그 출력 + 모달 닫기)
  const handleSubmit = (phone: string) => {
    console.log('제출된 전화번호:', phone);
    // 필요하면 여기서 API 호출 등 처리
    setIsModalOpen(false); // 제출 후 모달 닫기
  };

  return (
    <>
      <HomeButton
        Icon={AdminQRIcon}
        label="맴버쉽 QR스캔"
        onClick={handleOpen}
        aria-label="맴버쉽 QR 스캔 버튼"
      />

      {isModalOpen && <QRModal onClose={handleClose} onSubmit={handleSubmit} />}
    </>
  );
};

export default HomeQRButton;
