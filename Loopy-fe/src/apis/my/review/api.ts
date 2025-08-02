import axiosInstance from "../../axios";
import type { ReviewListResponse } from "./type";

interface FetchMyReviewsParams {
  page?: number;
  limit?: number;
}

export const fetchMyReviews = async ({
  page = 1,
  limit = 10,
}: FetchMyReviewsParams): Promise<ReviewListResponse> => {
  const res = await axiosInstance.get("/api/v1/users/me/reviews", {
    params: { page, limit },
  });
  return res.data;
};
