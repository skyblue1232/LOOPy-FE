import { useEffect, useState } from "react";
import CommonAdminButton from "../../../../../components/admin/button/CommonAdminButton";
import DaySelector from "./operation/DaySelector";
import TimeSection from "./operation/TimeSection";
import type { TimeSectionValues } from "./operation/TimeSection";
import type { DayTimeValue } from "./operation/WeekdayWeekendTimeInput";
import CafeKeywordSection from "./operation/CafeKeywordSection";
import CafeHashtagInput from "./operation/CafeHashtageInput";
import { useOwnerMyCafeOperation } from "../../../../../hooks/query/admin/setting/useOwnerOperation";
import type { BusinessHour } from "../../../../../apis/admin/setting/operation/type";

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

const dayMapEN2KO: Record<BusinessHour["day"], Day> = {
  MONDAY: "월",
  TUESDAY: "화",
  WEDNESDAY: "수",
  THURSDAY: "목",
  FRIDAY: "금",
  SATURDAY: "토",
  SUNDAY: "일",
};

const isWeekday = (d: BusinessHour["day"]) =>
  d === "MONDAY" || d === "TUESDAY" || d === "WEDNESDAY" || d === "THURSDAY" || d === "FRIDAY";

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

  const { data, isLoading, isError } = useOwnerMyCafeOperation();

  useEffect(() => {
    if (!data) return;

    const openDays = data.businessHours
      .filter((h) => !h.isClosed)
      .map((h) => dayMapEN2KO[h.day]);
    setSelectedDays(openDays);

    setHashtags(data.keywords ?? []);

    const { storeFilters = [], takeOutFilters = [], menuFilters = [] } = data.selectedKeywords ?? {};
    const merged = Array.from(new Set([...storeFilters, ...takeOutFilters, ...menuFilters]));
    setKeywordList(merged);

    const toUI = (t?: string | null) => (t ? t : "");
    const toBreakType = (
      s?: string | null,
      e?: string | null
    ): DayTimeValue["breakType"] => (s && e ? "있음" : "없음");

    if (data.businessHourType === "SAME_ALL_DAYS") {
      const anyOpen = data.businessHours.find((h) => !h.isClosed) ?? data.businessHours[0];
      setTimeSectionValues((prev) => ({
        ...prev,
        type: "all",
        all: {
          open: toUI(anyOpen.openTime),
          close: toUI(anyOpen.closeTime),
          breakType: toBreakType(anyOpen.breakStart, anyOpen.breakEnd),
          breakStart: toUI(anyOpen.breakStart),
          breakEnd: toUI(anyOpen.breakEnd),
        },
      }));
      return;
    }

    if (data.businessHourType === "WEEKDAY_WEEKEND") {
      const weekdayRef = data.businessHours.find((h) => isWeekday(h.day) && !h.isClosed);
      const weekendRef = data.businessHours.find((h) => !isWeekday(h.day) && !h.isClosed);
      setTimeSectionValues((prev) => ({
        ...prev,
        type: "weekdayWeekend",
        weekday: weekdayRef
          ? {
              open: toUI(weekdayRef.openTime),
              close: toUI(weekdayRef.closeTime),
              breakType: toBreakType(weekdayRef.breakStart, weekdayRef.breakEnd),
              breakStart: toUI(weekdayRef.breakStart),
              breakEnd: toUI(weekdayRef.breakEnd),
            }
          : { ...defaultDayTime },
        weekend: weekendRef
          ? {
              open: toUI(weekendRef.openTime),
              close: toUI(weekendRef.closeTime),
              breakType: toBreakType(weekendRef.breakStart, weekendRef.breakEnd),
              breakStart: toUI(weekendRef.breakStart),
              breakEnd: toUI(weekendRef.breakEnd),
            }
          : { ...defaultDayTime },
      }));
      return;
    }

    const byDayPatch: Record<Day, DayTimeValue> = { ...defaultByDay };
    for (const h of data.businessHours) {
      const k = dayMapEN2KO[h.day];
      byDayPatch[k] = {
        open: h.isClosed ? "" : toUI(h.openTime),
        close: h.isClosed ? "" : toUI(h.closeTime),
        breakType: h.isClosed ? "없음" : toBreakType(h.breakStart, h.breakEnd),
        breakStart: h.isClosed ? "" : toUI(h.breakStart),
        breakEnd: h.isClosed ? "" : toUI(h.breakEnd),
      };
    }
    setTimeSectionValues((prev) => ({
      ...prev,
      type: "byDay",
      byDay: byDayPatch,
    }));
  }, [data]);

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

  if (isLoading && !data) {
    return (
      <div className="w-full h-[10rem] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#6970F3] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  if (isError && !data) {
    return (
      <div className="rounded-lg bg-[#FDECEC] text-[#B00020] p-4">
        운영 정보를 불러오지 못했어요. 잠시 후 다시 시도해 주세요.
      </div>
    );
  }

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
