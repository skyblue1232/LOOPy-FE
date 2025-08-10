import { useMutation } from "@tanstack/react-query";
import { postOwnerCafePhotos } from "../../../../apis/admin/photo/api";
import type { UploadOwnerCafePhotosResult } from "../../../../apis/admin/photo/type";

export const useUploadOwnerCafePhotos = (
  onSuccess?: (data: UploadOwnerCafePhotosResult) => void,
  onError?: (err: unknown) => void
) => {
  return useMutation({
    mutationFn: (files: File[]) => postOwnerCafePhotos(files),
    onSuccess,
    onError,
  });
};
