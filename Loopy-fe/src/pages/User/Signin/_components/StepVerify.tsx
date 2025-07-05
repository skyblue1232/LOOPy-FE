import { useEffect, useState } from "react";
import CommonInput from "../../../../components/input/CommonInput";
import CommonButton from "../../../../components/button/CommonButton";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  phone: string;
  verifyCode: string;
}

interface StepPhoneVerifyProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onNext: () => void;
}

const StepPhoneVerify = ({ formData, setFormData, onNext }: StepPhoneVerifyProps) => {
  const phoneRegex = /^01[016789]-\d{3,4}-\d{4}$/;
  const codeRegex = /^\d{4,6}$/;

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [isRequested, setIsRequested] = useState(false);
  const [verifyError, setVerifyError] = useState(false);

  const isPhoneValid = phoneRegex.test(formData.phone.trim());
  const isCodeValid = codeRegex.test(formData.verifyCode.trim()) && !verifyError;
  const isFormValid = isPhoneValid && isCodeValid;

  useEffect(() => {
    const onResize = () => {
      const viewportHeight = window.visualViewport?.height || window.innerHeight;
      const windowHeight = window.innerHeight;
      setIsKeyboardOpen(viewportHeight < windowHeight - 100);
    };

    window.visualViewport?.addEventListener("resize", onResize);
    return () => {
      window.visualViewport?.removeEventListener("resize", onResize);
    };
  }, []);

  const requestCode = () => {
    if (!isPhoneValid) return;
    setIsRequested(true);
    console.log("📨 인증번호 전송 요청됨");
  };

  const handleNext = () => {
    if (!isFormValid) return;

    if (formData.verifyCode !== "123456") {
      setVerifyError(true);
      return;
    }

    setVerifyError(false);
    onNext();
  };

  return (
    <div className="pt-[1.5rem]">
      <p className="text-[1rem] font-medium text-[#323232] mb-[0.5rem]">전화번호</p>
      <div className="flex gap-2">
        <div className="flex-1 w-full">
          <CommonInput
            placeholder="전화번호 입력를 입력해주세요"
            value={formData.phone}
            onChange={e => {
              const raw = e.target.value.replace(/\D/g, ""); 
              const trimmed = raw.slice(0, 11); 

              let formatted = trimmed;
              if (trimmed.length >= 7) {
                formatted = `${trimmed.slice(0, 3)}-${trimmed.slice(3, 7)}-${trimmed.slice(7)}`;
              } else if (trimmed.length >= 4) {
                formatted = `${trimmed.slice(0, 3)}-${trimmed.slice(3)}`;
              }

              setFormData(prev => ({
                ...prev,
                phone: formatted,
              }));
            }}
            hasError={false}
          />
        </div>
        <div className="py-[0.25rem]">
        <button
          className={`text-[0.875rem] w-full font-semibold px-[1.5rem] py-[1rem] rounded-[9px] ${
            isPhoneValid ? "bg-[#6970F3] text-white" : "bg-[#D9D9D9] text-[#A8A8A8] pointer-events-none"
          }`}
          onClick={requestCode}
        >
          인증번호 받기
        </button>
        </div>
      </div>

      {isRequested && (
        <>
          <p className="text-[1rem] font-medium text-[#323232] mt-[1rem] mb-[0.5rem]">인증번호</p>
          <CommonInput
            placeholder="인증번호 입력"
            value={formData.verifyCode}
            onChange={e => {
              setVerifyError(false);
              setFormData(prev => ({
                ...prev,
                verifyCode: e.target.value,
              }));
            }}
            hasError={verifyError}
          />
          {verifyError && (
            <p className="text-[0.75rem] text-[#FF0000] mt-1 ml-1">인증번호가 일치하지 않습니다</p>
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
