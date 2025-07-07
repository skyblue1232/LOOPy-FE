interface Props {
    imageSrc: string; 
    monthLabel: string; 
    title: string; // 제목
    description: string; // 설명
    onClick: () => void; // 버튼 클릭 시 실행될 이벤트
}

const EventCard = ({ imageSrc, monthLabel, title, description, onClick }: Props) => {
    return (
        <div className="flex items-center justify-between bg-[#F6F6FF] rounded-[0.75rem] h-[6.5rem] px-[1rem] py-[1rem] pt-[0.75rem] w-full">
            <div className="flex items-center">
                <img
                src={imageSrc}
                alt="이벤트 이미지"
                className="w-[3.875rem] h-[3.875rem] rounded-full object-cover"
                />

                <div className="ml-[1rem] flex flex-col">
                <span className="text-[0.75rem] font-normal text-[#6970F3]">
                    {monthLabel}
                </span>
                <span className="mt-[0.75rem] text-[1rem] font-semibold text-[#000000] leading-[1.25rem] truncate">
                    {title}
                </span>
                <span className="mt-[0.5rem] text-[0.875rem] font-normal text-[#7F7F7F] leading-[1.125rem]">
                    {description}
                </span>
                </div>
            </div>

            <button onClick={onClick} className="ml-[1rem]">
                <img
                src="src/assets/images/ArrowRight.svg" 
                alt="이동 버튼"
                className="w-[1rem] h-[1rem]"
                />
            </button>
        </div>
    );
};

export default EventCard;
