import axiosInstance from '../../../../axios';
import type { ChallengeVerifyResponse } from './type';

export const verifyUserChallenge = async (
  userId: number,
  challengeId: number,
): Promise<ChallengeVerifyResponse> => {
  const res = await axiosInstance.post<ChallengeVerifyResponse>(
    `/api/v1/owner/users/${userId}/challenges/${challengeId}/verify`,
  );
  return res.data;
};
