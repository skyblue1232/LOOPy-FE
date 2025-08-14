export interface SendNotificationRequest {
  message: string;
}

export interface SendNotificationResponse {
  resultType: 'SUCCESS' | 'FAIL';
  error: string | null;
  success?: string;
}
