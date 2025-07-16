import { useState } from "react";
import CafeTagButton from "./CafeTagButton";
import CafeInfoContent from "./CafeInfoContent";
import type { CafeDetailData } from "../../../../types/cafeData";
import { cafeDetailMock } from "../../../../mock/cafeDetailMock";
import CafeReviewContent from "./CafeReviewContent";
import AlarmSubscribeButton from "./AlarmSubscribeButton";
import BookmarkButton from "../../../../components/button/BookmarkButton";
import ArrowDownIcon from "/src/assets/images/ArrowDown.svg?react";
import ArrowUpIcon from "/src/assets/images/ArrowUp.svg?react";

interface CafeInfoPanelProps extends CafeDetailData {
    selectedTab: "info" | "review";
    onTabChange: (tab: "info" | "review") => void;
    menus?: {
        name: string;
        description: string;
        price: string;
        imageSrc: string;
    }[];
}

const days = ["일", "월", "화", "수", "목", "금", "토"];

const dummyHours = [
    { day: "월", time: "10:00 – 20:00 (19:30 라스트오더)" },
    { day: "화", time: "10:00 – 20:00 (19:30 라스트오더)" },
    { day: "수", time: "10:00 – 20:00 (19:30 라스트오더)" },
    { day: "목", time: "10:00 – 20:00 (19:30 라스트오더)" },
    { day: "금", time: "10:00 – 20:00 (19:30 라스트오더)" },
    { day: "토", time: "11:00 – 19:00 (19:30 라스트오더)" },
    { day: "일", time: "정기 휴무 (매주 일요일)" },
];

export default function CafeInfoPanel({
    name,
    address,
    tags,
    keywords,
    selectedTab,
    onTabChange,
    phone,
    instagram,
    description,
}: CafeInfoPanelProps) {
    const [showAllTags, setShowAllTags] = useState(false);
    const today = days[new Date().getDay()];
    const sortedHours = [
        ...dummyHours.slice(dummyHours.findIndex((h) => h.day === today)),
        ...dummyHours.slice(0, dummyHours.findIndex((h) => h.day === today)),
    ];
    const Icon = showAllTags ? ArrowUpIcon : ArrowDownIcon;

    return (
        <div className="absolute top-[15.25rem] z-10 w-[24.5625rem] rounded-t-[0.75rem] flex flex-col bg-white px-[1.5rem] pt-[1.5625rem] pb-[2rem] h-[calc(100%-15.25rem)]">
            <div className="shrink-0">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[1rem]">
                        <div className="text-[1.5rem] font-bold whitespace-nowrap">{name}</div>
                        <AlarmSubscribeButton />
                    </div>

                    <BookmarkButton/>
                    </div>

                <div className="mt-[0.75rem] text-[#7F7F7F] text-[1rem] font-normal">
                    {address}
                </div>

                <div className="mt-[1rem] flex flex-wrap gap-x-[0.375rem] gap-y-[0.5rem]">
                    {(showAllTags ? tags : tags.slice(0, 2)).map((tag, idx) => (
                        <CafeTagButton key={idx} label={tag} />
                    ))}
                    {tags.length > 2 && (
                    <button
                        onClick={() => setShowAllTags(!showAllTags)}
                        className="flex items-center text-[0.875rem] text-[#3B3B3B] whitespace-nowrap ml-[0.5rem] gap-[0.25rem]"
                    >
                        {showAllTags ? "접기" : "태그 더보기"}
                        <Icon className="w-[1rem] h-[1rem] shrink-0"/>
                    </button>
                    )}
                </div>

                <div className="mt-[2rem] flex flex-col items-center border-b border-[#E0E0E0]">
                    <div className="w-[21.5rem] relative"> {/* 344px */}
                        <div className="flex">
                            {["카페 정보", "리뷰"].map((label, index) => {
                                const key = index === 0 ? "info" : "review";
                                const isSelected = selectedTab === key;
                                return (
                                <button
                                    key={label}
                                    onClick={() => onTabChange(key as "info" | "review")}
                                    className={`w-[10.75rem] text-[1rem] font-semibold pb-[0.75rem] text-center ${
                                    isSelected ? "text-[#6970F3]" : "text-[#A8A8A8]"
                                    }`}
                                >
                                    {label}
                                </button>
                                );
                            })}
                        </div>

                        <div
                        className={`absolute bottom-0 h-[0.125rem] bg-[#6970F3] transition-all duration-200 w-[10.75rem] ${
                            selectedTab === "info" ? "left-0" : "left-[10.75rem]"
                        }`}
                        />
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-scroll custom-scrollbar pb-[2rem]">
                {selectedTab === "info" && (
                    <CafeInfoContent
                        hours={sortedHours}
                        phone={phone}
                        instagram={instagram}
                        description={description}
                        keywords={keywords}
                        menus={cafeDetailMock.menus}
                    />
                )}
                {selectedTab === "review" && cafeDetailMock.reviews && (
                    <div className="mt-[1.5rem] flex flex-col gap-[2rem]">
                        <CafeReviewContent reviews={[cafeDetailMock.reviews[0]]} />
                        <CafeReviewContent reviews={[cafeDetailMock.reviews[1]]} />
                    </div>
                )}
            </div>
        </div>
    );
}