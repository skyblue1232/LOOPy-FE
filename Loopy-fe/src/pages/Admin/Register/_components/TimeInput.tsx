interface TimeInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function TimeInput({ value, onChange, placeholder }: TimeInputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        // 숫자와 ":"만 허용, 최대 HH:MM 형태
        const isValid = /^(\d{0,2})(:?)(\d{0,2})$/.test(input);
        if (isValid) {
            onChange(input);
        }
    };
    
    return (
        <input
            type="text"
            value={value}
            placeholder={placeholder ?? '00:00'}
            onChange={handleChange}
            className="
                text-[1rem] font-semibold text-[#A8A8A8] leading-[100%] w-[6.25rem]
                px-[1.5rem] py-[0.75rem]
                rounded-[0.5rem] bg-white
                border border-white outline-none focus:border-[#6970F3] text-center
            "
        />
    );
}
