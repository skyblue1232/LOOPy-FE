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

interface StepEmailProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onNext: () => void;
}

const StepEmail = ({ formData, setFormData, onNext }: StepEmailProps) => {
  const isValid = formData.email.trim() !== "" && formData.password.trim() !== "";

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

  const handleClick = () => {
    if (!isValid) return;
    onNext();
  };

  return (
    <div>
      <p className="text-[1rem] font-medium text-[#323232] mt-[1.5rem] mb-[0.5rem]">
        이메일
      </p>
      <CommonInput
        placeholder="이메일 입력"
        value={formData.email}
        onChange={e =>
          setFormData(prev => ({
            ...prev,
            email: e.target.value,
          }))
        }
      />

      <p className="text-[1rem] font-medium text-[#323232] mt-[1.5rem] mb-[0.5rem]">
        비밀번호
      </p>
      <CommonInput
        placeholder="비밀번호 입력"
        value={formData.password}
        onChange={e =>
          setFormData(prev => ({
            ...prev,
            password: e.target.value,
          }))
        }
      />

      <div
        className={`fixed left-0 w-full px-[1.5rem] transition-all duration-300 ${
          isKeyboardOpen ? "bottom-[1rem]" : "bottom-[1.5rem]"
        }`}
      >
        <CommonButton
          text="다음"
          onClick={handleClick}
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

export default StepEmail;
