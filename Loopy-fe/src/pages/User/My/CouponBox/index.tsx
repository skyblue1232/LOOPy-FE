import { useState } from "react";
import CommonHeader from "../../../../components/header/CommonHeader";
import CouponCard from "./_components/CouponCard.tsx";
import { validCoupons, pastCoupons } from "./_mock/coupons";

interface CouponBoxPageProps {
  onBack: () => void;
}

const CouponBoxPage = ({ onBack }: CouponBoxPageProps) => {
  const [activeTab, setActiveTab] = useState<"valid" | "past">("valid");
  const filteredCoupons = activeTab === "valid" ? validCoupons : pastCoupons;

  return (
    <div>
      <CommonHeader title="쿠폰함" onBack={onBack} />
      
      <div className="flex relative mt-6 border-b-2 border-[#F3F3F3]">
        <button
          onClick={() => setActiveTab("valid")}
          className={`relative flex-1 pb-2 text-[1rem] font-semibold text-center
            ${activeTab === "valid" ? "text-[#6970F3]" : "text-[#A8A8A8]"}
          `}
        >
          사용 가능한 쿠폰
          {activeTab === "valid" && (
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-[#6970F3]" />
          )}
        </button>

        <button
          onClick={() => setActiveTab("past")}
          className={`relative flex-1 pb-2 text-[1rem] font-semibold text-center
            ${activeTab === "past" ? "text-[#6970F3]" : "text-[#A8A8A8]"}
          `}
        >
          지난 쿠폰
          {activeTab === "past" && (
            <span className="absolute left-0 bottom-[-2px] h-[2px] w-full bg-[#6970F3]" />
          )}
        </button>
      </div>

      <div className="mt-[1.5rem] mb-[4rem] flex flex-col gap-[1.5rem]">
        {filteredCoupons.map((coupon) => (
          <CouponCard key={coupon.id} coupon={coupon} isPast={activeTab === "past"} />
        ))}
      </div>
    </div>
  );
};

export default CouponBoxPage;
