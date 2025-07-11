interface MenuCardProps {
    imageSrc: string;
    name: string;
    description: string;
    price: string;
}

export default function MenuCard({
    imageSrc,
    name,
    description,
    price,
}: MenuCardProps) {
    return (
        <div className="flex gap-[1rem]">
            <img
                src={imageSrc}
                alt={name}
                className="w-[7.25rem] h-[7.25rem] rounded-[0.5rem] object-cover" // 116px
            />
            <div className="flex flex-col justify-between flex-1">
                <div>
                <div className="text-[1rem] font-semibold text-black">{name}</div>
                <div className="mt-[0.75rem] text-[0.875rem] font-normal text-[#3B3B3B]">
                    {description}
                </div>
                </div>
                <div className="text-[1rem] font-semibold text-right text-black">{price}</div>
            </div>
        </div>
    );
}