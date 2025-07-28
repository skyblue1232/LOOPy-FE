import { useState, useEffect, useRef } from "react";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import type { InfiniteData } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import CafeTagButton from "./CafeTagButton";
import CafeInfoContent from "./CafeInfoContent";
import type { BusinessHour, CafeDetailData } from "../../../../types/cafeData";
import { cafeDetailMock } from "../../../../mock/cafeDetailMock";
import { cafeReviewMock } from "../../../../mock/cafeReviewMock";
import { formatReview } from "../../../../utils/formatReview";
import { getCafeReviews } from "../../../../apis/review/api";
import type { ReviewPage } from "../../../../apis/review/type";
import CafeReviewContent from "./CafeReviewContent";
import AlarmSubscribeButton from "./AlarmSubscribeButton";
import BookmarkButton from "../../../../components/button/BookmarkButton";
import ArrowDownIcon from "/src/assets/images/ArrowDown_Grey2.svg?react";
import ArrowUpIcon from "/src/assets/images/ArrowUp_Grey2.svg?react";
import CafeInfoContentSkeleton from "../Skeleton/CafeInfoContentSkeleton";
import CafeReviewContentSkeleton from "../Skeleton/CafeReviewSkeleton";

interface CafeInfoPanelProps extends CafeDetailData {
    selectedTab: "info" | "review";
    onTabChange: (tab: "info" | "review") => void;
    menus?: {
        name: string;
        description: string;
        price: string;
        imageSrc: string;
    }[];
    isLoading: boolean;
    hours: BusinessHour[];
    storeFilters?: Record<string, boolean>;
    takeOutFilters?: Record<string, boolean>;
    menuFilters?: Record<string, boolean>;
}

const days = ["일", "월", "화", "수", "목", "금", "토"];

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
    isLoading,
    hours,
    menus = [],
    storeFilters,
    takeOutFilters,
    menuFilters,
}: CafeInfoPanelProps) {
    const [showAllTags, setShowAllTags] = useState(false);
    const today = days[new Date().getDay()];
    const sortedHours = [
        ...hours.slice(hours.findIndex((h) => h.day === today)),
        ...hours.slice(0, hours.findIndex((h) => h.day === today)),
    ];
    const Icon = showAllTags ? ArrowUpIcon : ArrowDownIcon;
    const [isTabLoading, setIsTabLoading] = useState(false);
    const prevTabRef = useRef<"info" | "review">(selectedTab);
    const { cafeId } = useParams();
    const token = localStorage.getItem("accessToken");
    const {
        data: reviewData,
        isLoading: isReviewLoading,
    } = useQuery({
        queryKey: ["cafeReviews", cafeId],
        queryFn: () => getCafeReviews(cafeId!, undefined, token!),
        enabled: selectedTab === "review" && !!cafeId && !!token,
    });

    const getActiveFilterTags = (): string[] => {
        const filters = [storeFilters, takeOutFilters, menuFilters];
        return filters.flatMap((filter) =>
            Object.entries(filter || {})
            .filter(([, value]) => value)
            .map(([key]) => key)
        );
    };

    /*const {
        data: reviewData,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading: isReviewLoading,
    } = useInfiniteQuery<ReviewPage, unknown, InfiniteData<ReviewPage>, [string, string | undefined]>({
        queryKey: ["cafeReviews", cafeId],
        queryFn: async ({ pageParam }: { pageParam: unknown }) => {
            return await getCafeReviews(cafeId!, (pageParam ?? 0) as number, token!);
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage) =>
            lastPage.hasNextPage ? lastPage.nextCursor : undefined,
        enabled: selectedTab === "review" && !!cafeId && !!token,
    });

    const { ref, inView } = useInView();

    useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
    }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);
    const getActiveFilterTags = (): string[] => {
        const filters = [storeFilters, takeOutFilters, menuFilters];
        return filters.flatMap((filter) =>
            Object.entries(filter || {})
            .filter(([, value]) => value)
            .map(([key]) => key)
        );
    };*/

    const allTags = [...tags, ...getActiveFilterTags()];

    useEffect(() => {
        if (prevTabRef.current !== selectedTab) {
            setIsTabLoading(true);
            const timer = setTimeout(() => setIsTabLoading(false), 1000);
            prevTabRef.current = selectedTab;
            return () => clearTimeout(timer);
        }
    }, [selectedTab]);

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
                        {allTags.slice(0, 2).map((tag, idx) => (
                            <CafeTagButton key={idx} label={tag} />
                        ))}
                        <div className="flex px-[0.625rem]">
                            {allTags.length > 2 && (
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
                            {allTags.slice(2).map((tag, idx) => (
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
                    isLoading || isTabLoading ? (
                    <CafeInfoContentSkeleton />
                    ) : (
                        <CafeInfoContent
                            hours={sortedHours}
                            phone={phone}
                            instagram={instagram}
                            description={description}
                            keywords={keywords}
                            menus={
                                menus.length > 0
                                ? menus
                                : cafeDetailMock.menu.map((m) => ({
                                    name: m.name,
                                    description: m.description,
                                    price: m.price.toString(),
                                    imageSrc: m.imgUrl,
                                }))
                            }
                        />
                    )
                )}
                {selectedTab === "review" && (
                    isTabLoading || isReviewLoading ? (
                        <div className="mt-[1.5rem] flex flex-col gap-[2rem]">
                            <CafeReviewContentSkeleton />
                        </div>
                    ) : (
                        <div className="mt-[1.5rem] flex flex-col gap-[2rem]">
                            <CafeReviewContent
                                reviews={
                                    (reviewData?.reviews || cafeReviewMock.reviews).map(formatReview)} 
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}