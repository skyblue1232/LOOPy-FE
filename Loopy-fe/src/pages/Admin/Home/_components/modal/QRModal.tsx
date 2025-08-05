import { useEffect, useRef, useState } from 'react';
import QRScanner from '../QRScanner';

type KeypadModalProps = {
  onClose: () => void;
  onSubmit: (phone: string) => void;
};

export default function KeypadModal({ onClose, onSubmit }: KeypadModalProps) {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<string | null>(null);
  const submitTimeoutRef = useRef<number | null>(null);

  const formattedPhone = phone
    ? phone.replace(/(\d{3})(\d{4})(\d{0,4})/, (_, a, b, c) =>
        c ? `${a}-${b}-${c}` : b ? `${a}-${b}` : a,
      )
    : '';

  const handleDetect = (decoded: string) => {
    const digits = decoded.replace(/\D/g, '').slice(0, 11);
    if (!digits || digits === phone) return;

    setPhone(digits);
    setError(null);

    if (submitTimeoutRef.current) {
      clearTimeout(submitTimeoutRef.current);
    }
    submitTimeoutRef.current = window.setTimeout(() => {
      onSubmit(digits);
    }, 300);
  };

  const handleError = (msg: string) => {
    setError(msg);
  };

  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-[1400px] flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-6 py-6 border-b border-[#DFDFDF]">
          <div className="text-[1.125rem] font-extrabold flex-1">
            쿠폰/포인트 사용, 챌린지 인증을 위해 고객의 멤버쉽 QR을
            스캔해주세요.
          </div>
          <button
            onClick={onClose}
            aria-label="닫기"
            className="text-gray-500 hover:text-gray-800 text-2xl leading-none ml-4"
          >
            ×
          </button>
        </div>

        <div className="flex flex-1">
          <div className="flex-1 flex flex-col items-center">
            <div className="w-[29rem] h-[32rem]">
              <QRScanner onDetect={handleDetect} onError={handleError} />
            </div>

            {error && <div className="text-sm text-red-500 my-2">{error}</div>}
          </div>

          <div className="w-[23.188rem] bg-[#F3F3F3] p-6 flex flex-col">
            <div className="text-sm text-[#7F7F7F] mb-2">고객 정보</div>
            <div className="flex-1 flex flex-col justify-center items-center text-center px-2">
              {phone ? (
                <div className="text-lg font-semibold mb-1">
                  {formattedPhone} 님
                </div>
              ) : (
                <div className="text-[#A8A8A8] whitespace-pre-line">
                  고객의 멤버쉽 QR을 스캔해
                  <br />
                  고객 정보를 조회해주세요
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
