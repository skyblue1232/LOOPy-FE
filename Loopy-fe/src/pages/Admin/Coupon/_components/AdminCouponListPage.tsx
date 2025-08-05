import CommonTopBar from '../../../../components/admin/topBar/CommonTopBar';
import FilterToggleButton from './FilterToggleButton';
import CouponList from './CouponList';
import AddCouponButton from './AddCouponButton';
import { couponData } from '../../../../apis/admin/coupon/mocks';

interface Props {
  onAdd: () => void;
}

const AdminCouponListPage = ({ onAdd }: Props) => {
  return (
    <>
      <CommonTopBar title="쿠폰 관리" profileImageUrl="" />
      <div className="flex justify-between items-center mb-2">
        <FilterToggleButton />
        <AddCouponButton onClick={onAdd} />
      </div>
      <CouponList coupons={couponData} />
    </>
  );
};

export default AdminCouponListPage;
