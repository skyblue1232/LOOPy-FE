import axiosInstance from "../../../axios";
import type { 
  UpdateOwnerCafeOperationPayload, 
  UpdateOwnerCafeOperationResponse 
} from "./type";

export async function updateOwnerCafeOperation(
  payload: UpdateOwnerCafeOperationPayload
): Promise<UpdateOwnerCafeOperationResponse> {
  const res = await axiosInstance.patch<UpdateOwnerCafeOperationResponse>(
    "/api/v1/owner/cafes/operation",
    payload
  );
  return res.data;
}
