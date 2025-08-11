import type { ExpiringStampBookResponse } from "../../../../../apis/myStamp/type";
import { usePostExpiringStampBook } from "../../../../../hooks/mutation/my/myStamp/useExpiredStamp";

interface Props {
  stampBook: ExpiringStampBookResponse;
  onExchangeClick: (stampBookId: number) => void;
  onSelect: (stampBook: ExpiringStampBookResponse) => void;
}

const StampBookItem = ({ stampBook, onExchangeClick, onSelect }: Props) => {
  const { id, cafe } = stampBook;
  const { name: cafeName, address: cafeAddress } = cafe;

  const { mutate: postStampBook } = usePostExpiringStampBook();

  const handleSelect = () => {
    onSelect(stampBook);
  };

  const handleExchangeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    postStampBook(id);
    onExchangeClick(id);
  };

  return (
    <div
      className="flex items-start justify-center mt-[1.5rem] cursor-pointer"
      onClick={handleSelect}
    >
      <div className="flex gap-4 w-full items-start">
        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between">
            <p className="text-[1.125rem] font-bold">{cafeName}</p>
            <button
              onClick={handleExchangeClick}
              className="text-[#7F7F7F] text-[0.875rem] font-semibold bg-[#F3F3F3] px-[0.625rem] py-[0.25rem] rounded-[6px]"
            >
              환전
            </button>
          </div>
          <p className="text-[0.875rem] text-[#7F7F7F] font-normal">{cafeAddress}</p>
        </div>
      </div>
    </div>
  );
};

export default StampBookItem;
