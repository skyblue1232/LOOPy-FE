import { useMutation } from "@tanstack/react-query";
import { updateReview } from "../../../../apis/my/review/item/api";
import type { UpdateReviewRequest, UpdateReviewResponse } from "../../../../apis/my/review/item/type";

export const useUpdateReview = () => {
  return useMutation<UpdateReviewResponse, unknown, { reviewId: number; data: UpdateReviewRequest }>({
    mutationFn: ({ reviewId, data }) => updateReview(reviewId, data).then(res => res.data),
  });
};