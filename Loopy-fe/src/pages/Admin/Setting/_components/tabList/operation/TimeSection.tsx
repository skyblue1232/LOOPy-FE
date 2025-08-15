import { useEffect } from "react";
import CheckCircle from "../../../../../User/Signin/_components/CheckCircle";
import AllDayTimeInput from "./AllDayTimeInput";
import WeekdayWeekendTimeInput from "./WeekdayWeekendTimeInput";
import ByDayTimeInput, { type Day } from "./ByDayTimeInput";

export type TimeOption = "all" | "weekdayWeekend" | "byDay" | "";
export interface TimeSectionValues {
  type: TimeOption;
  all: { open: string; close: string; breakType: "있음" | "없음"; breakStart: string; breakEnd: string };
  weekday: { open: string; close: string; breakType: "있음" | "없음"; breakStart: string; breakEnd: string };
  weekend: { open: string; close: string; breakType: "있음" | "없음"; breakStart: string; breakEnd: string };
  byDay: Record<string, { open: string; close: string; breakType: "있음" | "없음"; breakStart: string; breakEnd: string }>;
}

interface TimeSectionProps {
  values: TimeSectionValues;
  setValues: React.Dispatch<React.SetStateAction<TimeSectionValues>>;
  selectedDays: string[];
  setValid: (valid: boolean) => void; 
}

const TimeSection = ({ values, setValues, selectedDays, setValid }: TimeSectionProps) => {
  const handleOption = (option: TimeOption) => {
    setValues(prev => ({
      ...prev,
      type: prev.type === option ? "" : option,
    }));
  };

  const isTimeValueComplete = (time: TimeSectionValues["all"]) => {
    if (!time.open || !time.close) return false;
    if (time.breakType === "있음") {
      return !!time.breakStart && !!time.breakEnd;
    }
    return true;
  };

  useEffect(() => {
    let valid = false;

    if (values.type === "all") {
      valid = isTimeValueComplete(values.all);
    } 
    else if (values.type === "weekdayWeekend") {
      valid = isTimeValueComplete(values.weekday) && isTimeValueComplete(values.weekend);
    } 
    else if (values.type === "byDay") {
      valid = selectedDays.length > 0 && selectedDays.every(day => isTimeValueComplete(values.byDay[day]));
    }

    setValid(valid);
  }, [values, selectedDays, setValid]);

  return (
    <div>
      <div className="font-semibold text-[1rem] mb-2">영업시간</div>
      <div className="flex gap-6 mb-4">
        <button
          type="button"
          className="flex items-center gap-2"
          onClick={() => handleOption("all")}
        >
          <CheckCircle checked={values.type === "all"} />
          <span
            className={`text-[1rem] font-medium ${values.type === "all" ? "text-[#6970F3]" : "text-[#222]"}`}
          >
            모든 영업일 같아요
          </span>
        </button>
        <button
          type="button"
          className="flex items-center gap-2"
          onClick={() => handleOption("weekdayWeekend")}
        >
          <CheckCircle checked={values.type === "weekdayWeekend"} />
          <span
            className={`text-[1rem] font-medium ${values.type === "weekdayWeekend" ? "text-[#6970F3]" : "text-[#222]"}`}
          >
            평일/주말 달라요
          </span>
        </button>
        <button
          type="button"
          className="flex items-center gap-2"
          onClick={() => handleOption("byDay")}
        >
          <CheckCircle checked={values.type === "byDay"} />
          <span
            className={`text-[1rem] font-medium ${values.type === "byDay" ? "text-[#6970F3]" : "text-[#222]"}`}
          >
            요일별로 달라요
          </span>
        </button>
      </div>

      {values.type === "all" && (
        <AllDayTimeInput
          value={values.all}
          onChange={v => setValues(prev => ({ ...prev, all: v }))}
        />
      )}

      {values.type === "weekdayWeekend" && (
        <WeekdayWeekendTimeInput
          value={{
            weekday: values.weekday,
            weekend: values.weekend,
          }}
          onChange={updated =>
            setValues(prev => ({ ...prev, ...updated }))
          }
        />
      )}

      {values.type === "byDay" && (
        <ByDayTimeInput
          selectedDays={selectedDays as Day[]}
          value={values.byDay}
          onChange={v => setValues(prev => ({ ...prev, byDay: v }))}
        />
      )}
    </div>
  );
};

export default TimeSection;
