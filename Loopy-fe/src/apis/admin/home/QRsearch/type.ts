export interface VerifyQRRequest {
  userId: number;
}

export interface VerifyQRError {
  errorCode: string;
  reason: string;
  data: unknown | null;
}

export interface StampBook {
  stampBookId: number;
  currentCount: number;
  goalCount: number;
}

export interface StampInfo {
  totalCount: number;
  currentStampBook: StampBook | null;
}

export interface PointInfo {
  total: number;
}

export interface Coupon {
  userCouponId: number;
  name: string;
  description: string;
  expiredAt: string;
}

export interface Challenge {
  challengeId: number;
  title: string;
  expiredAt: string;
}

export interface VerifyQRSuccessData {
  userId: number;
  nickname: string;
  stamp: StampInfo;
  point: PointInfo;
  availableCoupons: Coupon[];
  ongoingChallenges: Challenge[];
}

export interface VerifyQRResponseSuccess {
  resultType: 'SUCCESS';
  error: null;
  success: VerifyQRSuccessData;
}

export interface VerifyQRResponseFail {
  resultType: 'FAIL';
  error: VerifyQRError;
  success: null;
}

export type VerifyQRResponse = VerifyQRResponseSuccess | VerifyQRResponseFail;
