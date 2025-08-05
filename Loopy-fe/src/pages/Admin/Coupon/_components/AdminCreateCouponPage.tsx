import { useState } from 'react';
import CouponTypeSection from './CouponTypeSection';
import CouponConditionSection from './CouponConditionSection';
import CouponLimitSection from './CouponLimitSection';
import CommonAdminButton from '../../../../components/admin/button/CommonAdminButton';
import CommonTopBar from '../../../../components/admin/topBar/CommonTopBar';

interface Props {
  onBack: () => void;
}

const AdminCouponCreatePage = ({ onBack }: Props) => {
  const [couponType, setCouponType] = useState<'discount' | 'size' | 'freeDrink' | null>(null);
  const [discountAmount, setDiscountAmount] = useState('');
  const [hasCondition, setHasCondition] = useState<boolean | null>(null);
  const [conditionText, setConditionText] = useState('');
  const [hasLimit, setHasLimit] = useState<boolean | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const isValid =
    couponType !== null &&
    (couponType !== 'discount' || (discountAmount.trim() !== '')) &&
    hasCondition !== null &&
    (hasCondition === false || conditionText.trim() !== '') &&
    hasLimit !== null &&
    (hasLimit === false || (startDate !== null && endDate !== null));

  return (
    <div className="flex flex-col w-full">
      <CommonTopBar title="쿠폰 발행" onBack={onBack} />

      <div className='max-w-[34rem]'>
        <CouponTypeSection
          value={couponType}
          onChange={setCouponType}
          discountAmount={discountAmount}
          onChangeDiscountAmount={setDiscountAmount}
        />
        <CouponConditionSection
          value={hasCondition}
          onChange={setHasCondition}
          conditionText={conditionText}
          onChangeConditionText={setConditionText}
        />
        <CouponLimitSection
          value={hasLimit}
          onChange={setHasLimit}
          startDate={startDate}
          endDate={endDate}
          onChangeStartDate={setStartDate}
          onChangeEndDate={setEndDate}
        />
        <CommonAdminButton
          disabled={!isValid}
          className="w-full mb-[2rem]"
          label="쿠폰 발행하기"
        />
      </div>
    </div>
  );
};

export default AdminCouponCreatePage;
