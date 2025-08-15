import { useEffect, useState } from "react";
import { useOwnerMyCafeOperation } from "../../../../../../../hooks/query/admin/setting/useOwnerOperation";
import type { TimeSectionValues } from "../TimeSection";
import type { Day } from "./constants";
import { defaultDayTime, makeDefaultByDay } from "./constants";
import { mapOwnerOperationToForm } from "./mapper";

export function useOwnerOperationForm() {
  const [selectedDays, setSelectedDays] = useState<Day[]>([]);
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [keywordList, setKeywordList] = useState<string[]>([]);
  const [timeSectionValues, setTimeSectionValues] = useState<TimeSectionValues>({
    type: "",
    all: { ...defaultDayTime },
    weekday: { ...defaultDayTime },
    weekend: { ...defaultDayTime },
    byDay: makeDefaultByDay(),
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const { data, isLoading, isError } = useOwnerMyCafeOperation();

  useEffect(() => {
    if (!data) return;
    const mapped = mapOwnerOperationToForm(data);
    setSelectedDays(mapped.selectedDays);
    setHashtags(mapped.hashtags);
    setKeywordList(mapped.keywordList);
    setTimeSectionValues(mapped.timeSectionValues);
  }, [data]);

  const submitLabel = isFormValid ? "수정 완료하기" : "수정하기";

  return {
    selectedDays, setSelectedDays,
    hashtags, setHashtags,
    keywordList, setKeywordList,
    timeSectionValues, setTimeSectionValues,
    isLoading, isError,
    isFormValid, setIsFormValid,
    submitLabel,
  };
}

