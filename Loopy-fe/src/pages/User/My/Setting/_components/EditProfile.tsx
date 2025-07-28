import CommonInput from "../../../../../components/input/CommonInput";
import CommonButton from "../../../../../components/button/CommonButton";
import { useState } from "react";
import { useKeyboardOpen } from "../../../../../hooks/useKeyboardOpen";
import CommonHeader from "../../../../../components/header/CommonHeader";

interface EditProfileProps {
  onBack: () => void;
}

const EditProfile = ({ onBack }: EditProfileProps) => {
  const [nickname, setNickname] = useState("루피25");
  const isKeyboardOpen = useKeyboardOpen();

  const isValid = nickname.trim().length > 0;

  const handleSave = () => {
    if (!isValid) return;
    console.log("닉네임 저장:", nickname);
    onBack();
  };

  return (
    <>
      <CommonHeader title="개인정보 수정" onBack={onBack} />
      <div className="flex flex-col justify-between mt-[1.5rem]">
        <div>
          <p className="text-[1rem] font-semibold text-[#252525] mb-[0.5rem]">닉네임</p>
          <CommonInput
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
  
        <div
          className={`absolute left-0 w-full px-[1.5rem] transition-all duration-300 ${
            isKeyboardOpen ? "bottom-[4rem]" : "bottom-[2rem]"
          }`}
        >
          <CommonButton
            text="저장하기"
            onClick={handleSave}
            className={`w-full ${
              isValid ? "bg-[#6970F3] text-white" : "bg-[#CCCCCC] text-[#7F7F7F] pointer-events-none"
            }`}
            disabled={!isValid}
          />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
