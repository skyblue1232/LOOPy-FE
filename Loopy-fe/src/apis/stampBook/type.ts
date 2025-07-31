export interface Cafe {
  id: number;
  name: string;
  address: string;
}

export interface StampBook {
  id: number;
  cafe: Cafe;
  currentCount: number;
  goalCount: number;
  status: string;
  expiredAt: string;
}
