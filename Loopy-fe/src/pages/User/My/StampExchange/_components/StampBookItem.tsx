import { useNavigate } from "react-router-dom";
import type { StampBook } from "../../../../../apis/myStamp/type";

interface Props {
  stampBook: StampBook;
  onExchangeClick: (stampBookId: number) => void;
}

const StampBookItem = ({ stampBook, onExchangeClick }: Props) => {
  const navigate = useNavigate();
  const { id, currentStampCount, totalStampCount, cafeName, cafeAddress, imageUrl } = stampBook;
  const progress = (currentStampCount / totalStampCount) * 100;

  return (
    <div className="flex items-start justify-center mt-[1.5rem]">
      <div className="flex gap-3 w-full items-start">
        <img
          src={imageUrl}
          alt={cafeName}
          className="w-[5rem] h-[5rem] rounded-[8px] object-cover cursor-pointer"
          onClick={() => navigate(`/mystamppage/${id}`)}
        />

        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between">
            <p
              onClick={() => navigate(`/mystamppage/${id}`)}
              className="text-[1.125rem] font-bold cursor-pointer"
            >
              {cafeName}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onExchangeClick(id);
              }}
              className="text-[#7F7F7F] text-[0.875rem] font-semibold bg-[#F3F3F3] px-[0.625rem] py-[0.375rem] rounded-[6px]"
            >
              환전
            </button>
          </div>
          <p className="text-[0.875rem] text-[#7F7F7F]">{cafeAddress}</p>

          {/* 스탬프 바 */}
          <div className="mt-[0.5rem]">
            <div className="flex items-center gap-2">
              <span className="text-[#6970F3] text-[0.875rem] font-semibold">스탬프</span>
              <div className="flex-1 h-[10px] bg-[#F3F3F3] rounded-full relative">
                <div
                  className="absolute top-0 left-0 h-full bg-[#6970F3] rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-end gap-[2px]">
                <span className="text-[#6970F3] text-[0.875rem] font-semibold">{currentStampCount}</span>
                <span className="text-[0.75rem] font-medium">/{totalStampCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StampBookItem;