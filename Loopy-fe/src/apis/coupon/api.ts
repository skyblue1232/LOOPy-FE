import axiosInstance from "../axios";

interface IssueCouponRequest {
    cafeId: string;
    body: { id: number; validDays: number };
}

export const issueCoupon = async ({ cafeId, body }: IssueCouponRequest) => {
    const response = await axiosInstance.post(`/api/v1/cafes/${cafeId}/coupon`, body);
    return response.data;
};
