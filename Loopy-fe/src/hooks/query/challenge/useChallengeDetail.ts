import { useQuery } from '@tanstack/react-query';
import { fetchChallengeDetail } from '../../../apis/challenge/challengeDetail/api';
import type { ChallengeDetailResponse } from '../../../apis/challenge/challengeDetail/type';

export const useChallengeDetail = (challengeId: number) => {
  const { data, isLoading, isError } = useQuery<ChallengeDetailResponse>({
    queryKey: ['challengeDetail', challengeId],
    queryFn: () => fetchChallengeDetail(challengeId),
    enabled: !!challengeId,
  });

  return {
    challengeDetail: data?.success ?? null,
    isLoading,
    isError,
  };
};
