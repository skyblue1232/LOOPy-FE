import NextIcon from "../../../../assets/images/Next.svg?react";

interface Props {
  onNavigate: () => void;
}

const CafeNotification = ({ onNavigate }: Props) => {
  return (
    <button
      onClick={onNavigate}
      className="w-full flex items-center text-left"
    >
      <div className="flex items-center gap-[1rem]">
        <div className="w-[2.5rem] h-[2.5rem] rounded-full bg-red-500" />
        <div className="flex flex-col justify-center">
          <p className="text-[1rem] font-semibold">
            내 단골카페 알림 보기
          </p>
          <p className="text-[0.875rem] font-normal text-[#7F7F7F]">
            사장님이 보낸 편지를 확인해보세요
          </p>
        </div>
      </div>

      <NextIcon className="w-[1rem] h-[1rem] text-[#A8A8A8] ml-auto" />
    </button>
  );
};

export default CafeNotification;
