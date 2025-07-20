import { useQuery } from "@tanstack/react-query";
import { fetchStampBookDetail, fetchStampBooks } from "../../apis/myStamp/api";

export const useMyStampBooks = () => {
  return useQuery({
    queryKey: ["stampbooks"],
    queryFn: fetchStampBooks,
  });
};

export const useStampBookDetail = (stampBookId: number) => {
  return useQuery({
    queryKey: ["stampbook", stampBookId],
    queryFn: () => fetchStampBookDetail(stampBookId),
    enabled: !!stampBookId, 
  });
};
