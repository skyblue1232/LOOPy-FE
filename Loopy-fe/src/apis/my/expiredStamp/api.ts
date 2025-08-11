import axiosInstance from "../../axios";

export const postExpiringStampBook = async (id: number): Promise<void> => {
  try {
    await axiosInstance.post(`/api/v1/users/me/stampbooks/expiring`, { id });
  } catch (error) {
    console.error("스탬프북 POST 실패:", error);
    throw error;
  }
};
