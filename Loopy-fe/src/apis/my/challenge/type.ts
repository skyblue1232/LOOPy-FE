export interface VerifyChallengeResponse {
  status: "SUCCESS" | "FAIL";
  code: number;
  message: string;
  data: {
    completedAt: string; 
    completedCount: number; 
    milestoneRewarded?: number; 
  } | null;
}

export interface CompleteChallengeResponse {
  resultType: string; 
  error?: string;
  success?: {
    message: string;
    couponId?: number;
  };
}
