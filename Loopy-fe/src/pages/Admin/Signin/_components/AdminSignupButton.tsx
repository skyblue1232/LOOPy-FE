import CommonButton from "../../../../components/button/CommonButton";

interface AdminSignupButtonProps {
  onClick: () => void;
  isKeyboardOpen: boolean;
  isValid: boolean;
  isPending: boolean;
}

const AdminSignupButton = ({
  onClick,
  isKeyboardOpen,
  isValid,
  isPending,
}: AdminSignupButtonProps) => {
  return (
    <div
      className={`absolute left-1/2 transform -translate-x-1/2 w-full max-w-[393px] transition-all duration-300 ${
        isKeyboardOpen ? "bottom-[4rem]" : "bottom-[2rem]"
      }`}
    >
      <CommonButton
        text="회원가입하기"
        onClick={onClick}
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
