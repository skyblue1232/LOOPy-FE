import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CommonInput from "../../../components/input/CommonInput";
import CommonButton from "../../../components/button/CommonButton";
import LoopyIconSection from "./_components/LoopyIconSection";
import Eye from "../../../assets/images/Eye.svg?react";
import EyeOff from "../../../assets/images/EyeOff.svg?react";
import SocialLoginSection from "./_components/SocialLoginSection";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {
    navigate("/signin");
  };

  const handleLogin = () => {
    console.log("로그인 시도", email, password);
    const isLoginSuccessful = email && password;
    if (isLoginSuccessful) {
      navigate("/onboard");
    } else {
      alert("이메일 또는 비밀번호를 확인해주세요.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <LoopyIconSection />

      <div className="w-full pt-[24.5rem]">
        <CommonInput
          placeholder="이메일 입력"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative w-full">
          <CommonInput
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-1/2 right-4 -translate-y-1/2"
          >
            {showPassword ? (
              <Eye className="w-5 h-5 text-[#7F7F7F]" />
            ) : (
              <EyeOff className="w-5 h-5 text-[#7F7F7F]" />
            )}
          </button>
        </div>

        <div className="mt-[1.5rem] mb-[0.5rem]">
          <CommonButton text="로그인" onClick={handleLogin} />
        </div>

        <CommonButton
          text="회원가입"
          onClick={handleSignup}
          autoStyle={false}
          className="bg-[#F0F1FE] text-[#6970F3]"
        />

        <SocialLoginSection />
      </div>
    </div>
  );
};

export default LoginPage;