export interface Cafe {
  id: number;
  name: string;
  address: string;
  businessHours: Record<string, string>;
  phone: string;
  websiteUrl: string;
  description: string;
  keywords: string[];
  storeFilters: Record<string, boolean>;
  takeOutFilters: Record<string, boolean>;
  menuFilters: Record<string, boolean>;
}

export interface CafePhoto {
  id: number;
  url: string;
  displayOrder: number;
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
  isSoldOut: boolean;
}

export interface Coupon {
  id: number;
  name: string;
  validDays: number;
  discountType: 'fixed' | 'percentage';
  discountValue: number;
  applicableMenu: string | null;
  expiredAt: string;
}

export interface StampBook {
  id: number;
  stampBookId: number;
  currentCount: number;
  goalCount: number;
  expiresAt: string;
}

export interface Bookmark {
  isBookmarked: boolean;
}

export interface CafeDetailSuccess {
  cafe: Cafe;
  photos: CafePhoto[];
  menu: MenuItem[];
  coupons: Coupon[];
  stampBook: StampBook;
  bookmark: Bookmark;
}

export interface CafeDetailResponse {
  resultType: 'SUCCESS' | 'FAILURE';
  error: any;
  success: CafeDetailSuccess;
}
