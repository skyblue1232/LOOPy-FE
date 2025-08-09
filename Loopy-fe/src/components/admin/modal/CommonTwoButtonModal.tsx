type CommonTwoButtonModalProps = {
  onClose: () => void;
  purpleButton?: string;
  purpleButtonOnClick?: () => void;
  title: React.ReactNode;
  message?: string;       
  children?: React.ReactNode;  
  headerRight?: React.ReactNode;    
};

const CommonTwoButtonModal = ({
  onClose,
  message,
  title,
  purpleButton,
  purpleButtonOnClick,
  children,
  headerRight,
}: CommonTwoButtonModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6 pt-6 pb-8">
      <div className="relative bg-white rounded-xl shadow-lg w-[33rem]">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-black text-xl"
          aria-label="닫기"
        >
          ×
        </button>

        <div className="w-full px-6 pt-6 pb-8">
          {/* 제목 + 우측 슬롯 */}
          <div className="flex items-center justify-between">
            <div className="text-[1.25rem] font-bold text-black mt-1">
              {title}
            </div>
            {!!headerRight && <div className="mt-1">{headerRight}</div>}
          </div>

          {/* 기본 메시지 or 커스텀 본문 */}
          {children ? (
            <div className="mt-6">{children}</div>
          ) : message ? (
            <div className="text-[0.875rem] font-normal text-[#7F7F7F] mt-4 whitespace-break-spaces">
              {message}
            </div>
          ) : null}

          {/* 하단 버튼 */}
          <div className="flex gap-2 w-full mt-10">
            <button
              className="flex-1 bg-[#DFDFDF] text-[#7F7F7F] text-[1rem] font-semibold py-4 rounded-[0.5rem] leading-none"
              onClick={onClose}
            >
              취소하기
            </button>
            <button
              className="flex-1 bg-[#6970F3] text-white text-[1rem] font-semibold py-4 rounded-[0.5rem] leading-none"
              onClick={purpleButtonOnClick}
            >
              {purpleButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonTwoButtonModal;
