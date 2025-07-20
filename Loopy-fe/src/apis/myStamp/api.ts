import axiosInstance from "../axios";
import type { StampBook } from "./type";
import { stampBookListMock } from "./mocks";

export const fetchStampBooks = async (): Promise<StampBook[]> => {
  try {
    const res = await axiosInstance.get("/api/v1/users/me/stampbooks");

    // 응답이 배열이 아니면 목데이터로 대체
    if (!Array.isArray(res.data)) {
      console.warn("응답이 배열이 아님. mock 반환");
      return stampBookListMock;
    }

    return res.data;
  } catch (e) {
    console.error("API 호출 실패, mock 사용:", e);
    return stampBookListMock;
  }
};

export const fetchStampBookDetail = async (stampBookId: number): Promise<StampBook> => {
  try {
    const res = await axiosInstance.get(`/api/v1/stampbooks/${stampBookId}`);
    
    return res.data;
  } catch (e) {
    console.error(`스탬프북 상세 조회 실패 (id: ${stampBookId}):`, e);
    throw e;
  }
};