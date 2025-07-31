import { useQuery } from '@tanstack/react-query';
import { fetchChallengeList } from '../../../apis/challenge/challengeList/api';
import type { ChallengeListItem } from '../../../apis/challenge/challengeList/type';

export const useAllChallengeList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['allChallengeList'],
    queryFn: fetchChallengeList,
  });

  return {
    allChallengeList: data?.success ?? [],
    isLoading,
    isError,
  };
};

export const useParticipatingChallengeList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['participatingChallengeList'],
    queryFn: fetchChallengeList,
  });

  const participatingChallengeList: ChallengeListItem[] =
    data?.success?.filter((item) => item.isParticipated) ?? [];

  return {
    participatingChallengeList,
    isLoading,
    isError,
  };
};
