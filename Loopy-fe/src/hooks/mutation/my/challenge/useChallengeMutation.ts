import { useMutation } from "@tanstack/react-query";
import { completeChallenge, verifyChallenge } from "../../../../apis/my/challenge/api";
import type { VerifyChallengeResponse, CompleteChallengeResponse } from "../../../../apis/my/challenge/type";

export const useVerifyChallenge = () => {
  return useMutation<VerifyChallengeResponse, Error, { userId: number; challengeId: number }>({
    mutationFn: ({ userId, challengeId }) => verifyChallenge(userId, challengeId),
  });
};

export const useCompleteChallenge = () => {
  return useMutation<CompleteChallengeResponse, Error, number>({
    mutationFn: (challengeId) => completeChallenge(challengeId),
  });
};
