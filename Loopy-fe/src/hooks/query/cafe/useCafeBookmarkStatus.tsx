import { useQuery } from '@tanstack/react-query';
import { getCafeDetail } from '../../../apis/cafeDetail/api';
import type { CafeDetailSuccess, CafeDetailResponse } from '../../../apis/cafeDetail/type';

export function useCafeBookmarkStatus(cafeId?: number) {
  return useQuery({
    queryKey: ['cafeBookmarkStatus', cafeId],
    enabled: !!cafeId,
    queryFn: async () => {
      const raw = (await getCafeDetail(String(cafeId))) as CafeDetailSuccess | CafeDetailResponse;
      const data = 'success' in raw ? raw.success : raw;
      return data.bookmark.isBookmarked;
    },
  });
}