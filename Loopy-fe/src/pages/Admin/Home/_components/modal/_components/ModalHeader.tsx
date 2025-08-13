type ModalHeaderProps = {
  onClose: () => void;
};

const ModalHeader = ({ onClose }: ModalHeaderProps) => {
  return (
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
  );
};

export default ModalHeader;
