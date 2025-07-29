import CommonButton from "../../../../components/button/CommonButton";
import { useSignup } from "../../../../hooks/query/signin/useSignup";
import { mapFormDataToSignupRequest } from "../../../../utils/mapper";
import type { FormData } from "../../../../types/form";

interface AdminSignupButtonProps {
  formData: FormData;
  isKeyboardOpen: boolean;
  isValid: boolean;
  validateCode: () => boolean;
  onNext: () => void;
}

const AdminSignupButton = ({
  formData,
  isKeyboardOpen,
  isValid,
  validateCode,
  onNext,
}: AdminSignupButtonProps) => {
  const { mutate: signup, isPending } = useSignup();

  const handleClick = () => {
    if (!isValid || !validateCode() || isPending) return;

    const signupData = {
      ...mapFormDataToSignupRequest(formData),
      role: "OWNER" as const,
    };

    signup(signupData, {
      onSuccess: (res) => {
        if (res && res.token && res.user) {
          console.log("회원가입 성공:", res.user);
          onNext();
        } else {
          console.log("회원가입 실패: 응답 이상");
        }
      },
      onError: (err) => {
        console.error("네트워크 오류:", err.message);
      },
    });
  };

  return (
    <div
      className={`absolute left-1/2 transform -translate-x-1/2 w-full max-w-[393px] transition-all duration-300 ${
        isKeyboardOpen ? "bottom-[4rem]" : "bottom-[2rem]"
      }`}
    >
      <CommonButton
        text="회원가입하기"
        onClick={handleClick}
        className={`w-full ${
          isValid
            ? "bg-[#6970F3] text-white"
            : "bg-[#CCCCCC] text-[#7F7F7F] pointer-events-none"
        }`}
        disabled={!isValid || isPending}
      />
    </div>
  );
};

export default AdminSignupButton;
