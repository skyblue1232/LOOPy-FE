import axiosInstance from "../../../axios";
import type { DeleteOwnerCafePhotoResponse } from "./type";

export const deleteOwnerCafePhotoById = async (
  photoId: number
): Promise<DeleteOwnerCafePhotoResponse> => {
  const { data } = await axiosInstance.delete<DeleteOwnerCafePhotoResponse>(
    `/api/v1/owner/cafes/photos/${photoId}`,
    { headers: { Accept: "application/json" } }
  );
  return data;
};
