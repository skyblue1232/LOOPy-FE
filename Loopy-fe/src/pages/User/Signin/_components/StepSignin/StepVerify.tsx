import CommonInput from "../../../../../components/input/CommonInput";
import CommonButton from "../../../../../components/button/CommonButton";
import { useKeyboardOpen } from "../../../../../hooks/useKeyboardOpen";
import { usePhoneVerification } from "../../../../../hooks/usePhoneVerification";
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

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    const trimmed = raw.slice(0, 11);
    let formatted = trimmed;

    if (trimmed.length >= 7) {
      formatted = `${trimmed.slice(0, 3)}-${trimmed.slice(3, 7)}-${trimmed.slice(7)}`;
    } else if (trimmed.length >= 4) {
      formatted = `${trimmed.slice(0, 3)}-${trimmed.slice(3)}`;
    }

    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handleVerifyCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVerifyError(false);
    setFormData(prev => ({ ...prev, verifyCode: e.target.value }));
  };

  const handleNext = () => {
    if (!isFormValid) return;
    if (!validateCode()) return;
    onNext();
  };

  return (
    <div className="pt-[1.5rem]">
      <p className="text-[1rem] font-semibold text-[#252525] mb-[0.5rem]">전화번호</p>
      <div className="flex gap-2">
        <div className="flex-1 w-full">
          <CommonInput
            placeholder="전화번호 입력를 입력해주세요"
            value={formData.phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div className="py-[0.25rem]">
          <button
            className={`text-[0.875rem] w-full font-semibold px-[1.5rem] py-[1rem] rounded-[9px] ${
              isPhoneValid ? "bg-[#6970F3] text-white" : "bg-[#DFDFDF] text-[#7F7F7F] pointer-events-none"
            }`}
            onClick={requestCode}
          >
            인증번호 받기
          </button>
        </div>
      </div>

      {isRequested && (
        <>
          <div className="flex justify-between items-center mt-[1rem] mb-[0.5rem]">
            <p className="text-[1rem] font-semibold text-[#252525]">인증번호</p>
            <button
              className="text-[0.75rem] font-medium text-[#252525] underline"
              onClick={() => {
                console.log("인증번호 재요청");
              }}
            >
              인증번호 재요청
            </button>
          </div>

          <CommonInput
            placeholder="인증번호를 입력해주세요"
            value={formData.verifyCode}
            onChange={handleVerifyCodeChange}
            hasError={verifyError}
          />
          {verifyError && (
            <p className="text-[0.75rem] font-[normal] text-[#FF0000] mt-[0.625]">인증번호가 일치하지 않습니다</p>
          )}
        </>
      )}

      <div
        className={`absolute left-0 w-full px-[1.5rem] transition-all duration-300 ${
          isKeyboardOpen ? "bottom-[4rem]" : "bottom-[2rem]"
        }`}
      >
        <CommonButton
          text="회원가입하기"
          onClick={handleNext}
          className={`w-full ${
            isFormValid ? "bg-[#6970F3] text-white" : "bg-[#CCCCCC] text-[#7F7F7F] pointer-events-none"
          }`}
          disabled={!isFormValid}
        />
      </div>
    </div>
  );
};

export default StepPhoneVerify;
