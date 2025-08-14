import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from '@tanstack/react-query';
import { sendCafeNotification } from '../../../../apis/admin/notification/api';
import type {
  SendNotificationRequest,
  SendNotificationResponse,
} from '../../../../apis/admin/notification/type';

export interface SendNotificationVariables {
  cafeId: number;
  message: string;
}

export const useSendCafeNotification = (
  onSuccess?: (data: SendNotificationResponse) => void,
  onError?: (error: SendNotificationResponse | unknown) => void,
): UseMutationResult<
  SendNotificationResponse,
  unknown,
  SendNotificationVariables,
  unknown
> => {
  const qc = useQueryClient();

  return useMutation<
    SendNotificationResponse,
    unknown,
    SendNotificationVariables
  >({
    mutationFn: ({ cafeId, message }) =>
      sendCafeNotification(cafeId, { message } as SendNotificationRequest),
    onSuccess: (data, vars) => {
      qc.invalidateQueries({
        queryKey: ['notifications', vars.cafeId],
        exact: false,
      });
      onSuccess?.(data);
    },
    onError: (error: unknown) => {
      console.error('[알림 전송 실패]', error);
      onError?.(error);
    },
  });
};
