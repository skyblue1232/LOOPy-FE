import { useState, useMemo } from "react";

const days = ["일", "월", "화", "수", "목", "금", "토"];

interface BusinessHour {
    day: string; // ex) "월"
    time: string; // ex) "10:00 – 20:00 (19:30 라스트오더)"
}

interface BusinessTimeSectionProps {
    hours: BusinessHour[];
}

export default function BusinessTimeSection({ hours }: BusinessTimeSectionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const todayIndex = new Date().getDay();
    const today = days[todayIndex];

    const sortedHours = useMemo(() => {
        const todayIdx = hours.findIndex((h) => h.day === today);
        return [...hours.slice(todayIdx), ...hours.slice(0, todayIdx)];
    }, [hours, today]);

    return (
        <div>
        <div
            className="flex items-start justify-between text-[0.875rem] font-normal text-[#3B3B3B] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex items-center gap-[0.5rem]">
            <img src="/src/assets/images/Clock.svg" className="h-[1rem]" />
            <span>{sortedHours[0].day}</span>
            <span>{sortedHours[0].time}</span>
            </div>
            <img src="/src/assets/images/ArrowDown.svg" />
        </div>

        {isOpen && (
            <div className="mt-[0.5rem] text-[0.875rem] text-[#3B3B3B]">
            {sortedHours.map((item) => (
                <div key={item.day} className="mt-[0.25rem]">
                {item.day} {item.time}
                </div>
            ))}
            </div>
        )}
        </div>
    );
}
