import axiosInstance from "../../axios";
import type {
  UploadOwnerCafePhotosServerResponse,
  UploadOwnerCafePhotosResult,
} from "./type";

export const postOwnerCafePhotos = async (files: File[]): Promise<UploadOwnerCafePhotosResult> => {
  const fd = new FormData();
  files.forEach((f) => fd.append("photos", f)); 

  const { data } = await axiosInstance.post<UploadOwnerCafePhotosServerResponse>(
    "/api/v1/owner/cafes/photos",
    fd,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
      validateStatus: (s) => s >= 200 && s < 300,
    }
  );

  const urls =
    Array.isArray(data) ? data :
    (data && typeof data === "object" && Array.isArray((data as any).urls)) ? (data as any).urls :
    [];

  return { urls };
};
