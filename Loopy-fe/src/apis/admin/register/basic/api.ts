import axiosInstance from '../../../axios';
import type {
  PostOwnerCafeBasicInfoRequest,
  PostOwnerCafeBasicInfoResponse,
} from '../../setting/basic/type';

export const postOwnerCafeBasicInfo = async (
  payload: PostOwnerCafeBasicInfoRequest
): Promise<PostOwnerCafeBasicInfoResponse> => {
  const { data } = await axiosInstance.post<PostOwnerCafeBasicInfoResponse>(
    '/api/v1/owner/cafes/basic-info',
    payload
  );
  return data; 
};
