import axiosInstance from '../../../axios';
import type { StampStatsResponse } from './type';

export const getOwnerStampStats = async (): Promise<StampStatsResponse> => {
  const res = await axiosInstance.get<StampStatsResponse>(
    '/api/v1/owner/dashboard/stamp-stats',
  );
  return res.data;
};
