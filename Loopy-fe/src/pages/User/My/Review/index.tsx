import { useNavigate } from "react-router-dom";
import CommonHeader from "../../../../components/header/CommonHeader";

const ReviewPage = ({ onBack }: { onBack: () => void }) => {
  const navigate = useNavigate();

  const dummyReviews = [
    { id: 1, title: "이디야 강남점 리뷰", content: "아이스 아메리카노 맛있었어요!" },
    { id: 2, title: "스타벅스 홍대점 리뷰", content: "조용하고 좋아요." },
  ];

  const handleClick = (reviewId: number) => {
    navigate(`/detail/write-review?reviewId=${reviewId}`);
  };

  return (
    <div className="flex flex-col h-full">
      <CommonHeader title="내가 작성한 리뷰" onBack={onBack} />

      <div className="flex-1 overflow-y-auto mt-[1.5rem]">
        <ul className="space-y-[1rem]">
          {dummyReviews.map((review) => (
            <li
              key={review.id}
              onClick={() => handleClick(review.id)}
              className="border border-[#DFDFDF] rounded-[0.5rem] cursor-pointer hover:bg-[#F9F9F9]"
            >
              <p className="text-[1rem] font-semibold text-[#252525]">{review.title}</p>
              <p className="text-[0.875rem] text-[#7F7F7F] mt-[0.25rem]">{review.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReviewPage;
