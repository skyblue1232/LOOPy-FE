import CheckCircle from '../../../User/Signin/_components/CheckCircle';

interface SelectableItemProps {
    label: string;
    selected: boolean;
    onClick: () => void;
}

export default function SelectableItem({
    label,
    selected,
    onClick,
}: SelectableItemProps) {
    return (
        <button
        type="button"
        onClick={onClick}
        className="flex items-center gap-[0.5rem]"
        >
            <CheckCircle checked={selected} />
            <span
                className={`text-[1rem] font-medium leading-[100%] ${
                selected ? 'text-[#6970F3]' : 'text-black'
                }`}
            >
                {label}
            </span>
        </button>
    );
}
