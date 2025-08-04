import type { ConvertedStampBookResponse } from "./type";

export const mockConvertedStampBookResponse: ConvertedStampBookResponse = {
  status: "SUCCESS",
  code: 200,
  message: "스탬프 히스토리 조회 성공",
  data: Array.from({ length: 10 }, (_, i) => ({
    stampBookId: i + 1,
    cafeName: `카페 ${i + 1}`,
    address: `서울특별시 강남구 어딘가 ${100 + i}`,
    round: (i % 5) + 1,
    convertedAt: new Date(Date.now() - i * 86400000).toISOString(),
  })),
};
