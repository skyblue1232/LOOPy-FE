import axiosInstance from '../../axios';
import type { StampBookDetail } from './type';

export const fetchStampBookDetail = async (
  stampBookId: number,
): Promise<StampBookDetail> => {
  try {
    const res = await axiosInstance.get<StampBookDetail>(
      `/api/v1/users/me/stampbooks/${stampBookId}`,
    );
    return res.data;
  } catch (error) {
    console.error(`API 호출 실패 (stampBookId=${stampBookId}):`, error);
    throw error;
  }
};
