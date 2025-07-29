import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import TopPhotoSection from "./_components/TopPhotoSection";
import CafeInfoPanel from "./_components/CafeInfoPanel";
import CafePhotoModal from "./_components/CafePhotoModal";
import ReviewButton from "./_components/ReviewButton";
import TopPhotoSectionSkeleton from "./Skeleton/TopPhotoSectionSkeleton";
import CafeInfoPanelSkeleton from "./Skeleton/CafeInfoPanelSkeleton";

import { cafeDetailMock } from "../../../mock/cafeDetailMock";
import { getCafeDetail } from "../../../apis/cafeDetail/api";
import type { CafeDetailSuccess } from "../../../apis/cafeDetail/type";
import { parseBusinessHours } from "../../../utils/parseBusinessHours";

const DetailPage = () => {
  const { cafeId = '1' } = useParams(); // 임의 지정
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"info" | "review">("info");

  const handleBack = () => {
    navigate(-1); 
  };

  const { data, isLoading } = useQuery<CafeDetailSuccess>({
    queryKey: ['cafeDetail', cafeId],
    queryFn: async () => {
      if (!cafeId) throw new Error('no cafeId');
      try {
        return await getCafeDetail(cafeId);
      } catch (e) {
        console.warn('getCafeDetail failed, fallback to mock:', e);
        return cafeDetailMock;
      }
    },
    enabled: !!cafeId,
  });

  const cafe = data?.cafe;
  const photos = data?.photos || [];

  return (
    <div className="relative -mx-[1.5rem] h-screen overflow-y-scroll custom-scrollbar bg-white flex justify-center z-[100]">
      <div className="w-full relative">
        <div className="z-0 relative">
          {isLoading ? (
            <TopPhotoSectionSkeleton />
          ) : (
            <TopPhotoSection
              images={photos.map((p) => p.url)}
              onOpenModal={() => setIsModalOpen(true)}
              onBack={handleBack}
            />
          )}
        </div>

        <div className="z-10 relative -mt-[1.5rem]">
          {isLoading || !cafe ? (
            <CafeInfoPanelSkeleton />
          ) : (
            <CafeInfoPanel
              name={cafe.name}
              address={cafe.address}
              tags={[]}
              keywords={cafe.keywords}
              selectedTab={selectedTab}
              onTabChange={setSelectedTab}
              hours={parseBusinessHours(cafe.businessHours)}
              phone={cafe.phone}
              instagram={cafe.websiteUrl}
              description={cafe.description}
              isLoading={isLoading}
              storeFilters={data.cafe.storeFilters}
              takeOutFilters={data.cafe.takeOutFilters}
              menuFilters={data.cafe.menuFilters}
            />
          )}
        </div>

        <div className="fixed bottom-[1.5rem] left-1/2 -translate-x-1/2 w-full max-w-[393px] flex justify-end px-[1.5rem] z-30">
          {selectedTab === "review" && (
            <ReviewButton />
          )}
        </div>

        {isModalOpen && (
          <CafePhotoModal
            images={photos.map((p) => p.url)}
            onClose={() => setIsModalOpen(false)}
          />
        )}

        
      </div>
    </div>
  );
}

export default DetailPage;