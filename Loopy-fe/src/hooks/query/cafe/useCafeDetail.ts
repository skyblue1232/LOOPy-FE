import { useQuery } from '@tanstack/react-query';
import { getCafeDetail } from '../../../apis/cafeDetail/api';
import type { CafeDetailResponse } from '../../../apis/cafeDetail/type';
import { cafeDetailMock } from '../../../mock/cafeDetailMock';
import type { CafeDetailSuccess } from '../../../apis/cafeDetail/type';

export function useCafeDetailQuery(
  cafeId: number | null,
  coords?: { x?: number; y?: number },
  enabled = true
) {
  return useQuery<CafeDetailSuccess>({
    queryKey: ['cafe-detail', String(cafeId ?? ''), coords?.x ?? null, coords?.y ?? null],
    enabled: enabled && !!cafeId,
    staleTime: 30_000,
    queryFn: async () => {
      if (!cafeId) throw new Error('no cafeId');
      try {
        const id = String(cafeId);
        const res = (await getCafeDetail(id)) as CafeDetailResponse | CafeDetailSuccess;
        return ('success' in res ? res.success : res) as CafeDetailSuccess; // ✅ 언랩
      } catch (e) {
        console.warn('getCafeDetail failed; use mock', e);
        return cafeDetailMock;
      }
    },
  });
}
