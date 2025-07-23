import { useState } from "react";

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
                <div key={review.id}>
                    <ReviewItem
                        review={review}
                        currentImageIndex={currentIndexes[i]}
                        onNext={() => handleNext(i)}
                        onPrev={() => handlePrev(i)}
                    />
                    {i !== reviews.length - 1 && (
                        <div className="w-full h-[0.05rem] bg-[#D9D9D9]" />
                    )}
                </div>
            ))}
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
}: ReviewItemProps) {
    return (
        <div>
            {/* 상단 프로필 */}
            <div className="flex gap-[0.75rem]">
                <img
                    src={review.user.profileImage}
                    alt="profile"
                    className="w-[2.5rem] h-[2.5rem] rounded-full object-cover"
                />
                <div className="flex-1">
                    <div className="text-[0.875rem] font-semibold">
                        {review.user.nickname}
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="text-[0.75rem] text-[#7F7F7F] font-normal">
                            {review.user.stampStatus}
                        </div>
                        <div className="text-[0.75rem] text-[#7F7F7F] font-normal whitespace-nowrap">
                            {review.date}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative mt-[0.75rem] w-full h-[10.5rem] overflow-x-auto overflow-y-hidden whitespace-nowrap custom-scrollbar">
                {review.images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`review-${idx}`}
                        className="inline-block w-[10.5rem] h-[10.5rem] object-cover mr-[0.5rem] shrink-0"
                    />
                ))}
            </div>


            {/* 리뷰 본문 */}
            <p className="mt-[0.75rem] text-[0.875rem] font-normal text-[#3B3B3B] leading-[150%]">
                {review.content}
            </p>
        </div>
    );
}
