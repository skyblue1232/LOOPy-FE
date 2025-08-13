import axiosInstance from '../../../../axios';
import type { AddStampResponse } from './type';

interface AddStampParams {
  userId: number;
  actionToken: string;
}

export async function addStampToUser({
  userId,
  actionToken,
}: AddStampParams): Promise<AddStampResponse> {
  const url = `/api/v1/owner/users/${userId}/stamps`;
  const headers = {
    'x-action-token': actionToken,
  };

  try {
    const response = await axiosInstance.post<AddStampResponse>(url, null, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
