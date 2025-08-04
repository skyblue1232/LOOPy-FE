import { useQuery } from "@tanstack/react-query";
import { fetchExpiringStampBooks } from "../../../apis/myStamp/api";
import type { ExpiringStampBookResponse } from "../../../apis/myStamp/type";

export const useExpiringStampBooks = () => {
  return useQuery<ExpiringStampBookResponse[]>({
    queryKey: ["expiring-stampbooks"],
    queryFn: fetchExpiringStampBooks,
    select: (data) => data.filter((book) => book.status === "ACTIVE"),
    retry: 1,
    staleTime: 1000 * 60 * 5, 
  });
};
