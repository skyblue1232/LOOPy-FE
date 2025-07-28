export interface AlarmCardData {
  AlarmContent: string;
  isRead: boolean;
  createdAt: string; // ISO 8601 형식 날짜
}

export const mockAlarmData: AlarmCardData[] = [
  {
    AlarmContent:
      '카페 위니에서 스탬프를 적립하셨군요!\n리뷰도 작성해보시겠어요? ',
    isRead: false,
    createdAt: '2025-07-21T08:00:00Z',
  },
  {
    AlarmContent:
      '카페 위니에서 스탬프를 적립하셨군요!\n리뷰도 작성해보시겠어요? ',
    isRead: false,
    createdAt: '2025-07-21T08:00:00Z',
  },
  {
    AlarmContent:
      '카페 위니에서 스탬프를 적립하셨군요!\n리뷰도 작성해보시겠어요? ',
    isRead: false,
    createdAt: '2025-07-16T08:00:00Z',
  },
  {
    AlarmContent:
      '카페 위니에서 스탬프를 적립하셨군요!\n리뷰도 작성해보시겠어요?',
    isRead: false,
    createdAt: '2025-07-19T01:00:00Z',
  },
  {
    AlarmContent:
      '카페 위니에서 스탬프를 적립하셨군요!\n리뷰도 작성해보시겠어요?',
    isRead: true,
    createdAt: '2025-07-15T12:00:00Z',
  },
  {
    AlarmContent:
      '카페 위니에서 스탬프를 적립하셨군요!\n리뷰도 작성해보시겠어요?',
    isRead: true,
    createdAt: '2025-07-07T12:00:00Z',
  },
  {
    AlarmContent:
      '카페 위니에서 스탬프를 적립하셨군요!\n리뷰도 작성해보시겠어요?',
    isRead: true,
    createdAt: '2025-07-06T12:00:00Z',
  },
  {
    AlarmContent:
      '카페 위니에서 스탬프를 적립하셨군요!\n리뷰도 작성해보시겠어요?',
    isRead: true,
    createdAt: '2025-07-04T12:00:00Z',
  },
];
