import CommonInput from "../../../../components/input/CommonInput";

interface VerifyCodeInputProps {
  value: string;
  onChange: (val: string) => void;
  hasError: boolean;
  onResend: () => void;
  cooldown: number; 
}

const VerifyCodeInput = ({
  value,
  onChange,
  hasError,
  onResend,
  cooldown,
}: VerifyCodeInputProps) => {
  return (
    <>
      <div className="flex justify-between items-center mt-[1rem] mb-[0.5rem]">
        <p className="text-[1rem] font-semibold text-[#252525]">인증번호</p>
        <button
          className={`text-[0.75rem] font-semibold ${
            cooldown > 0 ? "text-[#7F7F7F] cursor-not-allowed" : "text-[#252525]"
          }`}
          onClick={cooldown > 0 ? undefined : onResend}
          disabled={cooldown > 0}
        >
          {cooldown > 0 ? `재전송 ${cooldown}s` : "인증번호 재요청"}
        </button>
      </div>

      <CommonInput
        placeholder="인증번호를 입력해주세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        hasError={hasError}
      />

      {hasError && (
        <p className="text-[0.75rem] text-[#FF0000] mt-[0.625rem]">
          인증번호가 일치하지 않습니다
        </p>
      )}
    </>
  );
};

export default VerifyCodeInput;
