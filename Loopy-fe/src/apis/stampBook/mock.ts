import type { StampBook } from './type';

export const stampBookListMock: StampBook[] = [
  {
    id: 1,
    cafe: {
      id: 101,
      name: 'Coffee Factory',
      address: '서울특별시 강남구 테헤란로 123',
    },
    currentCount: 5,
    goalCount: 10,
    status: 'active',
    expiredAt: '2025-12-31T23:59:59.000Z',
  },
  {
    id: 2,
    cafe: {
      id: 102,
      name: 'Bean Brothers',
      address: '서울특별시 마포구 월드컵북로 45',
    },
    currentCount: 3,
    goalCount: 8,
    status: 'active',
    expiredAt: '2025-10-15T23:59:59.000Z',
  },
  {
    id: 3,
    cafe: {
      id: 103,
      name: 'Cafe Latte',
      address: '서울특별시 종로구 삼일대로 77',
    },
    currentCount: 7,
    goalCount: 7,
    status: 'completed',
    expiredAt: '2025-07-30T23:59:59.000Z',
  },
];
