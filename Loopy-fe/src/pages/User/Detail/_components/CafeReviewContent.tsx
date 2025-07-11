import { useState } from "react";
import ReviewButton from "./ReviewButton";
import SlideNavButton from "../../../../components/button/SlideButton";

interface Review {
    id: number;
    user: {
        profileImage: string;
        nickname: string;
        stampStatus: string;
    };
    date: string;
    images: string[];
    content: string;
}

interface CafeReviewContentProps {
    reviews: Review[];
}

export default function CafeReviewContent({ reviews }: CafeReviewContentProps) {
    const [currentIndexes, setCurrentIndexes] = useState<number[]>(
        reviews.map(() => 0)
    );

    const handleNext = (index: number) => {
        setCurrentIndexes((prev) =>
        prev.map((val, i) =>
            i === index && val < reviews[i].images.length - 1 ? val + 1 : val
        )
        );
    };

    const handlePrev = (index: number) => {
        setCurrentIndexes((prev) =>
        prev.map((val, i) => (i === index && val > 0 ? val - 1 : val))
        );
    };

    return (
        <div className="flex flex-col gap-[2rem]">
            {reviews.map((review, i) => (
                <ReviewItem
                key={review.id}
                review={review}
                currentImageIndex={currentIndexes[i]}
                onNext={() => handleNext(i)}
                onPrev={() => handlePrev(i)}
                />
            ))}

            <ReviewButton />
        </div>
    );
}

interface ReviewItemProps {
    review: Review;
    currentImageIndex: number;
    onNext: () => void;
    onPrev: () => void;
}

function ReviewItem({
    review,
    currentImageIndex,
    onNext,
    onPrev,
}: ReviewItemProps) {
    const imagesPerSlide = 2;
    const totalSlides = Math.ceil(review.images.length / imagesPerSlide);

    return (
        <div>
        {/* 상단 프로필 */}
        <div className="flex justify-between items-start">
            <div className="flex gap-[0.75rem]">
            <img
                src={review.user.profileImage}
                alt="profile"
                className="w-[2.5rem] h-[2.5rem] rounded-full object-cover"
            />
            <div>
                <div className="text-[0.875rem] font-semibold">
                {review.user.nickname}
                </div>
                <div className="text-[0.75rem] text-[#7F7F7F] font-normal">
                {review.user.stampStatus}
                </div>
            </div>
            </div>
            <div className="text-[0.75rem] text-[#7F7F7F] font-normal">{review.date}</div>
        </div>

        <div className="relative mt-[0.75rem] w-[21rem] h-[10.5rem] overflow-hidden">
            <div
                className="flex h-full gap-[0.5rem]"
                style={{
                    transform: `translateX(-${currentImageIndex * 21.5}rem)`,
                    transition: "transform 0.3s ease-in-out",
                }}
            >
                {review.images.map((img, idx) => (
                <img
                    key={idx}
                    src={img}
                    alt={`review-${idx}`}
                    className="w-[10.5rem] h-[10.5rem] object-cover rounded-[0.5rem] shrink-0"
                />
                ))}
            </div>

            {/* 버튼 */}
            {currentImageIndex > 0 && (
            <SlideNavButton
                variant="white"
                direction="left"
                onClick={onPrev}
            />
            )}
            {currentImageIndex < totalSlides - 1 && (
            <SlideNavButton
                variant="white"
                direction="right"
                onClick={onNext}
            />
            )}
        </div>


        {/* 리뷰 본문 */}
        <p className="mt-[0.75rem] text-[0.875rem] font-normal text-[#3B3B3B] leading-[150%]">
            {review.content}
        </p>
        </div>
    );
}
