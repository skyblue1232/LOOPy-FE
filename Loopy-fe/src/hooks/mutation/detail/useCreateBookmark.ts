import { useMutation } from '@tanstack/react-query';
import { fetchBookmarkedCafes } from '../../../apis/bookmark/api';

export const useCreateBookmark = () => {
  return useMutation({
    mutationFn: fetchBookmarkedCafes,
    onError: (error) => {
      console.error('북마크 생성 실패', error);
    },
  });
};
