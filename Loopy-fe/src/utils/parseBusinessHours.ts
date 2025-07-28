export interface BusinessHour {
  day: string;
  time: string;
}

/**
 * 예: "평일 07:00-22:00, 주말 08:00-23:00"
 * ⬇
 * [{ day: "평일", time: "07:00-22:00" }, { day: "주말", time: "08:00-23:00" }]
 */
export const parseBusinessHours = (text: string): BusinessHour[] => {
    return text
    .split(',')
    .map((part) => part.trim())
    .map((entry) => {
        const [day, ...rest] = entry.split(' ');
        return {
            day,
            time: rest.join(' '), // ex: "07:00–22:00"
        };
    });
};
