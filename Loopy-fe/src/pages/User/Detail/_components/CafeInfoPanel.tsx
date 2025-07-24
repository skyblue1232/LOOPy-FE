import { useState } from "react";
import CafeTagButton from "./CafeTagButton";
import CafeInfoContent from "./CafeInfoContent";
import type { CafeDetailData } from "../../../../types/cafeData";
import { cafeDetailMock } from "../../../../mock/cafeDetailMock";
import CafeReviewContent from "./CafeReviewContent";
import AlarmSubscribeButton from "./AlarmSubscribeButton";
import BookmarkButton from "../../../../components/button/BookmarkButton";
import ArrowDownIcon from "/src/assets/images/ArrowDown_Grey2.svg?react";
import ArrowUpIcon from "/src/assets/images/ArrowUp_Grey2.svg?react";

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
        <div className="w-full px-[1.5rem] pt-[1.5625rem] pb-[2rem] bg-white rounded-t-[0.75rem]">
            <div className="shrink-0">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[1rem]">
                        <div className="text-[1.5rem] font-bold whitespace-nowrap">{name}</div>
                        <AlarmSubscribeButton />
                    </div>

                    <BookmarkButton/>
                    </div>

                <div className="mt-[0.25rem] text-[#7F7F7F] text-[1rem] font-normal">
                    {address}
                </div>

                <div className="mt-[0.75rem] flex flex-col gap-y-[0.5rem]">
                    <div className="flex gap-x-[0.375rem] flex-wrap items-center">
                        {tags.slice(0, 2).map((tag, idx) => (
                            <CafeTagButton key={idx} label={tag} />
                        ))}
                        <div className="flex px-[0.625rem]">
                            {tags.length > 2 && (
                                <button
                                    onClick={() => setShowAllTags(!showAllTags)}
                                    className="flex items-center text-[0.875rem] text-[#7F7F7F] whitespace-nowrap gap-[0.25rem]"
                                >
                                    태그 더보기
                                    <Icon className="w-[0.75rem] h-[0.75rem] shrink-0" />
                                </button>
                            )}
                        </div>
                    </div>

                    {showAllTags && (
                        <div className="flex flex-wrap gap-x-[0.375rem] gap-y-[0.5rem]">
                            {tags.slice(2).map((tag, idx) => (
                                <CafeTagButton key={`more-${idx}`} label={tag} />
                            ))}
                        </div>
                    )}
                </div>

                <div className="mt-[2rem] flex flex-col items-center border-b border-[#E0E0E0]">
                    <div className="w-full relative"> {/* 344px */}
                        <div className="flex">
                            {["카페 정보", "리뷰"].map((label, index) => {
                                const key = index === 0 ? "info" : "review";
                                const isSelected = selectedTab === key;
                                return (
                                <button
                                    key={label}
                                    onClick={() => onTabChange(key as "info" | "review")}
                                    className={`w-1/2 text-[1rem] font-semibold pb-[0.75rem] text-center leading-none ${
                                        isSelected ? "text-[#6970F3]" : "text-[#A8A8A8]"
                                    }`}
                                >
                                    {label}
                                </button>
                                );
                            })}
                        </div>

                        <div
                        className={`absolute bottom-0 h-[0.125rem] bg-[#6970F3] transition-all duration-200 w-1/2 ${
                            selectedTab === "info" ? "left-0" : "left-1/2"
                        }`}
                        />
                    </div>
                </div>
            </div>

            <div className="pb-[2rem]">
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
                        <CafeReviewContent reviews={cafeDetailMock.reviews} />
                    </div>
                )}
            </div>
        </div>
    );
}