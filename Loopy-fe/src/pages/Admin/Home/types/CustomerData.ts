export type Coupon = {
  id: number;
  expiry: string;
  title: string;
};

export type Challenge = {
  id: number;
  expiry: string;
  title: string;
};

export type Customer = {
  userId: number;
  name: string;
  points: number;
  stamps: number;
  coupons: Coupon[];
  challenges: Challenge[];
};
