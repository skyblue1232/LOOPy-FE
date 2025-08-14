import axiosInstance from "../../axios";
import type { VerifyChallengeResponse, CompleteChallengeResponse } from "./type";

export async function verifyChallenge(userId: number, challengeId: number) {
  const url = `/api/v1/owner/users/${userId}/challenges/${challengeId}/verify`;
  const res = await axiosInstance.post<VerifyChallengeResponse>(url);
  return res.data;
}

export async function completeChallenge(challengeId: number) {
  const url = `/api/v1/challenges/${challengeId}/complete`;
  const res = await axiosInstance.post<CompleteChallengeResponse>(url);
  return res.data;
}
