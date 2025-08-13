export interface UseAllPointsResponse {
  status: string;
  code: number;
  message: string;
  data: {
    before: number;
    usedAmount: number;
    remaining: number;
  };
}
