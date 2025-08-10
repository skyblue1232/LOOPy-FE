import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postOwnerCafeBasicInfo } from "../../../../apis/admin/setting/basic/post/api";
import type {
  PostOwnerCafeBasicInfoRequest,
  PostOwnerCafeBasicInfoResponse,
} from "../../../../apis/admin/setting/basic/type";

export function usePostOwnerCafeBasicInfo() {
  const qc = useQueryClient();

  return useMutation<PostOwnerCafeBasicInfoResponse, unknown, PostOwnerCafeBasicInfoRequest>({
    mutationFn: postOwnerCafeBasicInfo,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["owner", "cafe", "basic"] });
    },
  });
}
