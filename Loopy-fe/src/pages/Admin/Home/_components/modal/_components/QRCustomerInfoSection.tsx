import CustomerInfoCard from '../../CustomerInfoCard';
import type { Customer } from '../../../types/CustomerData';

interface CustomerInfoSectionProps {
  customer: Customer | null;
  scanCompleted: boolean;
  phone: string;
  onConfirmAction: (
    title: string,
    type: '사용' | '인증',
    couponId?: number,
    userId?: number,
  ) => void;

  onPointUseClick: (cust: Customer) => void;
  isLoading?: boolean;
}

export default function CustomerInfoSection({
  customer,
  scanCompleted,
  phone,
  onConfirmAction,
  onPointUseClick,
}: CustomerInfoSectionProps) {
  const formattedPhone = phone
    ? phone.replace(/(\d{3})(\d{4})(\d{0,4})/, (_, a, b, c) =>
        c ? `${a}-${b}-${c}` : b ? `${a}-${b}` : a,
      )
    : '';

  return (
    <div
      className={`w-[23.188rem] p-6 flex flex-col ${
        scanCompleted ? 'bg-[#F0F1FE]' : 'bg-[#F3F3F3]'
      }`}
    >
      <div className="text-[1rem] text-[#7F7F7F] font-semibold mb-6 leading-none">
        고객 정보
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        <div className="min-h-full flex flex-col">
          {customer ? (
            <div>
              <div className="flex w-full justify-between gap-[3.188rem]">
                <div className="text-[1.5rem] font-bold leading-none">
                  {customer.name}
                </div>
                <button
                  className="w-[6rem] h-[2.125rem] text-[0.875rem] font-semibold rounded-md bg-[#6970F3] text-white"
                  aria-label="포인트 사용"
                  onClick={() => onPointUseClick(customer)}
                >
                  포인트 사용
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
              <div className="text-[#252525] text-[1rem] font-semibold mb-4">
                소지한 쿠폰
              </div>
              {customer.coupons.length > 0 ? (
                customer.coupons.map((c, idx) => (
                  <CustomerInfoCard
                    key={idx}
                    expiry={c.expiry}
                    title={c.title}
                    type="사용"
                    onClick={() =>
                      onConfirmAction(c.title, '사용', c.id, customer.userId)
                    }
                  />
                ))
              ) : (
                <div className="text-[#A8A8A8] text-sm">
                  소지한 쿠폰이 없습니다
                </div>
              )}

              <div className="text-[#252525] text-[1rem] font-semibold mt-4 mb-4">
                참여 중인 챌린지
              </div>
              {customer.challenges.length > 0 ? (
                customer.challenges.map((c, idx) => (
                  <CustomerInfoCard
                    key={idx}
                    expiry={c.expiry}
                    title={c.title}
                    type="인증"
                    onClick={() => onConfirmAction(c.title, '인증')}
                  />
                ))
              ) : (
                <div className="text-[#A8A8A8] text-sm">
                  참여 중인 챌린지가 없습니다
                </div>
              )}
            </div>
          ) : phone ? (
            <div className="mt-[11rem] text-lg font-semibold mb-1 text-center">
              {formattedPhone}
            </div>
          ) : (
            <div className="mt-[11rem] text-[#A8A8A8] whitespace-pre-line text-center ">
              고객의 멤버쉽 QR을 스캔해
              <br />
              고객 정보를 조회해주세요
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
