import CommonCard from "../../../../../components/card/CommonCard";
import type { Coupon } from "../_mock/coupons";

const CouponCard = ({ coupon, isPast }: { coupon: Coupon; isPast: boolean }) => {
  return (
    <CommonCard padding="p-0" className="flex items-center justify-between">
      <div className="flex gap-[1rem] items-center">
        <div className="w-[3.5rem] h-[3.5rem] bg-red-600 rounded-full" />
        <div className="flex flex-col">
          <span className="text-[0.75rem] text-[#6970F3] font-semibold mb-[0.5rem]">{coupon.store}</span>
          <span className="text-[1rem] text-[#171718] font-semibold mb-[0.125rem]">{coupon.description}</span>
          <span className="text-[0.875rem] text-[#7F7F7F] font-normal">{coupon.period}</span>
        </div>
      </div>

      {isPast && (
        <div
          className={`px-[0.75rem] py-[0.375rem] rounded-[8px] text-[0.875rem] font-semibold ${
            coupon.status === "used"
              ? "bg-[#FF0000]/10 text-[#FF0000]"
              : "bg-[#F3F3F3] text-[#7F7F7F]"
          }`}
        >
          {coupon.status === "used" ? "사용 완료" : "사용 불가"}
        </div>
      )}
    </CommonCard>
  );
};

export default CouponCard;
