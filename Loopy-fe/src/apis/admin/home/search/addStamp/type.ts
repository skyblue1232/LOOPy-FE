export interface AddStampSuccess {
  stampBookId: number;
  currentCount: number;
  goalCount: number;
  isCompleted: boolean;
}

export interface AddStampResponse {
  resultType: 'SUCCESS' | 'FAIL';
  error: null | {
    errorCode: string;
    reason: string;
    data: any | null;
  };
  success: AddStampSuccess | null;
}
