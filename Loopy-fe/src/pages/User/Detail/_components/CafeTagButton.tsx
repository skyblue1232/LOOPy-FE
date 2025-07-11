interface CafeTagButtonProps {
    label: string;
}

export default function CafeTagButton({ label }: CafeTagButtonProps) {
    return (
        <div className="px-[1.25rem] py-[0.5rem] border border-[#A8A8A8] rounded-full text-[0.875rem] font-medium text-[#333]">
            {label}
        </div>
    );
}
