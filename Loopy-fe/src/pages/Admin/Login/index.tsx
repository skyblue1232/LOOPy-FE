import { useState } from "react";
import CommonButton from "../../../components/button/CommonButton";
import Logo from "../../../assets/images/BlueIcon.svg?react";
import LogoText from "../../../assets/images/BlueLogoText.svg?react";
import KeyInput from "../../../components/input/KeyInput";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center relative font-suit">
      <div className="absolute top-[1.25rem] left-0">
        <Logo className="w-[2rem] h-[2rem]" />
      </div>

      <div className="w-full max-w-[393px] flex flex-col items-center justify-center">
        <div className="mb-[3rem] flex flex-col items-center gap-[0.875rem]">
          <Logo className="w-[4.625rem] h-[4.625rem]" />
          <LogoText/>
        </div>

        <div className="w-full flex flex-col gap-[0.5rem] mb-[1.5rem]">
          <KeyInput
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <KeyInput
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col gap-[0.5rem]">
          <CommonButton text="로그인" />
          <CommonButton
            text="회원가입"
            autoStyle={false}
            className="text-[#6970F3] bg-[#F0F1FE]"
            onClick={() => navigate("/admin/signin")}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
