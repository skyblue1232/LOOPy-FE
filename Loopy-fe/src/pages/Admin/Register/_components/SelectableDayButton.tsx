interface SelectableDayButtonProps {
    label: string;
    selected: boolean;
    onClick: () => void;
}

export default function SelectableDayButton({
    label,
    selected,
    onClick,
}: SelectableDayButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                text-[0.875rem] leading-[100%] font-normal
                px-[0.75rem] py-[0.625rem] rounded-[0.25rem] border
                ${selected
                ? 'text-[#6970F3] bg-[#F0F1FE] border-[#6970F3]'
                : 'text-[#252525] bg-white border-[#A5A5A5]'
                }
            `}
        >
            {label}
        </button>
    );
}
