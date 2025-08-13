export interface ServerReview {
  reviewId: number;
  userId: number;
  cafeId: number;
  cafeName: string;
  title?: string;
  content: string;
  images: string[];
  createdAt: string;
}

export interface ReviewListSuccess {
  message: string;
  data: ServerReview[];
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
}

export interface ReviewListResponse {
  resultType: "SUCCESS" | "FAIL";
  error: string | null;
  success?: ReviewListSuccess;
}
