import axiosInstance from '../../axios';
import type { SendNotificationRequest, SendNotificationResponse } from './type';

export const sendCafeNotification = async (
  cafeId: number,
  data: SendNotificationRequest,
): Promise<SendNotificationResponse> => {
  const response = await axiosInstance.post<SendNotificationResponse>(
    `/admin/cafes/${cafeId}/notification`,
    data,
  );
  return response.data;
};
