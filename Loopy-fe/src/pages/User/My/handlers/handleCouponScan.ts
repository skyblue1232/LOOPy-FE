import type { UseMutateFunction } from "@tanstack/react-query";
import type { UseMyCouponResponse } from "../../../../apis/my/coupon/patch/type";

export const handleCouponScan = (
  useCoupon: UseMutateFunction<UseMyCouponResponse, Error, number, unknown>,
  userCouponId: number,
  couponName: string,
  onSuccess: (message: string) => void
) => {
  useCoupon(userCouponId, {
    onSuccess: () => {
      onSuccess(`${couponName}\n쿠폰을 사용했어요!`);
    },
    onError: (err) => {
      console.error("쿠폰 사용 처리 실패", err);
    },
  });
};
