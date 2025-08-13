export interface ChallengeVerifyResponse {
  status: string;
  code: number;
  message: string;
  data: {
    completedAt: string;
    completedCount: number;
    milestoneRewarded?: number;
  };
}
