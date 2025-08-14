import { useMutation } from '@tanstack/react-query';
import { toggleCafeNotification } from '../../../apis/notification/api';

export const useToggleNotification = () => {
  return useMutation({
    mutationFn: toggleCafeNotification,
    onError: (error) => {
      console.error('알림 설정/해제 실패', error);
    },
  });
};