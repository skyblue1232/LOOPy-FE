import { useState } from "react";
import SlideNavButton from "../../../../components/button/SlideButton";

interface CafePhotoModalProps {
    images: string[];
    onClose: () => void;
}

export default function CafePhotoModal({ images, onClose }: CafePhotoModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="absolute inset-0 z-[100] bg-black/70 flex flex-col items-center justify-center">
        {/* 닫기 버튼 */}
        <button
            onClick={onClose}
            className="absolute top-[1.5rem] right-[1.5rem] text-white"
            aria-label="닫기"
        >
            < img src="/src/assets/images/Close-White.svg" alt="닫기" className="w-[1.75rem] h-[1.75rem]" />
        </button>

        {/* 이미지 뷰어 */}
        <div className="relative w-full max-w-[24.5625rem] px-[1.5rem]">
            <img
            src={images[currentIndex]}
            alt={`cafe-${currentIndex}`}
            className="w-full h-auto rounded-[0.5rem] object-contain"
            />

            {images.length > 1 && (
                <>
                    <SlideNavButton
                    variant="transparent"
                    direction="left"
                    onClick={handlePrev}
                    />
                    <SlideNavButton
                    variant="transparent"
                    direction="right"
                    onClick={handleNext}
                    />
                </>
            )}
        </div>

        {/* 썸네일 목록 */}
        <div className="mt-[1rem] flex gap-[0.5rem] overflow-x-auto px-[1.5rem]">
            {images.map((img, idx) => (
            <img
                key={idx}
                src={img}
                className={`w-[4rem] h-[4rem] object-cover rounded-[0.25rem] cursor-pointer ${
                idx === currentIndex ? "ring-2 ring-[#6970F3]" : "opacity-70"
                }`}
                onClick={() => setCurrentIndex(idx)}
                alt={`thumbnail-${idx}`}
            />
            ))}
        </div>
        </div>
    );
}
