import axiosInstance from "../../../axios";
import type {
  UpdateReviewRequest,
  UpdateReviewResponse,
  DeleteReviewResponse,
} from "./type";

export const updateReview = (reviewId: number, data: UpdateReviewRequest) => {
  return axiosInstance.patch<UpdateReviewResponse>(
    `/api/v1/reviews/${reviewId}`,
    data
  );
};

export const deleteReview = (reviewId: number) => {
  return axiosInstance.delete<DeleteReviewResponse>(
    `/api/v1/reviews/${reviewId}`
  );
};
