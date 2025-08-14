import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMyCoupon } from "../../../../apis/my/coupon/patch/api";
import type { UseMyCouponResponse } from "../../../../apis/my/coupon/patch/type";

export const useUseMyCoupon = () => {
  const queryClient = useQueryClient();

  return useMutation<UseMyCouponResponse, Error, number>({
    mutationFn: (userCouponId: number) => useMyCoupon(userCouponId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userCoupons"] });
    },
  });
};
