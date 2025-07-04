import { useCallback, useMemo, useState } from "react";
import { searchPlace } from "../apis/kakao/address";
import { normalizeRegion, generateRegionKey } from "../utils/region";
import type { KakaoPlace } from "../types/location";

export const useSearchRegion = () => {
  const [input, setInput] = useState("");
  const [rawResults, setRawResults] = useState<KakaoPlace[]>([]);
  const [selected, setSelected] = useState<KakaoPlace | null>(null);

  const handleSearch = useCallback(async () => {
    if (!input.trim()) return;
    const data = await searchPlace(input);
    setRawResults(data);
    setSelected(null);
  }, [input]);

  const filteredResults = useMemo(() => {
    const keyword = normalizeRegion(input);
    if (!keyword) return [];

    const unique = new Map<string, KakaoPlace>();

    rawResults.forEach((place) => {
      const { region_1depth_name, region_2depth_name, region_3depth_name } = place;
      if (!(region_1depth_name && region_2depth_name && region_3depth_name)) return;

      const fullRegion = normalizeRegion(`${region_1depth_name}${region_2depth_name}${region_3depth_name}`);
      const partialRegion = normalizeRegion(`${region_1depth_name}${region_2depth_name}`);
      const key = generateRegionKey(place);

      const isPartialMatch =
        fullRegion.includes(keyword) ||
        partialRegion.includes(keyword) ||
        keyword.includes(partialRegion);
      const isExactMatch = fullRegion === keyword;

      if ((isPartialMatch || isExactMatch) && !unique.has(key)) {
        unique.set(key, place);
      }
    });

    return Array.from(unique.values()).slice(0, 5);
  }, [input, rawResults]);

  return {
    input,
    setInput,
    selected,
    setSelected,
    handleSearch,
    filteredResults,
  };
};
