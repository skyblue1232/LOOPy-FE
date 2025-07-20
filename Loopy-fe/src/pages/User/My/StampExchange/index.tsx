import { useState } from "react";
import CommonHeader from "../../../../components/header/CommonHeader";
import { useMyStampBooks } from "../../../../hooks/query/useMyStampbook";
import StampBookItem from "./_components/StampBookItem";
import CommonBottomPopup from "../../../../components/popup/CommonBottomPopup";

interface StampExchangeProps {
  onBack: () => void;
}

const StampExchangePage = ({ onBack }: StampExchangeProps) => {
  const { data, isLoading } = useMyStampBooks();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedCafeName, setSelectedCafeName] = useState<string>("");

  const handleExchangeClick = (id: number, cafeName: string) => {
    setSelectedId(id);
    setSelectedCafeName(cafeName);
  };

  const handleConfirmExchange = () => {
    console.log("환전 API 호출:", selectedId);
    setSelectedId(null);
  };

  return (
    <div className="mb-[4rem]">
      <CommonHeader title="스탬프 환전" onBack={onBack} />

      <div className="bg-[#F6F6F6] text-[#7F7F7F] text-[0.875rem] font-normal whitespace-pre-line -mx-[1.5rem] px-[1.5rem] py-[1.25rem]">
        1달 내 재방문이 없으면 스탬프 하나 당 2 포인트로 자동 환전되어요.  
        자동 환전 후 스탬프는 소멸되어요!
      </div>

      {isLoading ? (
        <p className="p-4 text-center text-sm">로딩 중...</p>
      ) : (
        <div className="text-[#252525]">
          {data?.map((item) => (
            <StampBookItem
              key={item.id}
              stampBook={item}
              onExchangeClick={() => handleExchangeClick(item.id, item.cafeName)}
            />
          ))}
        </div>
      )}

      <CommonBottomPopup
        show={selectedId !== null}
        onClose={() => setSelectedId(null)}
        titleText={`${selectedCafeName}의\n스탬프를 모두 포인트로 환전할까요?`}
        contentsText={`환전된 포인트는 스탬프 기준 포인트로 적립됩니다.\n환전 후 스탬프는 초기화됩니다.`}
        purpleButton="환전하기"
        purpleButtonOnClick={handleConfirmExchange}
      />
    </div>
  );
};

export default StampExchangePage;
