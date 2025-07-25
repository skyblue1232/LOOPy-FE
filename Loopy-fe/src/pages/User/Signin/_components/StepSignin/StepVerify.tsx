import PhoneInput from "../verify/PhoneInput";
import VerifyCodeInput from "../verify/VeryfyCodeInput";
import SignupButton from "../verify/SignupButton";
import { useKeyboardOpen } from "../../../../../hooks/useKeyboardOpen";
import { usePhoneVerification } from "../../../../../hooks/usePhoneVerification";
import { useSignup } from "../../../../../hooks/query/signin/useSignup";
import { mapFormDataToSignupRequest } from "../../../../../utils/mapper";
import type { FormData } from "../../../../../types/form";

interface StepPhoneVerifyProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onNext: () => void;
}

const StepPhoneVerify = ({ formData, setFormData, onNext }: StepPhoneVerifyProps) => {
  const isKeyboardOpen = useKeyboardOpen();
  const {
    isRequested,
    verifyError,
    isPhoneValid,
    isFormValid,
    requestCode,
    validateCode,
    setVerifyError,
  } = usePhoneVerification(formData.phone, formData.verifyCode);
  const { mutate: signup, isPending } = useSignup();

  const handlePhoneChange = (phone: string) =>
    setFormData((prev) => ({ ...prev, phone }));
  const handleVerifyCodeChange = (code: string) => {
    setVerifyError(false);
    setFormData((prev) => ({ ...prev, verifyCode: code }));
  };

  const handleNext = () => {
    if (!isFormValid || !validateCode()) return;
    const signupData = mapFormDataToSignupRequest(formData);
    signup(signupData, {
      onSuccess: (res) => {
        if (res.resultType === "SUCCESS") {
          onNext();
        } else {
          console.log(res.error || "회원가입 실패");
        }
      },
      onError: (res) => console.log(res.message || "네트워크 오류 발생"),
    });
  };

  return (
    <div className="pt-[1.5rem]">
      <p className="text-[1rem] font-semibold text-[#252525] mb-[0.5rem]">전화번호</p>
      <div className="flex gap-2">
        <div className="flex-1 w-full">
          <PhoneInput phone={formData.phone} onChange={handlePhoneChange} />
        </div>
        <div className="py-[0.25rem]">
          <button
            className={`text-[0.875rem] w-full font-semibold px-[1.5rem] py-[1rem] rounded-[9px] ${
              isPhoneValid
                ? "bg-[#6970F3] text-white"
                : "bg-[#DFDFDF] text-[#7F7F7F] pointer-events-none"
            }`}
            onClick={requestCode}
          >
            인증번호 받기
          </button>
        </div>
      </div>

      {isRequested && (
        <VerifyCodeInput
          value={formData.verifyCode}
          onChange={handleVerifyCodeChange}
          hasError={verifyError}
          onResend={requestCode}
        />
      )}

      <SignupButton
        onClick={handleNext}
        isKeyboardOpen={isKeyboardOpen}
        isValid={isFormValid}
        isPending={isPending}
      />
    </div>
  );
};

export default StepPhoneVerify;
