import axiosInstance from '../../axios';

export const joinChallenge = async (challengeId: number, cafeId: number) => {
  const response = await axiosInstance.post(
    `/api/v1/cafes/${cafeId}/challenges/${challengeId}/participate`,
    { joinedCafeId: cafeId },
  );
  return response.data;
};
