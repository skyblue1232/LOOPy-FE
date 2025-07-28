import { useRef } from "react";
import ArrowRight from "../../../../../assets/images/ArrowRight.svg?react";

interface Props {
  images: string[];
}

const ReviewImageSlider = ({ images }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    const container = containerRef.current;
    if (container) {
      container.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative -mr-[1.5rem]">
      <div
        ref={containerRef}
        className="flex gap-[0.5rem] overflow-x-auto custom-scrollbar h-[10.5rem] pr-[1.5rem]"
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`review-${i}`}
            className="w-[10.5rem] h-[10.5rem] object-cover rounded-[0.5rem] flex-shrink-0"
            onError={(e) => {
              e.currentTarget.src = "https://picsum.photos/300/200?grayscale&blur=1";
            }}
          />
        ))}
      </div>

      {images.length > 1 && (
        <button
          onClick={handleNext}
          className="absolute right-[0.5rem] top-1/2 -translate-y-1/2 bg-white rounded-full z-10 p-[0.5rem]"
        >
          <ArrowRight className="w-[1.25rem] h-[1.25rem] text-[#252525]"/>
        </button>
      )}
    </div>
  );
};

export default ReviewImageSlider;
