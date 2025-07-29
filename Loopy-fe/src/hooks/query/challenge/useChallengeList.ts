import { useEffect, useState } from 'react';
import { fetchChallengeList } from '../../../apis/challenge/challengeList/api';
import type { ChallengeListItem } from '../../../apis/challenge/challengeList/type';

export const useAllChallengeList = () => {
  const [allChallengeList, setAllChallengeList] = useState<ChallengeListItem[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getAllChallengeList = async () => {
      try {
        setIsLoading(true);
        const data = await fetchChallengeList();
        setAllChallengeList(data.success);
      } catch (e) {
        setIsError(true);
        console.error('useAllChallengeList 훅에서 에러:', e);
      } finally {
        setIsLoading(false);
      }
    };

    getAllChallengeList();
  }, []);

  return { allChallengeList, isLoading, isError };
};

export const useParticipatingChallengeList = () => {
  const [participatingChallengeList, setParticipatingChallengeList] = useState<
    ChallengeListItem[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getParticipatingChallengeList = async () => {
      try {
        setIsLoading(true);
        const data = await fetchChallengeList();
        const participated = data.success.filter((item) => item.isParticipated);
        setParticipatingChallengeList(participated);
      } catch (e) {
        setIsError(true);
        console.error('useParticipatingChallengeList 훅에서 에러:', e);
      } finally {
        setIsLoading(false);
      }
    };

    getParticipatingChallengeList();
  }, []);

  return { participatingChallengeList, isLoading, isError };
};
