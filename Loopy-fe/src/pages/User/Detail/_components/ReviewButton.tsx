import { useNavigate } from "react-router-dom";
import ReviewButtonIcon from "/src/assets/images/ReviewButton.svg?react";

export default function ReviewButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/detail/write-review")}
      className="absolute z-20 w-[4rem] h-[4rem] bottom-[1.5rem] right-[1.5rem]"
    >
      <ReviewButtonIcon
        className="w-[4rem] h-[4rem]"
      />
    </button>
  );
}
