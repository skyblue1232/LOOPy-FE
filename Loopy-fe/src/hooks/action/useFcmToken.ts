import { useRef, useState } from "react";
import { requestFcmToken } from "./usePatchToken";
import { usePatchFcmToken } from "../mutation/fcm/usePatchFcmToken";

export const useFcmToken = () => {
  const [fcmToken, setFcmToken] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const isRequestedRef = useRef(false);

  const { mutate: patchFcmTokenMutate } = usePatchFcmToken();

  const wrappedRequest = async (): Promise<string | null> => {
    if (isRequestedRef.current) return null;
    isRequestedRef.current = true;

    try {
      const token = await requestFcmToken();
      if (token) {
        setFcmToken(token);
        patchFcmTokenMutate({ fcmToken: token });
        return token;
      }
      return null;
    } catch (err: any) {
      setError(err);
      return null;
    }
  };

  return { fcmToken, requestFcmToken: wrappedRequest, error };
};
