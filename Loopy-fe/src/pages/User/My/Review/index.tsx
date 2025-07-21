import { useNavigate } from "react-router-dom";
import CommonHeader from "../../../../components/header/CommonHeader";
import ReviewItem from "./_components/ReviewItem";
import { dummyReviews } from "../../../../mock/dummyReviews";
import CommonBottomPopup from "../../../../components/popup/CommonBottomPopup";
import { useState } from "react";

const ReviewPage = ({ onBack }: { onBack: () => void }) => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState(dummyReviews);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  const handleClick = (reviewId: number) => {
    navigate(`/detail/write-review?reviewId=${reviewId}`);
  };

  const handleDelete = (id: number) => {
    setReviews((prev) => prev.filter((review) => review.id !== id));
    setShowDeleteSuccess(true);
  };

  return (
    <div className="flex flex-col -mx-[1.5rem]">
      <div className="mx-[1.5rem]">
        <CommonHeader title="내가 작성한 리뷰" onBack={onBack} />
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

      {/* true로 바꾸기 */}
      <CommonBottomPopup
        show={showDeleteSuccess}
        titleText="리뷰가 삭제되었습니다"
        onClose={() => setShowDeleteSuccess(false)}
      />
    </div>
  );
};

export default ReviewPage;
