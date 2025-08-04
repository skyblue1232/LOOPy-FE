import { useMutation } from "@tanstack/react-query";
import { postExpiringStampBook } from "../../../../apis/my/expiredStamp/api";

export const usePostExpiringStampBook = () => {
  return useMutation({
    mutationFn: (id: number) => postExpiringStampBook(id),
  });
};
