export interface DeleteOwnerCafePhotoSuccess {
  message: string; 
  photoId: number;
}

export interface DeleteOwnerCafePhotoResponse {
  resultType: "SUCCESS" | "ERROR" | string;
  error: null | { code?: string; message?: string };
  success: DeleteOwnerCafePhotoSuccess | null;
}
