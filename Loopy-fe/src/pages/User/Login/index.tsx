import CommonInput from "../../../components/input/CommonInput";
import CommonButton from "../../../components/button/CommonButton";
import KakaoLogin from "./_components/KakaoLogin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoopyIconSection from "./_components/LoopyIconSection";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    navigate("/signin");
  };

  const handleLogin = () => {
    console.log("로그인 시도", email, password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden">
      <LoopyIconSection />
      <div className="w-full mt-[8rem]">
        <CommonInput
          placeholder="이메일 입력"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CommonInput
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <div className="my-[1.5rem]">
          <CommonButton text="로그인" onClick={handleLogin} />
        </div>
        <div
          className="flex justify-center items-center text-[0.75rem] text-[#7F7F7F] cursor-pointer"
          onClick={handleSignup}
        >
          회원가입
        </div>
        <div className="mt-[5.25rem]">
          <KakaoLogin />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
