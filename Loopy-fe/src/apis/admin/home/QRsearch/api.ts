import axiosInstance from '../../../axios';
import type { VerifyQRRequest, VerifyQRResponse } from './type';

export async function verifyQRToken(
  data: VerifyQRRequest,
): Promise<VerifyQRResponse> {
  const response = await axiosInstance.post<VerifyQRResponse>(
    '/api/v1/owner/qrs/verify',
    data,
  );
  return response.data;
}
