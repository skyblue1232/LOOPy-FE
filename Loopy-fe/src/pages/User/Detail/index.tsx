import { useState } from "react";
import TopPhotoSection from "./_components/TopPhotoSection";
import CafeInfoPanel from "./_components/CafeInfoPanel";
import CafePhotoModal from "./_components/CafePhotoModal";
import { cafeDetailMock } from "../../../mock/cafeDetailMock";

const DetailPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"info" | "review">("info");

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[100] bg-white overflow-y-auto flex justify-center">
      <div className="w-full max-w-[393px]">
        <TopPhotoSection
          images={cafeDetailMock.images}
          onOpenModal={() => setIsModalOpen(true)}
        />

        <CafeInfoPanel
          name={cafeDetailMock.name}
          address={cafeDetailMock.address}
          tags={cafeDetailMock.tags}
          keywords={cafeDetailMock.keywords}
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          hours={cafeDetailMock.hours}
          phone={cafeDetailMock.phone}
          instagram={cafeDetailMock.instagram}
          description={cafeDetailMock.description}
        />

        {isModalOpen && (
          <CafePhotoModal
            images={cafeDetailMock.images}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
}

export default DetailPage;