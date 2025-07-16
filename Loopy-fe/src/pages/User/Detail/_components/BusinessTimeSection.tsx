import { useState, useMemo } from "react";
import ArrowDownIcon from "/src/assets/images/ArrowDown.svg?react";
import ArrowUpIcon from "/src/assets/images/ArrowUp.svg?react";
import ClockIcon from "/src/assets/images/Clock.svg?react";

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

    const todayHour = sortedHours[0];
    const restHours = sortedHours.slice(1); 

    const Icon = isOpen ? ArrowUpIcon : ArrowDownIcon;

    return (
        <div>
            <div
                className="flex items-start justify-between text-[0.875rem] font-normal text-[#3B3B3B] cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-[0.5rem]">
                    <ClockIcon className="h-[1rem]" />
                    <span>{todayHour.day}</span>
                    <span>{todayHour.time}</span>
                    <Icon className="w-[1rem] h-[1rem]" />
                </div>
            </div>

            {isOpen && (
                <div className="text-[0.875rem] font-normal text-[#3B3B3B]">
                    {restHours.map((item) => (
                        <div key={item.day} className="flex items-center gap-[0.5rem] pl-[1.5rem]">
                            <span>{item.day}</span>
                            <span>{item.time}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
