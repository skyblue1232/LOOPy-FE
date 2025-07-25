import type { ApiResponse } from "../types/ApiResponse";

export interface SignupRequest {
  email: string;
  password: string;
  nickname: string;
  phoneNumber: string;
  allowKakaoAlert: boolean;
  agreements: {
    termsAgreed: boolean;
    privacyPolicyAgreed: boolean;
    marketingAgreed: boolean;
    locationPermission: boolean;
  };
}

export interface SignupSuccessResponse {
  message: string;
  userId: string;
  nickname: string;
}

export type SignupResponse = ApiResponse<SignupSuccessResponse>;
