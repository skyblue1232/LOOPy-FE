import { useNavigate } from "react-router-dom";

export default function ReviewButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/detail/write-review")}
      className="absolute z-20 w-[4rem] h-[4rem] bottom-[1.5rem] right-[1.5rem]"
    >
      <img
        src="/src/assets/images/ReviewButton.svg"
        alt="리뷰 작성"
        className="w-[4rem] h-[4rem]"
      />
    </button>
  );
}
