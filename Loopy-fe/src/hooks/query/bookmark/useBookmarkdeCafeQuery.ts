import { useQuery } from '@tanstack/react-query';
import { fetchBookmarkedCafes } from '../../../apis/bookmark/api';
import type { Bookmark } from '../../../apis/bookmark/type';

export const useBookmarkedCafesQuery = () => {
  return useQuery<Bookmark[]>({
    queryKey: ['bookmarkedCafes'],
    queryFn: fetchBookmarkedCafes,
  });
};
