import { useState } from 'react';
import AdminQRIcon from '../../../../assets/images/AdminQRIcon.svg?react';
import HomeButton from '../_components/HomeButton';
import QRModal from '../_components/modal/QRModal';
import type { Customer } from '../types/CustomerData';
import CommonTwoButtonModal from '../../../../components/admin/modal/CommonTwoButtonModal';
import CommonCompleteModal from '../../../../components/admin/modal/CommonCompleteModal';
import useUseAllPoints from '../../../../hooks/query/admin/home/useUseAllPoints';
import useUseCoupon from '../../../../hooks/query/admin/home/useUseCoupon';

type ConfirmInfo = {
  title: string;
  type: '사용' | '인증';
  couponId?: number;
  userId?: number;
} | null;

const HomeQRButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pointCustomer, setPointCustomer] = useState<Customer | null>(null);
  const [completeMessage, setCompleteMessage] = useState<string | null>(null);
  const [confirmInfo, setConfirmInfo] = useState<ConfirmInfo>(null);

  const useAllPointsMutation = useUseAllPoints();
  const useCouponMutation = useUseCoupon();

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleConfirmAction = (
    title: string,
    type: '사용' | '인증',
    couponId?: number,
    userId?: number,
  ) => {
    setConfirmInfo({ title, type, couponId, userId });
    setIsModalOpen(false);
  };

  const handleCloseConfirm = () => setConfirmInfo(null);

  const handlePointUse = (customer: Customer) => {
    setPointCustomer(customer);
    setIsModalOpen(false);
  };

  const handleConfirmPointUse = () => {
    if (!pointCustomer) return;

    useAllPointsMutation.mutate(pointCustomer.userId, {
      onSuccess: (res) => {
        const usedAmount = res?.data?.usedAmount ?? 0;
        console.log(
          `${pointCustomer.name}님의 포인트 ${usedAmount}p 사용이 완료되었습니다.`,
        );
        setCompleteMessage(
          `${pointCustomer.name}님의 포인트 ${usedAmount}p 사용이 완료되었어요!`,
        );
        setPointCustomer(null);
      },
      onError: (err) => {
        console.error('포인트 사용에 실패했습니다:', err);
        setPointCustomer(null);
      },
    });
  };

  const handleConfirmCouponUse = () => {
    if (!confirmInfo?.couponId || !confirmInfo?.userId) return;
    useCouponMutation.mutate(
      { userId: confirmInfo.userId, couponId: confirmInfo.couponId },
      {
        onSuccess: () => {
          setCompleteMessage(`${confirmInfo.title} 쿠폰 사용이 완료되었어요!`);
          setConfirmInfo(null);
        },
        onError: (err) => {
          console.error('쿠폰 사용 실패:', err);
          setConfirmInfo(null);
        },
      },
    );
  };

  return (
    <>
      <HomeButton
        Icon={AdminQRIcon}
        label="맴버쉽 QR스캔"
        onClick={handleOpen}
        aria-label="맴버쉽 QR 스캔 버튼"
      />

      {isModalOpen && (
        <QRModal
          onClose={handleClose}
          onConfirmAction={handleConfirmAction}
          onPointUseClick={handlePointUse}
          onSubmit={async () => null}
        />
      )}

      {confirmInfo && (
        <CommonTwoButtonModal
          onClose={handleCloseConfirm}
          title={
            confirmInfo.type === '사용'
              ? `${confirmInfo.title}을 사용 처리할까요?`
              : `${confirmInfo.title} 인증을 진행할까요?`
          }
          message={
            confirmInfo.type === '사용'
              ? '사용 시 고객님의 쿠폰 목록에서 삭제되며 해당 혜택이 즉시 적용되어요'
              : '인증 후에는 취소가 불가능합니다. 모든 인증이 완료되면\n고객에게 리워드가 자동 지급되어요'
          }
          purpleButton={
            confirmInfo.type === '사용' ? '쿠폰 사용 처리하기' : '인증 진행하기'
          }
          purpleButtonOnClick={
            confirmInfo.type === '사용'
              ? handleConfirmCouponUse
              : () => {
                  setCompleteMessage(
                    `${confirmInfo.title} 인증이 완료되었어요!`,
                  );
                  handleCloseConfirm();
                }
          }
        />
      )}

      {pointCustomer && (
        <CommonTwoButtonModal
          onClose={() => setPointCustomer(null)}
          title={
            <>
              <span className="text-black">{pointCustomer.name} 고객님의 </span>
              <span className="text-[#6970F3] font-semibold">
                {pointCustomer.points} 포인트
              </span>
              <span className="text-black">를 사용할까요?</span>
            </>
          }
          message="포인트를 사용한 후에는 취소가 어려워요"
          purpleButton="포인트 사용하기"
          purpleButtonOnClick={handleConfirmPointUse}
        />
      )}

      {completeMessage && (
        <CommonCompleteModal
          onClose={() => setCompleteMessage(null)}
          message={completeMessage}
        />
      )}
    </>
  );
};

export default HomeQRButton;
