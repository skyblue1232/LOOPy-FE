import { useLogin } from "../mutation/login/useLogin";
import { usePatchUserActivate } from "../mutation/active/useActiveStatus";
import { useNavigate } from "react-router-dom";
import type { LoginRequest } from "../../apis/auth/login/type";

export const useHandleLogin = () => {
  const navigate = useNavigate();
  const { mutate: loginMutate } = useLogin();
  const { mutate: activateUser } = usePatchUserActivate(); 

  const handleLogin = (data: LoginRequest) => {
    loginMutate(data, {
      onSuccess: (res) => {
        const { token, user, message } = res;

        if (message === "로그인 성공" && token && user) {
          console.log("로그인 성공:", user);

          localStorage.setItem("accessToken", token);
          activateUser(undefined, {
            onSuccess: () => {
              console.log("계정 활성화 완료");
            },
            onError: (err) => {
              console.warn("계정 활성화 실패:", err);
            },
          });

          const isOnboarded = localStorage.getItem(`onboarded_user_${user.id}`) === "true";

          if (isOnboarded) {
            navigate("/home", { replace: true });
          } else {
            navigate("/onboard", { replace: true });
          }
        } else {
          console.warn("로그인 응답 조건 불일치:", res.user);
        }
      },

      onError: (err) => {
        console.error("로그인 요청 실패:", err.message);
      },
    });
  };

  return handleLogin;
};
