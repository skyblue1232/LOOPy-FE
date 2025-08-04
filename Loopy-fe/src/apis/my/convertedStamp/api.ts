import axiosInstance from "../../axios";
import type { ConvertedStampBook } from "./type";
import { mockConvertedStampBookResponse } from "./mock";

export const getConvertedStampbooks = async (): Promise<ConvertedStampBook[]> => {
  try {
    const res = await axiosInstance.get("/api/v1/users/me/stampbooks/converted");

    if (res.data?.data && Array.isArray(res.data.data)) {
      return res.data.data;
    }

    return [];
  } catch (error) {
    console.warn("환전된 스탬프북 API 실패, mock 데이터 반환:", error);
    return mockConvertedStampBookResponse.data;
  }
};
