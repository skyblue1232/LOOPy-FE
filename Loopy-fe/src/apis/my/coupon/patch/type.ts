export interface CouponTemplate {
  id: number;
  cafeId: number;
  name: string;
  discountType: string; 
  discountValue: number;
  applicableMenuId: number;
  validDays: number;
  isActive: boolean;
  expiredAt: string;
  createdAt: string;
}

export interface MyCoupon {
  id: number;
  userId: number;
  couponTemplateId: number;
  acquisitionType: string;
  status: string; 
  issuedAt: string;
  usedAt: string | null;
  expiredAt: string;
  couponTemplate: CouponTemplate;
}

export interface UseMyCouponResponse {
  message: string;
  coupon: MyCoupon;
}
