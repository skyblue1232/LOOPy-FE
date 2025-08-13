import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getOwnerStampStats } from '../../../../apis/admin/home/dashboard/api';
import type { StampStatsResponse } from '../../../../apis/admin/home/dashboard/type';

export const useOwnerStampStats = () => {
  const query = useQuery<StampStatsResponse, Error>({
    queryKey: ['ownerStampStats'],
    queryFn: getOwnerStampStats,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  useEffect(() => {
    if (query.isError) {
      console.error('스탬프 통계 조회 실패:', query.error?.message);
    }
  }, [query.isError, query.error]);

  return query;
};
