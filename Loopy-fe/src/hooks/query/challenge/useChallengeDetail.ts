import { useEffect, useState } from 'react';
import { fetchChallengeDetail } from '../../../apis/challenge/challengeDetail/api';
import type { ChallengeDetail } from '../../../apis/challenge/challengeDetail/type';

export const useChallengeDetail = (id: number) => {
  const [challengeDetail, setChallengeDetail] =
    useState<ChallengeDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getChallengeDetail = async () => {
      try {
        setIsLoading(true);
        const data = await fetchChallengeDetail(id);
        setChallengeDetail(data.success);
      } catch (e) {
        setIsError(true);
        console.error(`useChallengeDetail 훅에서 에러 (id: ${id}):`, e);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      getChallengeDetail();
    }
  }, [id]);

  return { challengeDetail, isLoading, isError };
};
