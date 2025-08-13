import { useMutation } from '@tanstack/react-query';
import type {
  VerifyQRRequest,
  VerifyQRResponse,
} from '../../../../apis/admin/home/QRsearch/type';
import { verifyQRToken } from '../../../../apis/admin/home/QRsearch/api';

interface UseVerifyQRTokenOptions {
  onSuccess?: (data: VerifyQRResponse) => void;
  onError?: (error: unknown) => void;
}
const useVerifyQRToken = (options?: UseVerifyQRTokenOptions) => {
  return useMutation<VerifyQRResponse, unknown, VerifyQRRequest>({
    mutationFn: (data) => verifyQRToken(data),
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });
};

export default useVerifyQRToken;
