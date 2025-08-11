import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOwnerCafePhotoById } from "../../../../apis/admin/photo/delete/api";
import type { DeleteOwnerCafePhotoResponse } from "../../../../apis/admin/photo/delete/type";

export const OWNER_CAFE_DETAIL_KEY = ["ownerCafe", "myCafe"];

export const useDeleteOwnerCafePhotoById = (
  onSuccess?: (data: DeleteOwnerCafePhotoResponse) => void,
  onError?: (err: unknown) => void
) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (photoId: number) => deleteOwnerCafePhotoById(photoId),
    onSuccess: async (data) => {
      await qc.invalidateQueries({ queryKey: OWNER_CAFE_DETAIL_KEY });
      onSuccess?.(data);
    },
    onError,
  });
};
