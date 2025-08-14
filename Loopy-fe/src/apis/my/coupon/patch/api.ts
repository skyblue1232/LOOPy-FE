import axiosInstance from "../../../axios";
import type { UseMyCouponResponse } from "./type.ts";

export async function useMyCoupon(userCouponId: number): Promise<UseMyCouponResponse> {
  const res = await axiosInstance.patch<UseMyCouponResponse>(
    `/api/v1/user-coupons/${userCouponId}`
  );
  return res.data;
}
