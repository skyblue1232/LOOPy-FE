import { useState } from "react";
import CommonAdminButton from "../../../../../components/admin/button/CommonAdminButton";
import DaySelector from "./operation/DaySelector";
import TimeSection from "./operation/TimeSection";
import type { TimeSectionValues } from "./operation/TimeSection";
import type { DayTimeValue } from "./operation/WeekdayWeekendTimeInput";
import CafeKeywordSection from "./operation/CafeKeywordSection";
import CafeHashtagInput from "./operation/CafeHashtageInput";

type Day = "월" | "화" | "수" | "목" | "금" | "토" | "일";

const defaultDayTime: DayTimeValue = {
  open: "",
  close: "",
  breakType: "없음",
  breakStart: "",
  breakEnd: "",
};

const defaultByDay: Record<Day, DayTimeValue> = {
  "월": { ...defaultDayTime },
  "화": { ...defaultDayTime },
  "수": { ...defaultDayTime },
  "목": { ...defaultDayTime },
  "금": { ...defaultDayTime },
  "토": { ...defaultDayTime },
  "일": { ...defaultDayTime },
};

const OperationInfoTab = () => {
  const [selectedDays, setSelectedDays] = useState<Day[]>([]);
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [keywordList, setKeywordList] = useState<string[]>([]);

  const [timeSectionValues, setTimeSectionValues] = useState<TimeSectionValues>({
    type: "",
    all: { ...defaultDayTime },
    weekday: { ...defaultDayTime },
    weekend: { ...defaultDayTime },
    byDay: { ...defaultByDay },
  });

  function timeSectionIsValid(values: TimeSectionValues) {
    if (values.type === "all") {
      return (
        !!values.all.open &&
        !!values.all.close &&
        (values.all.breakType === "없음" ||
          (!!values.all.breakStart && !!values.all.breakEnd))
      );
    }
    if (values.type === "weekdayWeekend") {
      return (
        !!values.weekday.open && !!values.weekday.close &&
        (values.weekday.breakType === "없음" ||
          (!!values.weekday.breakStart && !!values.weekday.breakEnd)) &&
        !!values.weekend.open && !!values.weekend.close &&
        (values.weekend.breakType === "없음" ||
          (!!values.weekend.breakStart && !!values.weekend.breakEnd))
      );
    }
    if (values.type === "byDay") {
      return Object.values(values.byDay).every(v =>
        !!v.open && !!v.close &&
        (v.breakType === "없음" || (!!v.breakStart && !!v.breakEnd))
      );
    }
    return false;
  }

  const isFormValid =
    selectedDays.length > 0 &&
    hashtags.length > 0 && hashtags.length <= 2 &&
    keywordList.length > 0 &&
    timeSectionIsValid(timeSectionValues);

  const submitLabel = isFormValid ? "수정 완료하기" : "수정하기";

  return (
    <div>
      <div className="font-bold text-[1.25rem] mb-10">
        우리 매장의 운영정보를 입력해주세요
      </div>
      <div className="flex flex-col gap-12">
        <DaySelector selectedDays={selectedDays} setSelectedDays={setSelectedDays} />

        <TimeSection values={timeSectionValues} setValues={setTimeSectionValues} />

        <CafeHashtagInput hashtags={hashtags} setHashtags={setHashtags} />
        <CafeKeywordSection
          keywordList={keywordList}
          setKeywordList={setKeywordList}
        />

        <CommonAdminButton label={submitLabel} disabled={!isFormValid} />
      </div>
    </div>
  );
};

export default OperationInfoTab;
