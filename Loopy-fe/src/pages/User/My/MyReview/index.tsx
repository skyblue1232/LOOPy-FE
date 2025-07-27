import { useState, useEffect } from "react";
import CommonHeader from "../../../../components/header/CommonHeader";
import ReviewItem from "./_components/ReviewItem";
import { dummyReviews } from "../../../../mock/dummyReviews";
import CommonBottomPopup from "../../../../components/popup/CommonBottomPopup";
import EditReviewPage from "./_components/EditReviewPage";
import ReviewListSkeleton from "./Skeleton/MyReviewSkeleton";

interface MyReviewPageProps {
  onBack: () => void;
}

const MyReviewPage = ({ onBack }: MyReviewPageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState(dummyReviews);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [editingReviewId, setEditingReviewId] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (reviewId: number) => {
    setEditingReviewId(reviewId);
  };

  const handleDelete = (id: number) => {
    setReviews((prev) => prev.filter((review) => review.id !== id));
    setShowDeleteSuccess(true);
  };

  if (editingReviewId !== null) {
    const selectedReview = reviews.find((r) => r.id === editingReviewId);
    if (!selectedReview) return null;

    return (
      <EditReviewPage
        review={selectedReview}
        onBack={() => setEditingReviewId(null)}
      />
    );
  }

  return (
    <div className="flex flex-col -mx-[1.5rem] custom-scrollbar">
      <div className="mx-[1.5rem]">
        <CommonHeader title="내가 작성한 리뷰" onBack={onBack} />
      </div>

      {isLoading ? (
        <ReviewListSkeleton />
      ) : (
        <>
          <div className="mx-[1.5rem]">
            <p className="mt-[1.5rem] text-[1rem] font-semibold">
              내가 쓴 리뷰 총 {reviews.length}개
            </p>
          </div>
          <div className="flex-1 overflow-y-auto mt-[1.5rem] space-y-[2.125rem] mb-[3rem]">
            {reviews.map((review) => (
              <ReviewItem
                key={review.id}
                id={review.id}
                cafeName={review.cafeName}
                date={review.date}
                content={review.content}
                images={review.images}
                onClick={() => handleClick(review.id)}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </>
      )}

      <CommonBottomPopup
        show={showDeleteSuccess}
        titleText="리뷰가 삭제되었습니다"
        onClose={() => setShowDeleteSuccess(false)}
      />
    </div>
  );
};

export default MyReviewPage;
