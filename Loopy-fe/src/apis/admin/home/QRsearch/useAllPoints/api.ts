import axiosInstance from '../../../../axios';
import type { UseAllPointsResponse } from './type';

export const useAllPoints = async (userId: number) => {
  const { data } = await axiosInstance.post<UseAllPointsResponse>(
    `/api/v1/owner/users/${userId}/points/use`,
  );
  return data;
};
