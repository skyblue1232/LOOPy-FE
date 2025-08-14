import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleBookmark as toggleBookmarkApi } from '../../../apis/bookmark/api';

interface ToggleBookmarkVars {
  cafeId: string | number;
  newState: boolean;
}

export const useToggleBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation<void, unknown, ToggleBookmarkVars>({
    mutationFn: async ({ cafeId }) => {
      await toggleBookmarkApi(String(cafeId));
    },
    onSuccess: (_, { cafeId, newState }) => {
      const id = String(cafeId);

      // Detail 페이지 캐시
      queryClient.setQueryData(['cafeDetail', id], (old: any) =>
        old ? { ...old, bookmark: { ...old.bookmark, isBookmarked: newState } } : old
      );

      // MapPage 단일 카페 상세 캐시
      queryClient.setQueryData(['mapCafeDetail', id], (old: any) =>
        old ? { ...old, isBookmarked: newState } : old
      );

      // SearchPage / MapPage 리스트 캐시
      queryClient.setQueriesData({ queryKey: ['cafeList'] }, (old: any) => {
        if (!old?.success?.data) return old;
        return {
          ...old,
          success: {
            ...old.success,
            data: old.success.data.map((cafe: any) =>
              cafe.id === Number(cafeId) ? { ...cafe, isBookmarked: newState } : cafe
            ),
          },
        };
      });

      // 북마크 목록 캐시 (마이페이지 등)
      queryClient.setQueryData(['bookmarkedCafes'], (old: any) => {
        if (!Array.isArray(old)) return old;
        if (newState) {
          // 추가
          return [...old, { id: Number(cafeId) }];
        } else {
          // 제거
          return old.filter((cafe: any) => cafe.id !== Number(cafeId));
        }
      });
    },
  });
};
