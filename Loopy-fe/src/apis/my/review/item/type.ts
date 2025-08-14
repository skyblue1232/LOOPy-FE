export interface UpdateReviewRequest {
  title: string;
  content: string;
}

export interface UpdateReviewResponse {
  message: string;
  review: {
    id: number;
    title: string;
    content: string;
    userId: number;
    images: string[];
  };
}

export interface DeleteReviewResponse {
  message: string;
}
