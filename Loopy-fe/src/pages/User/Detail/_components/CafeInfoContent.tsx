import { useNavigate } from "react-router-dom";
import BusinessTimeSection from "./BusinessTimeSection";
import KeywordTags from "../../../../components/etc/KeywordTags";
import MyStampCard from "./MyStampCard";
import EventCard from "../../../../components/card/EventCard";
import CouponCard from "./CouponCard";
import MenuCard from "./MenuCard";

export interface BusinessHour {
    day: string; 
    time: string; 
}

interface Props {
    hours: BusinessHour[];
    phone: string;
    instagram: string;
    description: string;
    keywords: string[];
    menus?: {
        name: string;
        description: string;
        price: string;
        imageSrc: string;
    }[];
}

export default function CafeInfoContent({
    hours,
    phone,
    instagram,
    description,
    keywords,
    menus = [],
}: Props) {
    const navigate = useNavigate();
    const topMenus = menus.slice(0,2);
    return (
        <div className="mt-[1.5rem] flex flex-col text-[0.875rem] font-normal text-[#3B3B3B]">
            {/* 영업시간 */}
            <BusinessTimeSection hours={hours} />

            {/* 전화번호 */}
            <div className="mt-[0.75rem] flex items-center gap-[0.5rem]">
                <img src="/src/assets/images/Phone.svg" className="h-[1rem]" />
                <span>{phone}</span>
            </div>

            {/* 인스타그램 주소 */}
            <div className="mt-[0.75rem] flex items-center gap-[0.5rem]">
                <img src="/src/assets/images/Globe.svg" className="h-[1rem]" />
                <span>{instagram}</span>
            </div>

            {/* 설명 */}
            <div className="mt-[1rem] leading-[1.3125rem]">{description}</div>

            {/* 키워드 태그 */}
            <div className="mt-[1rem]">
                <KeywordTags keywords={keywords} />
            </div>

            {/* 하단 바 */}
            <div className="mt-[1.5rem] w-[21.5625rem] h-[1px] bg-[#F3F3F3]" />

            <div className="mt-[1.5rem]">
                <MyStampCard current={4} total={10} dueDate="2025.08.15" />
            </div>

            {/* 챌린지*/}
            <div className="mt-[2rem] text-[1rem] font-semibold text-[#000000]">
                챌린지 정보
            </div>

            <div className="mt-[1rem]">
                <EventCard
                    imageSrc="/src/assets/images/sample_event.jpg"
                    monthLabel="7월의 챌린지"
                    title="지구를 지키는 카페들"
                    description="텀블러 사용 인증하고 리워드 받기"
                    onClick={() => console.log("이벤트 클릭")}
                />
            </div>

            {/* 쿠폰 안내 */}
            <div className="mt-[2rem] text-[1rem] font-semibold text-[#000000]">
                쿠폰 안내
            </div>
            <div className="mt-[1rem]">
                <CouponCard
                    imageSrc="/src/assets/images/sample_coupon.jpg"
                    storeName="카페 위니"
                    title="아메리카노 200원 할인쿠폰"
                    description="발급 후 14일 동안 사용 가능"
                    onDownload={() => console.log("쿠폰 다운로드")}
                />
            </div>

            {/* 대표 메뉴 */}
            {topMenus.length > 0 && (
                <>
                <div className="mt-[2rem] flex items-center justify-between">
                    <span className="text-[1rem] font-semibold text-[#000000]">대표 메뉴</span>
                    <button
                    onClick={() => navigate("/detail/menu")}
                    className="text-[0.875rem] font-normal text-[#7F7F7F]"
                    >
                    전체보기 &gt;
                    </button>
                </div>

                <div className="mt-[1rem] flex flex-col gap-[1.5rem]">
                    {topMenus.map((menu, idx) => (
                        <MenuCard key={idx} {...menu} />
                    ))}
                </div>
                </>
            )}
        </div>
    );
}
