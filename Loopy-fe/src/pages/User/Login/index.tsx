import CommonInput from "../../../components/Input/CommonInput";
import LoopyIcon from "../../../assets/images/LoopyIcon.svg?react";
import CommonButton from "../../../components/button/CommonButton";
import KakaoLogin from "./_components/KakaoLogin";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <LoopyIcon />
      <div className="w-full pt-[4.375rem]">
        <CommonInput placeholder="이메일 입력" />
        <CommonInput placeholder="비밀번호 입력" />
        <div className="py-[1.5rem]">
          <CommonButton text="로그인"/>
        </div>
        <div className="flex justify-center items-center text-[0.75rem] text-[#7F7F7F]">
          회원가입
        </div>
        <div className="mt-[5.25rem]">
          <KakaoLogin />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;