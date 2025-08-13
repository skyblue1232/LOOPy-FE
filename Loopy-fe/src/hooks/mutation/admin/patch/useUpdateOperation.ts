import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { updateOwnerCafeOperation } from "../../../../apis/admin/register/operation/api";
import type { 
  UpdateOwnerCafeOperationPayload, 
  UpdateOwnerCafeOperationResponse 
} from "../../../../apis/admin/register/operation/type";

export function useUpdateOwnerCafeOperation(
  options?: UseMutationOptions<
    UpdateOwnerCafeOperationResponse, 
    Error, 
    UpdateOwnerCafeOperationPayload
  >
) {
  return useMutation<
    UpdateOwnerCafeOperationResponse,
    Error,
    UpdateOwnerCafeOperationPayload
  >({
    mutationFn: updateOwnerCafeOperation,
    ...options,
  });
}
