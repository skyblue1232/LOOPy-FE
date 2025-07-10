import CommonButton from '../button/CommonButton';

interface BottomPopupProps {
  onClose: () => void;
  purpleButton?: string;
  show: boolean;
  titleText?: string;
  contentsText?: string;
}

export default function CommonBottomPopup({
  onClose,
  show,
  titleText,
  purpleButton,
  contentsText,
}: BottomPopupProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* 배경 오버레이 */}
      <div
        className="absolute inset-0 bg-[#252525] opacity-60"
        onClick={onClose}
      />

      {/* 팝업 박스 */}
      <div className="relative w-[24.5625rem] bg-white rounded-t-[1rem] px-[1.5rem] pt-[2.5rem] pb-[3rem] z-50">
        {/* Grab Handle */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#DFDFDF] rounded-[0.25rem]" />

        {/* 타이틀 텍스트 */}
        {titleText && (
          <div className="mb-[1.25rem] text-[1.25rem] font-bold">
            {titleText}
          </div>
        )}

        {/* 컨텐츠 텍스트 */}
        {contentsText && (
          <div className="mb-[1.5rem] text-[0.875rem] font-regular text-[#7F7F7F]">
            {contentsText}
          </div>
        )}

        {/* 보라색 버튼 */}
        {purpleButton && (
          <div className="mb-[0.5rem]">
            <CommonButton
              text={purpleButton}
              autoStyle
              className="bg-[#6970F3] text-white font-semibold h-[3.125rem] flex items-center justify-center rounded"
              onClick={() => {}}
            />
          </div>
        )}

        {/* 고정 닫기 버튼 */}
        <CommonButton
          text="닫기"
          autoStyle={false}
          className="text-[1rem] h-[3.125rem] bg-[#DFDFDF] text-[#7F7F7F] font-semibold flex items-center justify-center"
          onClick={onClose}
        />
      </div>
    </div>
  );
}
