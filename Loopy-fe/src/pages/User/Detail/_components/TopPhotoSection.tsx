interface TopPhotoSectionProps {
    images: string[];
    onOpenModal: () => void;
}

export default function TopPhotoSection({ images, onOpenModal }: TopPhotoSectionProps) {
    const visibleImages = images.slice(0, 3);
    const extraCount = images.length - 3;

    return (
        <div className="w-full flex h-[16.9375rem]">
            {/* 왼쪽 큰 사진 */}
            <div className="w-[16.4375rem] h-full overflow-hidden">
                <img src={visibleImages[0]} className="w-full h-full object-cover" />
            </div>

            {/* 오른쪽 두 장 */}
            <div className="flex flex-col">
                {visibleImages[1] && (
                <img
                    src={visibleImages[1]}
                    className="w-[8.125rem] h-[8.125rem] object-cover rounded"
                />
                )}
                {visibleImages[2] && (
                <div
                    className="relative w-[8.125rem] h-[8.8125rem] rounded overflow-hidden cursor-pointer"
                    onClick={onOpenModal}
                >
                    <img src={visibleImages[2]} className="w-full h-full object-cover" />
                    {extraCount > 0 && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-[0.875rem] font-medium">
                        +{extraCount}
                    </div>
                    )}
                </div>
                )}
            </div>
        </div>
    );
}
