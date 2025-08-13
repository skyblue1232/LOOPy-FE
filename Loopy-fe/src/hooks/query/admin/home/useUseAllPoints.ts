import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAllPoints } from '../../../../apis/admin/home/QRsearch/useAllPoints/api';
import type { UseAllPointsResponse } from '../../../../apis/admin/home/QRsearch/useAllPoints/type';

const useUseAllPoints = () => {
  const queryClient = useQueryClient();

  return useMutation<UseAllPointsResponse, unknown, number>({
    mutationFn: (userId: number) => useAllPoints(userId),
    onSuccess: (_, userId) => {
      queryClient.invalidateQueries({ queryKey: ['user', userId] });
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
    onError: (error) => {
      console.error('포인트 전액 사용 실패:', error);
    },
  });
};

export default useUseAllPoints;
