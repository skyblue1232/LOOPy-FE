import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCoupon } from '../../../../apis/admin/home/QRsearch/useCoupon/api';
import type { UseCouponResponse } from '../../../../apis/admin/home/QRsearch/useCoupon/type';

const useUseCoupon = () => {
  const queryClient = useQueryClient();

  return useMutation<
    UseCouponResponse,
    unknown,
    { userId: number; couponId: number }
  >({
    mutationFn: ({ userId, couponId }) => useCoupon(userId, couponId),
    onSuccess: (_, { userId }) => {
      queryClient.invalidateQueries({ queryKey: ['user', userId] });
      queryClient.invalidateQueries({ queryKey: ['users'] });
      queryClient.invalidateQueries({ queryKey: ['userCoupons', userId] });
    },
    onError: (error) => {
      console.error('쿠폰 사용 실패:', error);
    },
  });
};

export default useUseCoupon;
