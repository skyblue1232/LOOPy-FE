import { useEffect, useState } from 'react';
import StampPaper from '../../../../User/MyStamp/components/StampPaper';

export type Customer = {
  name: string;
  points: number;
  stamps: number;
  stampBook?: number;
};

type KeypadModalProps = {
  onClose: () => void;
  lookupCustomer: (phone: string) => Promise<Customer | null>;
  onApplyStamp: (phone: string, customer: Customer) => void; // 적립 처리 콜백
};

export default function KeypadModal({
  onClose,
  lookupCustomer,
  onApplyStamp,
}: KeypadModalProps) {
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'notfound' | 'error'
  >('idle');
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const addDigit = (d: string) => {
    if (phone.length >= 11) return;
    setPhone((p) => p + d);
    // 새로 입력하면 이전 상태 초기화
    setStatus('idle');
    setCustomer(null);
    setErrorMessage(null);
  };

  const backspace = () => {
    setPhone((p) => p.slice(0, -1));
    setStatus('idle');
    setCustomer(null);
    setErrorMessage(null);
  };

  const formattedPhone = phone
    ? phone.replace(/(\d{3})(\d{4})(\d{0,4})/, (_, a, b, c) =>
        c ? `${a}-${b}-${c}` : b ? `${a}-${b}` : a,
      )
    : '';

  const handleLookup = async () => {
    if (!phone) return;
    setStatus('loading');
    setErrorMessage(null);
    setCustomer(null);
    try {
      const result = await lookupCustomer(phone);
      if (result) {
        setCustomer(result);
        setStatus('success');
      } else {
        setStatus('notfound');
      }
    } catch (e) {
      console.error(e);
      setErrorMessage('조회 중 오류가 발생했습니다. 다시 시도해주세요.');
      setStatus('error');
    }
  };

  const handleApply = () => {
    if (customer) {
      onApplyStamp(phone, customer);
    }
  };

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg w-[835px] h-[584px] flex flex-col overflow-hidden">
        {/* 헤더 */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-[#DFDFDF]">
          <div className="text-[1.125rem] font-extrabold flex-1">
            스탬프 적립을 위해 고객의 전화번호를 눌러주세요
          </div>
          <button
            onClick={onClose}
            aria-label="닫기"
            className="text-gray-500 hover:text-gray-800 text-2xl leading-none ml-4"
          >
            ×
          </button>
        </div>

        {/* 본문 */}
        <div className="flex flex-1 gap-0 overflow-hidden">
          {/* 좌측: 키패드 + 입력 */}
          <div className="w-[29rem] flex flex-col overflow-hidden">
            <div className=" min-h-[120px] w-[29rem] flex items-center">
              <div className="w-full text-[2rem] font-medium break-all text-center">
                {formattedPhone}
              </div>
            </div>

            {/* 상태별 피드백 */}
            <div className="px-4 mb-2">
              {status === 'loading' && (
                <div className="text-sm text-[#555]">
                  고객 정보를 조회 중입니다...
                </div>
              )}
              {status === 'notfound' && (
                <div className="text-sm text-[#D04747]">
                  해당 전화번호의 고객 정보를 찾을 수 없습니다. 번호를
                  확인하거나 다시 시도해주세요.
                </div>
              )}
              {status === 'error' && errorMessage && (
                <div className="text-sm text-[#D04747]">{errorMessage}</div>
              )}
            </div>

            {/* 숫자 키패드 */}
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
                onClick={handleLookup}
                disabled={!phone || status === 'loading'}
                aria-label="조회"
                className="py-6 text-[1.5rem] font-medium transition disabled:opacity-50 bg-[#6970F3] text-white flex items-center justify-center"
              >
                조회
              </button>
            </div>
          </div>

          {/* 우측: 고객 정보 / 결과 */}
          <div
            className={`w-[23.188rem] p-6 flex flex-col transition-colors duration-300 ${
              status === 'success' ? 'bg-[#EEF0FF]' : 'bg-[#F3F3F3]'
            }`}
          >
            <div className="text-[1rem] text-[#7F7F7F] font-semibold mb-6 leading-none">
              고객 정보
            </div>

            {/* 💡 이 부분에 스크롤 적용 */}
            <div className="flex-1 overflow-y-auto scrollbar-hidden">
              <div className="min-h-full flex flex-col items-center justify-center text-center">
                {status === 'idle' && (
                  <div className="text-[#A8A8A8]">
                    고객의 전화번호를 입력해
                    <br />
                    고객 정보를 조회해주세요
                  </div>
                )}

                {status === 'loading' && (
                  <div className="text-[#555]">
                    <div className="animate-pulse">
                      고객 정보를 불러오는 중...
                    </div>
                  </div>
                )}

                {status === 'notfound' && (
                  <div className="text-[#D04747]">
                    해당 번호의 고객 정보가 없습니다.
                    <br />
                    번호를 확인하거나 새로 입력해주세요.
                  </div>
                )}

                {status === 'error' && (
                  <div className="text-[#D04747]">
                    조회 중 오류가 발생했습니다.
                    <br />
                    다시 시도해주세요.
                  </div>
                )}

                {status === 'success' && customer && (
                  <>
                    <div className="flex justify-between gap-[3.188rem]">
                      <div className="flex gap-4 justify-center items-center">
                        <div className="text-[1.5rem] font-bold leading-none">
                          {customer.name}
                        </div>
                        <div className="text-[0.875rem] text-[#7F7F7F] font-semibold leading-none">
                          스탬프지 {customer.stampBook}장 째
                        </div>
                      </div>
                      <button
                        onClick={handleApply}
                        className="w-[6rem] h-[2.125rem] text-[0.875rem] font-semibold rounded-md bg-[#6970F3] text-white"
                        aria-label="스탬프 적립"
                      >
                        스탬프 적립
                      </button>
                    </div>
                    <div className="flex mt-4 mb-8">
                      <div className="flex gap-4 w-[10.094rem] h-[3.125rem] py-[1rem] items-center justify-center border-y border-r border-[#A8A8A8]">
                        <div className="text-[0.875rem] font-semibold leading-none">
                          스탬프
                        </div>
                        <div className="text-[1.125rem] text-[#6970F3] font-bold leading-none ">
                          {customer.stamps}개
                        </div>
                      </div>
                      <div className="flex gap-4 w-[10.094rem] h-[3.125rem] py-[1rem] items-center justify-center border-y border-[#A8A8A8]">
                        <div className="text-[0.875rem] font-semibold leading-none">
                          포인트
                        </div>
                        <div className="text-[1.125rem] text-[#6970F3] font-bold leading-none ">
                          {customer.points}p
                        </div>
                      </div>
                    </div>
                    <StampPaper currentStep={customer.stamps % 10} />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
