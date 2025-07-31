import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Storage from "../../utils/storage";
import { usePatchUserActivate } from "../../hooks/mutation/active/useActiveStatus";
import { useFcmToken } from "../../hooks/action/useFcmToken";

const LoginSuccess = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const token = params.get("token");
  const nickname = params.get("nickname");

  const { mutate: activateUser } = usePatchUserActivate();
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

    activateUser(undefined, {
      onSuccess: () => console.log("소셜 계정 활성화 완료"),
      onError: (err) => console.warn("소셜 계정 활성화 실패:", err),
    });

    if (!fcmRequestedRef.current) {
      fcmRequestedRef.current = true;
      (async () => {
        try {
          const fcmToken = await requestFcmToken();
          if (!fcmToken) {
            console.warn("FCM 토큰 발급 실패 또는 사용자 거부");
          }
        } catch (e) {
          console.error("FCM 토큰 요청 중 오류:", e);
        }
      })();
    }

    const isOnboarded = localStorage.getItem("onboarded") === "true";
    const nextRoute = isOnboarded ? "/home" : "/onboard";
    navigate(nextRoute, { replace: true });
  }, [token, nickname, navigate, activateUser, requestFcmToken]);

  return null;
};

export default LoginSuccess;
