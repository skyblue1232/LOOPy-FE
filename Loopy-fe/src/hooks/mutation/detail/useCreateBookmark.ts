import { useMutation } from '@tanstack/react-query';
import { createBookmark } from '../../../apis/bookmark/api';

export const useCreateBookmark = () => {
  return useMutation({
    mutationFn: createBookmark,
    onError: (error) => {
      console.error('북마크 생성 실패', error);
    },
  });
};
