import { useState } from "react";
import TopPhotoSection from "./_components/TopPhotoSection";
import CafeInfoPanel from "./_components/CafeInfoPanel";
import CafePhotoModal from "./_components/CafePhotoModal";
import { cafeDetailMock } from "../../../mock/cafeDetailMock";
import ReviewButton from "./_components/ReviewButton";

const DetailPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"info" | "review">("info");

  return (
    <div className="relative -mx-[1.5rem] h-screen overflow-y-scroll custom-scrollbar bg-white flex justify-center z-[100]">
      <div className="w-full relative">
        <div className="z-0 relative">
          <TopPhotoSection
            images={cafeDetailMock.images}
            onOpenModal={() => setIsModalOpen(true)}
          />
        </div>

        <div className="z-10 relative -mt-[1.5rem]">
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
        </div>

        <div className="fixed bottom-[1.5rem] left-1/2 -translate-x-1/2 w-full max-w-[393px] flex justify-end px-[1.5rem] z-30">
          {selectedTab === "review" && (
            <ReviewButton />
          )}
        </div>

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