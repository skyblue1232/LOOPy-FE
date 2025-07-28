import AdminPhoneInput from "./AdminPhoneInput";
import AdminVerifyCodeInput from "./AdminVerifyCodeInput";
import AdminSignupButton from "./AdminSignupButton.tsx";
import { useKeyboardOpen } from "../../../../hooks/useKeyboardOpen";
import { usePhoneVerification } from "../../../../hooks/usePhoneVerification";
import { useSignup } from "../../../../hooks/query/signin/useSignup";
import { mapFormDataToSignupRequest } from "../../../../utils/mapper";
import type { FormData } from "../../../../types/form";
import Logo from "../../../../assets/images/BlueIcon.svg?react";

interface AdminStepPhoneVerifyProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onNext: () => void;
}

const AdminStepPhoneVerify = ({
  formData,
  setFormData,
  onNext,
}: AdminStepPhoneVerifyProps) => {
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

    const signupData = {
      ...mapFormDataToSignupRequest(formData),
      role: "OWNER" as const,
    };

    signup(signupData, {
      onSuccess: (res) => {
        if (res.resultType === "SUCCESS") {
          onNext();
        } else {
          console.log(res.error || "회원가입 실패");
        }
      },
      onError: (err) => {
        console.log(err.message || "네트워크 오류 발생");
      },
    });
  };

  return (
    <div className="relative min-h-screen w-full bg-white font-suit">
      <div className="absolute top-[1.25rem] left-0">
        <Logo className="w-[2rem] h-[2rem]" />
      </div>

      <div className="w-full max-w-[393px] mx-auto pt-[5rem] flex flex-col justify-center font-suit">
        <h1 className="text-[1.5rem] font-bold text-[#252525] mt-[1.5rem] mb-[2.5rem]">회원가입</h1>
        <p className="text-[1rem] font-semibold text-[#252525] mb-[0.5rem]">전화번호</p>
        <div className="flex gap-2">
          <div className="flex-1">
            <AdminPhoneInput phone={formData.phone} onChange={handlePhoneChange} />
          </div>
          <div className="flex">
            <button
              className={`text-[0.875rem] font-semibold px-[1.5rem] py-[1rem] rounded-[9px] ${
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
          <AdminVerifyCodeInput
            value={formData.verifyCode}
            onChange={handleVerifyCodeChange}
            hasError={verifyError}
            onResend={requestCode}
          />
        )}
      </div>

      <div
        className={`absolute left-0 w-full px-[1.5rem] transition-all duration-300 bottom-0`}
      >
        <div className="max-w-[393px] mx-auto w-full">
          <AdminSignupButton
            onClick={handleNext}
            isKeyboardOpen={isKeyboardOpen}
            isValid={isFormValid}
            isPending={isPending}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminStepPhoneVerify;
