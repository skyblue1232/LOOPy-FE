type CommonTwoButtonModalProps = {
  onClose: () => void;
  purpleButton?: string;
  purpleButtonOnClick?: () => void;
  title: string;
  message: string | React.ReactNode;
};

const CommonTwoButtonModal = ({
  onClose,
  message,
  title,
  purpleButton,
  purpleButtonOnClick,
}: CommonTwoButtonModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 ">
      <div className="relative bg-white rounded-xl shadow-lg w-[33rem] flex items-center justify-center px-6 pt-6 pb-8">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-xl"
          aria-label="닫기"
        >
          ×
        </button>

        {/* 본문 내용 */}
        <div className="flex flex-col items-center justify-center text-center w-full">
          <div className="text-[1.25rem] font-bold text-black mt-4">
            {title}
          </div>
          <div className="text-[0.875rem] font-normal text-[#7F7F7F] mt-4">
            {message}
          </div>
          <div className="flex gap-2 w-full mt-10">
            <button className="flex-1 bg-[#DFDFDF] text-[#7F7F7F] text-[1rem] font-semibold py-[1rem] rounded-[0.5rem]">
              취소하기
            </button>
            <button
              className="flex-1 bg-[#6970F3] text-white text-[1rem] font-semibold py-[1rem]  rounded-[0.5rem]"
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
