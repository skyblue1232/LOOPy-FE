import { useLogin } from "../query/login/useLogin";
import { useNavigate } from "react-router-dom";
import type { LoginRequest } from "../../apis/login/type";

export const useHandleLogin = () => {
  const navigate = useNavigate();
  const { mutate: loginMutate } = useLogin();

  const handleLogin = (data: LoginRequest) => {
    loginMutate(data, {
      onSuccess: (res) => {
        if (res.resultType === "SUCCESS") {
          const { user } = res.success!;
          console.log("로그인 성공:", user);
          const isOnboarded = localStorage.getItem(`onboarded_user_${user.id}`) === "true";

          if (isOnboarded) {
            navigate("/home");
          } else {
            navigate("/onboard"); 
          }
        } else {
          console.log("로그인 실패:", res.error);
        }
      },
      onError: (err) => {
        console.error("로그인 요청 오류:", err);
      },
    });
  };

  return handleLogin;
};
