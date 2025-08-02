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
  status: 'active' | 'completed' | 'expired';
  expiredAt: string;
}

export interface StampBookListResponse {
  message: string;
  data: StampBook[];
}
