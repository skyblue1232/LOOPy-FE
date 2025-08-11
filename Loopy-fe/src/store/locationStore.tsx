import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import type { KakaoPlace } from '../types/location';
import { generateRegionKey, normalizeRegion } from '../utils/region';

export interface SelectedLocation {
  region: string;    // 예: "서울 강남구"
  regionKey: string; // generateRegionKey(place)
  lat: number;
  lng: number;
  updatedAt: number;
}

interface LocationCtx {
  selected: SelectedLocation | null;
  shouldApplyOnMap: boolean; // 리스트에서 위치 설정 후 지도에서 1회만 적용
  applyFromPlace: (place: KakaoPlace) => void;
  reset: () => void;               // 위치 초기화 (→ "위치를 설정해주세요")
  markAppliedOnMap: () => void;    // 지도에서 반영 완료 처리
}

const LocationContext = createContext<LocationCtx | null>(null);


/** Kakao 결과에서 표시용 지역 문자열 얻기 */
function getRegionText(place: KakaoPlace): string {
  // 프로젝트 유틸: normalizeRegion(place) 반환 타입에 맞춰 처리
  const n = (normalizeRegion as any)(place);
  if (typeof n === 'string') return n;            // ex) "서울 강남구 역삼동"
  if (n && typeof n.region === 'string') return n.region;
  // 유틸이 없거나 실패 시 fallback
  if ('address_name' in (place as any)) return (place as any).address_name as string;
  return '';
}

/** Kakao 결과에서 위경도 얻기 (x=lng, y=lat) */
function getLatLng(place: KakaoPlace): { lat: number; lng: number } {
  if ('lat' in (place as any) && 'lng' in (place as any)) {
    const p = place as any;
    return { lat: Number(p.lat), lng: Number(p.lng) };
  }
  const p = place as any; // Kakao 원형: x=lng, y=lat (문자열)
  return {
    lat: typeof p.y === 'string' ? parseFloat(p.y) : Number(p.y),
    lng: typeof p.x === 'string' ? parseFloat(p.x) : Number(p.x),
  };
}

export function LocationProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<SelectedLocation | null>(null);
  const [shouldApplyOnMap, setShouldApplyOnMap] = useState(false);

  const value = useMemo<LocationCtx>(() => ({
    selected,
    shouldApplyOnMap,
    applyFromPlace: (place) => {
      const regionKey = generateRegionKey(place);
      const region    = getRegionText(place);
      const { lat, lng } = getLatLng(place);

      setSelected({
        region,
        regionKey,
        lat,
        lng,
        updatedAt: Date.now(),
      });
      setShouldApplyOnMap(true);
    },
    reset: () => {
      setSelected(null);
      setShouldApplyOnMap(false);
    },
    markAppliedOnMap: () => setShouldApplyOnMap(false),
  }), [selected, shouldApplyOnMap]);

  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
}

export const useSelectedLocationStore = () => {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error('useSelectedLocationStore must be used within LocationProvider');
  return ctx;
};
