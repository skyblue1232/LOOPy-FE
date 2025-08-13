import axiosInstance from "../../axios";
import type { ReviewListResponse, ReviewListSuccess } from "./type";

export interface FetchMyReviewsParams {
  page?: number;
  limit?: number;
}

export const fetchMyReviews = async ({
  page = 1,
  limit = 10,
}: FetchMyReviewsParams): Promise<ReviewListSuccess> => {
  try {
    const res = await axiosInstance.get<ReviewListResponse>(
      "/api/v1/users/me/reviews",
      { params: { page, limit } }
    );
    
    if (res.data.resultType === "SUCCESS" && res.data.success) {
      return res.data.success;
    }

    throw new Error(res.data.error ?? "리뷰 조회 실패");
  } catch {
    return {
      message: "목데이터",
      data: [
        {
          reviewId: 1,
          userId: 99,
          cafeId: 101,
          cafeName: "더미 카페",
          title: "목데이터 리뷰 제목",
          content: "서버 오류로 불러온 목데이터입니다.",
          images: [],
          createdAt: "2025-08-13T08:00:00.000Z",
        },
      ],
      pagination: { page, limit, total: 1 },
    };
  }
};
