import { useSearchParams } from "react-router-dom";
import { useCallback } from "react";

export const useFunnel = <T extends string>(
  initial: T,
  queryKey: string = "step"
) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const step = (searchParams.get(queryKey) as T) ?? initial;

  const go = useCallback(
    (next: T) => {
      setSearchParams({ [queryKey]: next });
    },
    [setSearchParams, queryKey]
  );

  const back = useCallback(
    (fallback: T) => {
      return () => setSearchParams({ [queryKey]: fallback });
    },
    [setSearchParams, queryKey]
  );

  return { step, go, back };
};
