import { useNavigate } from "react-router-dom";
import KakaoLogin from "./KakaoLogin";

const SocialLoginSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-[3rem]">
      <div className="flex items-center w-full">
        <div className="flex-grow h-px bg-[#DFDFDF] mr-[0.75rem]" />
        <span className="text-[#DFDFDF] font-medium text-[0.75rem] whitespace-nowrap">SNS로 로그인하기</span>
        <div className="flex-grow h-px bg-[#DFDFDF] ml-[0.75rem]" />
      </div>

      <div className="my-[1rem] w-full">
        <KakaoLogin
          onClick={() => {
            console.log("카카오 로그인 완료");
            navigate("/onboard");
          }}
        />
      </div>

      <div className="flex justify-center items-center text-[0.75rem] font-medium gap-[1rem]">
        <span className="text-[#7F7F7F]">카페 사장님이시라면?</span>
        <button
          onClick={() => navigate("/admin")}
          className="text-[#252525] underline"
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default SocialLoginSection;
