import axiosInstance from "../axios";

export const toggleCafeNotification = async (cafeId: string) => {
  const { data } = await axiosInstance.post(`/api/v1/cafes/${cafeId}/alram`);
  return data;
};