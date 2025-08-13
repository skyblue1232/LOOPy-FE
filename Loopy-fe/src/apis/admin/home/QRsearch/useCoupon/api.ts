import axiosInstance from '../../../../axios';
import type { UseCouponResponse } from './type';

export const useCoupon = async (
  userId: number,
  couponId: number,
): Promise<UseCouponResponse> => {
  try {
    const response = await axiosInstance.patch<UseCouponResponse>(
      `/api/v1/owner/users/${userId}/coupons/${couponId}`,
    );
    return response.data;
  } catch (error) {
    console.error('쿠폰 사용 API 에러:', error);
    throw error;
  }
};
