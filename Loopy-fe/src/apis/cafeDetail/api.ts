import axiosInstance from '../axios';
import type { CafeDetailResponse, CafeDetailSuccess } from './type';
import { cafeDetailMock } from '../../mock/cafeDetailMock';

export const getCafeDetail = async (cafeId: string): Promise<CafeDetailSuccess> => {
  try {
    const res = await axiosInstance.get<CafeDetailResponse>(
      `/api/v1/cafe/${cafeId}`
    );
    return res.data.success;
  } catch (error) {
    console.warn('API 실패, mock 데이터 사용:', error);
    return cafeDetailMock;
  }
};
