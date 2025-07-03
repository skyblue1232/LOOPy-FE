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

interface StepNicknameProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onNext: () => void;
}

const StepNickname = ({ formData, setFormData, onNext }: StepNicknameProps) => {
  const isValid = formData.nickname.trim() !== "" && formData.phone.trim() !== "";

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
        닉네임
      </p>
      <CommonInput
        placeholder="닉네임 입력"
        value={formData.nickname}
        onChange={e =>
          setFormData(prev => ({
            ...prev,
            nickname: e.target.value,
          }))
        }
      />

      <p className="text-[1rem] font-medium text-[#323232] mt-[1.5rem] mb-[0.5rem]">
        전화번호
      </p>
      <CommonInput
        placeholder="전화번호 입력"
        value={formData.phone}
        onChange={e =>
          setFormData(prev => ({
            ...prev,
            phone: e.target.value,
          }))
        }
      />
      <p className="text-[12px] text-[#A8A8A8] text-right mt-1 mr-[2px]">
        *입력한 전화번호로 알림이 발송됩니다
      </p>

      <div
        className={`fixed left-0 w-full px-4 transition-all duration-300 ${
          isKeyboardOpen ? "bottom-[16px]" : "bottom-[24px]"
        }`}
      >
        <CommonButton
          text="인증번호 받기"
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

export default StepNickname;
