import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "../../../components/header/CommonHeader";
import CommonButton from "../../../components/button/CommonButton";

const MAX_IMAGES = 5;

export default function ReviewWritePage() {
    const [reviewText, setReviewText] = useState("");
    const [images, setImages] = useState<File[]>([]);
    const navigate = useNavigate();
    
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const fileList = Array.from(e.target.files).slice(0, MAX_IMAGES - images.length);
        setImages([...images, ...fileList]);
    };

    const handleImageRemove = (index: number) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

    const isValid = reviewText.trim().length > 0;

    return (
        <div>
            <CommonHeader title="리뷰 작성" onBack={() => navigate(-1)}/>

            <div className="mt-[1.5rem] text-[#FF0000] text-[0.75rem] font-normal">
                * 필수 입력
            </div>

            <div className="mt-[0.5rem] text-[#252525] text-[1.125rem] font-bold">
                리뷰 작성 <span className="text-[#FF0000]">*</span>
            </div>

            {/* 카페 이름 박스 */}
            <div className="mt-[0.5rem]">
                <div className="bg-[#F3F3F3] rounded-[0.5rem] h-[3rem] px-[1rem] flex items-center text-[1rem] font-semibold text-[#252525]">
                카페 위니
                </div>
            </div>

            {/* 리뷰 내용 박스 */}
            <div className="mt-[0.5rem] relative">
                <textarea
                placeholder="내용을 입력해주세요"
                className="w-full h-[10rem] rounded-[0.5rem] bg-[#F3F3F3] px-[1rem] py-[1rem] resize-none text-[0.875rem] text-[#3B3B3B] font-normal placeholder:text-[#7F7F7F]"
                maxLength={500}
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                />
                <div className="absolute bottom-[0.75rem] right-[1rem] text-[0.75rem] text-[#7F7F7F] font-normal">
                {reviewText.length}/500
                </div>
            </div>

            {/* 사진 첨부 */}
            <div className="mt-[1.5rem]">
                <div className="text-[#252525] text-[1.125rem] font-bold flex items-center gap-[0.25rem]">
                사진 첨부 <span className="text-[1rem] font-normal text-[#252525]">{images.length}/5</span>
                </div>

                <div className="mt-[0.5rem] grid grid-cols-3 gap-[0.5rem]">
                {images.map((img, i) => (
                    <div key={i} className="relative w-[6.875rem] h-[6.875rem]">
                    <img
                        src={URL.createObjectURL(img)}
                        alt={`preview-${i}`}
                        className="w-full h-full object-cover rounded-[0.5rem]"
                    />
                    <button
                        onClick={() => handleImageRemove(i)}
                        className="absolute top-[0.25rem] right-[0.25rem] w-[1rem] h-[1rem]"
                    >
                        <img src="/src/assets/images/DeletePic.svg" alt="삭제" />
                    </button>
                    </div>
                ))}
                {images.length < MAX_IMAGES && (
                    <label className="w-[6.875rem] h-[6.875rem] rounded-[0.5rem] border border-dashed border-[#DFDFDF] flex items-center justify-center bg-[#F3F3F3] cursor-pointer">
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageUpload}
                        multiple
                    />
                    <img src="/src/assets/images/PlusPic.svg" alt="사진 추가" />
                    </label>
                )}
                </div>
            </div>

            {/* 완료 버튼 */}
            <div
                className={`absolute bottom-[2rem] left-0 w-full px-[1.5rem] transition-all duration-150`}
            >
                <CommonButton
                    text="완료하기"
                    className={`w-full ${
                        isValid ? "bg-[#6970F3] text-white" : "bg-[#CCCCCC] text-[#7F7F7F] pointer-events-none"
                    }`}
                    disabled={!isValid}
                />
            </div>
        </div>
    );
}
