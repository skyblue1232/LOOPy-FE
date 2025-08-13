import { useMutation } from '@tanstack/react-query';
import type { AddStampResponse } from '../../../../apis/admin/home/search/addStamp/type';
import { addStampToUser } from '../../../../apis/admin/home/search/addStamp/api';

interface AddStampParams {
  userId: number;
  actionToken: string;
}

const useAddStamp = () => {
  return useMutation<AddStampResponse, unknown, AddStampParams>({
    mutationFn: ({ userId, actionToken }) =>
      addStampToUser({ userId, actionToken }),

    onSuccess: (data) => {
      console.log('스탬프 적립 성공:', data);
    },

    onError: (error) => {
      console.error('스탬프 적립 실패:', error);
    },
  });
};

export default useAddStamp;
