import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Storage from "../../utils/storage";

const LoginSuccess = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const token = params.get("token");
  const nickname = params.get("nickname");

  useEffect(() => {
    if (token) {
      Storage.setAccessToken(token);
      navigate("/onboard");
    } else {
      console.error("소셜 로그인 실패");
      navigate("/");
    }
  }, [token, nickname, navigate]);

  return null;
};

export default LoginSuccess;
