import { useMutation } from '@tanstack/react-query';
import { verifyUserChallenge } from '../../../../apis/admin/home/QRsearch/verifyChallenge/api';
import type { ChallengeVerifyResponse } from '../../../../apis/admin/home/QRsearch/verifyChallenge/type';

export const useVerifyUserChallenge = () => {
  return useMutation<
    ChallengeVerifyResponse,
    Error,
    { userId: number; challengeId: number }
  >({
    mutationFn: ({ userId, challengeId }) =>
      verifyUserChallenge(userId, challengeId),
  });
};
