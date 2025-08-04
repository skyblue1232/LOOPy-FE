import { useQuery } from "@tanstack/react-query";
import { getConvertedStampbooks } from "../../../apis/my/convertedStamp/api";
import type { ConvertedStampBook } from "../../../apis/my/convertedStamp/type";

export const useConvertedStampbooks = () => {
  return useQuery<ConvertedStampBook[]>({
    queryKey: ["converted-stampbooks"],
    queryFn: getConvertedStampbooks,
  });
};
