import CommonCard from "../../../../components/card/CommonCard";

interface CouponCardProps {
    imageSrc: string;
    storeName: string;       // ex) 카페 위니
    title: string;           // ex) 아메리카노 200원 할인쿠폰
    description: string;     // ex) 발급 후 14일 동안 사용 가능
    onDownload: () => void;
}

const CouponCard = ({
    imageSrc,
    storeName,
    title,
    description,
    onDownload,
}: CouponCardProps) => {
    return (
        <CommonCard
        padding="p-4"
        className="flex items-center justify-between bg-white border-[0.03125rem] border-[#DFDFDF]"
        >
        <div className="flex items-center overflow-hidden">
            <img
            src={imageSrc}
            alt="쿠폰 이미지"
            className="w-[3.875rem] h-[3.875rem] rounded-full object-cover" // 62×62px
            />
            <div className="ml-[1rem] flex flex-col">
            <span className="text-[0.75rem] font-normal text-[#6970F3]">
                {storeName}
            </span>
            <span className="mt-[0.75rem] text-[1rem] font-semibold text-[#000000] leading-[1.25rem]">
                {title}
            </span>
            <span className="mt-[0.5rem] text-[0.875rem] font-normal text-[#7F7F7F] leading-[1.125rem]">
                {description}
            </span>
            </div>
        </div>

        <button onClick={onDownload} className="ml-[1rem] shrink-0">
            <img
            src="/src/assets/images/Download.svg"
            alt="쿠폰 다운로드"
            className="w-[1.5rem] h-[1.5rem]"
            />
        </button>
        </CommonCard>
    );
};

export default CouponCard;
