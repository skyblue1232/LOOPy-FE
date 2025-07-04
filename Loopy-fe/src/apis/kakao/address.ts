import kakaoInstance from "./kakaoInstance";
import type { KakaoPlace } from "../../types/location";

export const searchPlace = async (query: string): Promise<KakaoPlace[]> => {
  const { data } = await kakaoInstance.get("/search/keyword.json", {
    params: { query },
  });

  return data.documents
    .filter((place: any) => place.address_name)
    .map((place: any) => {
      const addressParts = place.address_name.split(" ");
      return {
        id: place.id,
        place_name: place.place_name,
        address_name: place.address_name,
        road_address_name: place.road_address_name,
        x: place.x,
        y: place.y,
        region_1depth_name: addressParts[0] ?? "",
        region_2depth_name: addressParts[1] ?? "",
        region_3depth_name: addressParts[2] ?? "",
      };
    });
};
