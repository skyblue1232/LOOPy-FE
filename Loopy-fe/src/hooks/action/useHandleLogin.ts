import { useLogin } from "../query/login/useLogin";
import { useNavigate } from "react-router-dom";
import type { LoginRequest } from "../../apis/login/type";

export const useHandleLogin = () => {
  const navigate = useNavigate();
  const { mutate: loginMutate } = useLogin();

  const handleLogin = (data: LoginRequest) => {
    loginMutate(data, {
      onSuccess: (res) => {
        const { token, user, message } = res;

        if (message === "로그인 성공" && token && user) {
          console.log("로그인 성공:", user);

          localStorage.setItem("accessToken", token);
          const isOnboarded = localStorage.getItem(`onboarded_user_${user.id}`) === "true";

          if (isOnboarded) {
            navigate("/home", { replace: true });
          } else {
            navigate("/onboard", { replace: true });
          }
        } else {
          console.warn("로그인 응답은 왔으나 조건 불일치:", res);
        }
      },

      onError: (err) => {
        console.error("로그인 요청 실패:", err.message);
      },
    });
  };

  return handleLogin;
};
