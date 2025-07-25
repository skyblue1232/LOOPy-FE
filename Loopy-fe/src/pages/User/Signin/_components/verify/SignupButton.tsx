import CommonButton from "../../../../../components/button/CommonButton";

interface SignupButtonProps {
  onClick: () => void;
  isKeyboardOpen: boolean;
  isValid: boolean;
  isPending: boolean;
}

const SignupButton = ({
  onClick,
  isKeyboardOpen,
  isValid,
  isPending,
}: SignupButtonProps) => {
  return (
    <div
      className={`absolute left-0 w-full px-[1.5rem] transition-all duration-300 ${
        isKeyboardOpen ? "bottom-[4rem]" : "bottom-[2rem]"
      }`}
    >
      <CommonButton
        text="회원가입하기"
        onClick={onClick}
        className={`w-full ${
          isValid ? "bg-[#6970F3] text-white" : "bg-[#CCCCCC] text-[#7F7F7F] pointer-events-none"
        }`}
        disabled={!isValid || isPending}
      />
    </div>
  );
};

export default SignupButton;
