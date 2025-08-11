import { useState } from 'react';
import type { Customer } from './modal/KeypadModal';
import AdminStampIcon from '../../../../assets/images/AdminStampIcon.svg?react';
import HomeButton from '../_components/HomeButton';
import KeypadModal from './modal/KeypadModal';
import CommonCompleteModal from '../../../../components/admin/modal/CommonCompleteModal';

const HomeStampButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<Customer | null>(null);
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  //TODO 실제 API로 대체하기
  const fetchCustomerInfo = async (): Promise<Customer> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: '이민지', points: 240, stampBook: 3, stamps: 28 });
      }, 400);
    });
  };

  return (
    <>
      <div className="flex flex-col items-start gap-2">
        <HomeButton
          Icon={AdminStampIcon}
          label="스탬프 적립"
          onClick={() => setShowModal(true)}
          aria-label="스탬프 적립 버튼"
        />
      </div>

      {showModal && (
        <KeypadModal
          onClose={() => {
            setShowModal(false);
            setCustomerInfo(null);
          }}
          lookupCustomer={fetchCustomerInfo}
          onApplyStamp={(phone, customer) => {
            console.log('스탬프 적립 완료:', phone, customer);
            setCustomerInfo(customer);
            setShowModal(false);
            setShowCompleteModal(true);
          }}
        />
      )}
      {showCompleteModal && (
        <CommonCompleteModal
          message={`${customerInfo?.name} 고객님의 스탬프가 적립되었어요!`}
          onClose={() => setShowCompleteModal(false)}
        />
      )}
    </>
  );
};

export default HomeStampButton;
