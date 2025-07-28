import { useEffect, useState } from "react";
import CommonHeader from "../../../../components/header/CommonHeader";
import StampHistoryItem from "./_components/StampHistoryItem";
import StampHistoryItemSkeleton from "./Skeleton/StampHistoryItemSkeleton";
import { stampHistoryDummy } from "../../../../mock/stampHistoryDummy";
import type { StampHistory } from "../../../../types/stampHistory";
import StampDetailPage from "../StampExchange/_components/StampDetailPage";

const StampHistoryPage = ({ onBack }: { onBack: () => void }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedHistory, setSelectedHistory] = useState<StampHistory | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#252525] -mx-[1.5rem] px-[1.5rem] pb-[5rem]">
      <CommonHeader title="스탬프 히스토리" onBack={onBack} />

      <div className="text-[#252525]">
        {isLoading
          ? Array.from({ length: 10 }).map((_, i) => <StampHistoryItemSkeleton key={i} />)
          : stampHistoryDummy.map((item) => (
              <StampHistoryItem
                key={item.id}
                history={item}
                onClick={() => setSelectedHistory(item)}
              />
            ))}
      </div>

      {selectedHistory && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div className="bg-white w-full sm:max-w-[393px] h-full overflow-y-auto custom-scrollbar">
            <StampDetailPage
              stampBook={{
                id: selectedHistory.id,
                cafeName: selectedHistory.cafeName,
                cafeAddress: selectedHistory.cafeAddress,
                imageUrl: selectedHistory.imageUrl,
                totalStampCount: 10,
                currentStampCount: 10,
                isCompleted: true,
                expiredAt: "2024-7-24", 
              }}
              onBack={() => setSelectedHistory(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StampHistoryPage;
