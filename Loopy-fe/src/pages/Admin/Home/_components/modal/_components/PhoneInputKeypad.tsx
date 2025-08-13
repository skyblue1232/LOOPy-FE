import StatusMessage from './StatusMessage';

type PhoneInputKeypadProps = {
  phone: string;
  addDigit: (d: string) => void;
  backspace: () => void;
  onLookup: () => void;
  status: 'idle' | 'loading' | 'success' | 'notfound' | 'error';
  disabledLookup: boolean;
};

const PhoneInputKeypad = ({
  phone,
  addDigit,
  backspace,
  onLookup,
  status,
  disabledLookup,
}: PhoneInputKeypadProps) => {
  const formattedPhone = phone
    ? phone.replace(/(\d{3})(\d{4})(\d{0,4})/, (_, a, b, c) =>
        c ? `${a}-${b}-${c}` : b ? `${a}-${b}` : a,
      )
    : '';

  return (
    <div className="w-[29rem] flex flex-col overflow-hidden">
      <div className=" min-h-[120px] w-[29rem] flex items-center">
        <div className="w-full text-[2rem] font-medium break-all text-center">
          {formattedPhone}
        </div>
      </div>

      <StatusMessage status={status} />

      <div className="w-[29rem] grid grid-cols-3 gap-px bg-[#DFDFDF] border-t border-[#DFDFDF]">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((n) => (
          <button
            key={n}
            onClick={() => addDigit(n)}
            className="py-6 bg-white text-[2rem] font-medium hover:bg-gray-100 transition"
            aria-label={`숫자 ${n}`}
          >
            {n}
          </button>
        ))}

        <button
          onClick={backspace}
          className="py-6 bg-white text-[2rem] font-medium hover:bg-gray-100 transition"
          aria-label="지우기"
        >
          ←
        </button>
        <button
          onClick={() => addDigit('0')}
          className="py-6 bg-white text-[2rem] font-medium hover:bg-gray-100 transition"
          aria-label="숫자 0"
        >
          0
        </button>
        <button
          onClick={onLookup}
          disabled={disabledLookup}
          aria-label="조회"
          className="py-6 text-[1.5rem] font-medium transition disabled:opacity-50 bg-[#6970F3] text-white flex items-center justify-center"
        >
          조회
        </button>
      </div>
    </div>
  );
};

export default PhoneInputKeypad;
