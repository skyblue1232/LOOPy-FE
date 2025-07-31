import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Storage from "../../utils/storage";
import { useFcmToken } from "../../hooks/action/useFcmToken";

const LoginSuccess = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const token = params.get("token");
  const nickname = params.get("nickname");

  const { requestFcmToken } = useFcmToken();
  const fcmRequestedRef = useRef(false);

  useEffect(() => {
    if (!token || !nickname) {
      console.error("소셜 로그인 실패: 토큰 또는 닉네임 없음");
      navigate("/");
      return;
    }

    Storage.setAccessToken(token);
    Storage.setNickname(nickname);

    if (!fcmRequestedRef.current) {
      fcmRequestedRef.current = true;
      (async () => {
        try {
          const fcmToken = await requestFcmToken();
          if (!fcmToken) {
            console.warn("FCM 토큰 발급 실패 또는 거부됨");
          }
        } catch (e) {
          console.error("FCM 토큰 요청 중 에러:", e);
        }
      })();
    }

    navigate("/home", { replace: true });
  }, [token, nickname, navigate, requestFcmToken]);

  return null;
};

export default LoginSuccess;
