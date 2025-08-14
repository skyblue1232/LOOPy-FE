import { useMutation } from "@tanstack/react-query";
import { deleteReview } from "../../../../apis/my/review/item/api";
import type { DeleteReviewResponse } from "../../../../apis/my/review/item/type";

export const useDeleteReview = () => {
  return useMutation<DeleteReviewResponse, unknown, number>({
    mutationFn: (reviewId) => deleteReview(reviewId).then(res => res.data),
  });
};
