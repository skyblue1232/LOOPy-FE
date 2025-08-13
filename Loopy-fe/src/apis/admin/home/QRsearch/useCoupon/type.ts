export interface UseCouponResponse {
  status: 'SUCCESS' | 'FAILURE';
  code: number;
  message: string;
  data: {
    userCouponId: number;
    usedAt: string;
  };
}
