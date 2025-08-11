export interface ConvertedStampBook {
  stampBookId: number;
  cafeName: string;
  address: string;
  round: number;
  convertedAt: string;
}

export interface ConvertedStampBookResponse {
  status: "SUCCESS" | "FAIL";
  code: number;
  message: string;
  data: ConvertedStampBook[];
}
