import { useSearchParams } from "react-router-dom";
import { useCallback } from "react";

export const useFunnel = <T extends string>(initial: T) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const step = (searchParams.get("step") as T) ?? initial;

  const go = useCallback((next: T) => {
    setSearchParams({ step: next });
  }, [setSearchParams]);

  const back = useCallback((fallback: T) => {
    return () => setSearchParams({ step: fallback });
  }, [setSearchParams]);

  return { step, go, back };
};
