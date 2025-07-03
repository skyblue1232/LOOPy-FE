import { useEffect, useState } from "react";
import CommonInput from "../../../../components/input/CommonInput";
import CommonButton from "../../../../components/button/CommonButton";

interface FormData {
  email: string;
  password: string;
  nickname: string;
  phone: string;
  verifyCode: string;
}

interface StepVerifyProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onNext: () => void;
}

const StepVerify = ({ formData, setFormData, onNext }: StepVerifyProps) => {
  const isValid = formData.verifyCode.trim().length >= 4;

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

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

  const handleNext = () => {
    if (!isValid) return;
    onNext();
  };

  return (
    <div className="pt-[1.5rem]">
      <p className="text-[1rem] text-[#323232] font-semibold mb-[0.75rem] whitespace-pre-line">
        {formData.phone} (으)로{`\n`}전송한 인증번호를 입력해주세요.
      </p>
      <CommonInput
        placeholder="인증번호 입력"
        value={formData.verifyCode}
        onChange={e =>
          setFormData(prev => ({
            ...prev,
            verifyCode: e.target.value,
          }))
        }
      />

      <div
        className={`fixed left-0 w-full px-4 transition-all duration-300 ${
          isKeyboardOpen ? "bottom-[1rem]" : "bottom-[1.5rem]"
        }`}
      >
        <button
          className="block w-full flex justify-center items-center text-right text-[0.75rem] text-[#323232] underline mb-4"
          onClick={() => {
            console.log("인증번호 재요청");
          }}
        >
          인증번호 재요청
        </button>
        <CommonButton
          text="다음"
          onClick={handleNext}
          className={`w-full ${
            isValid
              ? "bg-[#FA9820] text-white"
              : "bg-[#CCCCCC] text-white pointer-events-none"
          }`}
          disabled={!isValid}
        />
      </div>
    </div>
  );
};

export default StepVerify;
