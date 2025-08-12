import axiosInstance from '../axios';

export type MapCafeDetail = {
  address: string;
  images: string[];
  keywords: string[];
};

function toMapCafeDetail(raw: any): MapCafeDetail {
  const cafe = raw?.success?.cafe ?? raw?.cafe ?? raw ?? {};
  const photos = raw?.success?.photos ?? raw?.photos ?? cafe?.photos ?? [];
  const keywords = cafe?.keywords ?? raw?.keywords ?? [];

  return {
    address: cafe?.address ?? raw?.address ?? '',
    images: Array.isArray(photos)
      ? photos
          .map((p: any) => p?.photoUrl || p?.url || '')
          .filter(Boolean)
      : [],
    keywords: Array.isArray(keywords) ? keywords : [],
  };
}

export async function getMapCafeDetail(cafeId: number): Promise<MapCafeDetail> {
  const { data } = await axiosInstance.get(`/api/v1/search/${cafeId}`);
  return toMapCafeDetail(data);
}
