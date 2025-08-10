import axiosInstance from "../../../../axios";
import type {
  PostOwnerCafeBasicInfoRequest,
  PostOwnerCafeBasicInfoResponse,
} from "../type";

export async function postOwnerCafeBasicInfo(
  payload: PostOwnerCafeBasicInfoRequest
): Promise<PostOwnerCafeBasicInfoResponse> {
  await axiosInstance.post("/api/v1/owner/cafes/basic-info", payload);
}
