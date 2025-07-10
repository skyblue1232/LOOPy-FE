export interface ChallengeCardData {
  challengeId: number;
  challengeMonth?: number;
  challengeName: string;
  challengeStartDate: string;
  challengeDoneDate: string;
  challengeImage: string;
  participating: boolean;
  challengeDescription: string;
  challengeDetail: string;
  challengeReward: string;
  storeList?: Store[];
}

export interface Store {
  name: string;
  address: string;
  imageUrl: string;
  distance: number;
}

export const challengeCardList: ChallengeCardData[] = [
  {
    challengeId: 1,
    challengeMonth: 7,
    challengeName: '친구와 함께하는 카공 챌린지',
    challengeStartDate: '2025.07.01',
    challengeDoneDate: '2025.07.31',
    challengeImage:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
    participating: true,
    challengeDescription: '친구와 함께 같은 날 카페에서\n3회 공부 인증하기',
    challengeDetail:
      '혼자보다 함께일 때, 루피는 더 오래 이어지고 집중도 더 길어져요.\n친구와 함께하는 카페 공부(카공) 시간, 이제 루피 챌린지로 기록해보세요.\n마음 맞는 친구와 함께 카페에 앉아 공부하고, 스탬프도 함께 쌓다 보면 어느새 나만의 루틴이 완성될 거예요.',
    challengeReward: '+ 300p',
    storeList: [
      {
        name: '카페 위니',
        address: '서울 서대문구 이화여대길 52',
        imageUrl:
          'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
        distance: 500,
      },
    ],
  },
  {
    challengeId: 2,
    challengeMonth: 0,
    challengeName: '친구와 함께하는 카공 챌린지',
    challengeStartDate: '2025.07.01',
    challengeDoneDate: '2025.07.31',
    challengeImage:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
    participating: true,
    challengeDescription: '친구와 함께 같은 날 카페에서\n3회 공부 인증하기',
    challengeDetail:
      '혼자보다 함께일 때, 루피는 더 오래 이어지고 집중도 더 길어져요.\n친구와 함께하는 카페 공부(카공) 시간, 이제 루피 챌린지로 기록해보세요.\n마음 맞는 친구와 함께 카페에 앉아 공부하고, 스탬프도 함께 쌓다 보면 어느새 나만의 루틴이 완성될 거예요.',
    challengeReward: '+ 300p',
    storeList: [
      {
        name: '카페 위니',
        address: '서울 서대문구 이화여대길 52',
        imageUrl:
          'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
        distance: 500,
      },
    ],
  },
  {
    challengeId: 3,
    challengeMonth: 7,
    challengeName: '친구와 함께하는 카공 챌린지',
    challengeStartDate: '2025.07.01',
    challengeDoneDate: '2025.07.31',
    challengeImage:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
    participating: false,
    challengeDescription: '친구와 함께 같은 날 카페에서\n3회 공부 인증하기',
    challengeDetail:
      '혼자보다 함께일 때, 루피는 더 오래 이어지고 집중도 더 길어져요.\n친구와 함께하는 카페 공부(카공) 시간, 이제 루피 챌린지로 기록해보세요.\n마음 맞는 친구와 함께 카페에 앉아 공부하고, 스탬프도 함께 쌓다 보면 어느새 나만의 루틴이 완성될 거예요.',
    challengeReward: '+ 300p',
    storeList: [
      {
        name: '카페 위니',
        address: '서울 서대문구 이화여대길 52',
        imageUrl:
          'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
        distance: 500,
      },
      {
        name: '카페 위니',
        address: '서울 서대문구 이화여대길 52',
        imageUrl:
          'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
        distance: 500,
      },
      {
        name: '카페 위니',
        address: '서울 서대문구 이화여대길 52',
        imageUrl:
          'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
        distance: 500,
      },
    ],
  },
  {
    challengeId: 4,
    challengeMonth: 0,
    challengeName: '친구와 함께하는 카공 챌린지',
    challengeStartDate: '2025.07.01',
    challengeDoneDate: '2025.07.31',
    challengeImage:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
    participating: true,
    challengeDescription: '친구와 함께 같은 날 카페에서\n3회 공부 인증하기',
    challengeDetail:
      '혼자보다 함께일 때, 루피는 더 오래 이어지고 집중도 더 길어져요.\n친구와 함께하는 카페 공부(카공) 시간, 이제 루피 챌린지로 기록해보세요.\n마음 맞는 친구와 함께 카페에 앉아 공부하고, 스탬프도 함께 쌓다 보면 어느새 나만의 루틴이 완성될 거예요.',
    challengeReward: '+ 300p',
    storeList: [
      {
        name: '카페 위니',
        address: '서울 서대문구 이화여대길 52',
        imageUrl:
          'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
        distance: 500,
      },
    ],
  },
  {
    challengeId: 5,
    challengeMonth: 7,
    challengeName: '친구와 함께하는 카공 챌린지',
    challengeStartDate: '2025.07.01',
    challengeDoneDate: '2025.07.31',
    challengeImage:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
    participating: false,
    challengeDescription: '친구와 함께 같은 날 카페에서\n3회 공부 인증하기',
    challengeDetail:
      '혼자보다 함께일 때, 루피는 더 오래 이어지고 집중도 더 길어져요.\n친구와 함께하는 카페 공부(카공) 시간, 이제 루피 챌린지로 기록해보세요.\n마음 맞는 친구와 함께 카페에 앉아 공부하고, 스탬프도 함께 쌓다 보면 어느새 나만의 루틴이 완성될 거예요.',
    challengeReward: '+ 300p',
    storeList: [
      {
        name: '카페 위니',
        address: '서울 서대문구 이화여대길 52',
        imageUrl:
          'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
        distance: 500,
      },
    ],
  },
  {
    challengeId: 6,
    challengeMonth: 7,
    challengeName: '친구와 함께하는 카공 챌린지',
    challengeStartDate: '2025.07.01',
    challengeDoneDate: '2025.07.31',
    challengeImage:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
    participating: false,
    challengeDescription: '친구와 함께 같은 날 카페에서\n3회 공부 인증하기',
    challengeDetail:
      '혼자보다 함께일 때, 루피는 더 오래 이어지고 집중도 더 길어져요.\n친구와 함께하는 카페 공부(카공) 시간, 이제 루피 챌린지로 기록해보세요.\n마음 맞는 친구와 함께 카페에 앉아 공부하고, 스탬프도 함께 쌓다 보면 어느새 나만의 루틴이 완성될 거예요.',
    challengeReward: '+ 300p',
    storeList: [
      {
        name: '카페 위니',
        address: '서울 서대문구 이화여대길 52',
        imageUrl:
          'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
        distance: 500,
      },
    ],
  },
  {
    challengeId: 7,
    challengeMonth: 7,
    challengeName: '친구와 함께하는 카공 챌린지',
    challengeStartDate: '2025.07.01',
    challengeDoneDate: '2025.07.31',
    challengeImage:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
    participating: false,
    challengeDescription: '친구와 함께 같은 날 카페에서\n3회 공부 인증하기',
    challengeDetail:
      '혼자보다 함께일 때, 루피는 더 오래 이어지고 집중도 더 길어져요.\n친구와 함께하는 카페 공부(카공) 시간, 이제 루피 챌린지로 기록해보세요.\n마음 맞는 친구와 함께 카페에 앉아 공부하고, 스탬프도 함께 쌓다 보면 어느새 나만의 루틴이 완성될 거예요.',
    challengeReward: '+ 300p',
    storeList: [
      {
        name: '카페 위니',
        address: '서울 서대문구 이화여대길 52',
        imageUrl:
          'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
        distance: 500,
      },
    ],
  },
  {
    challengeId: 8,
    challengeMonth: 7,
    challengeName: '친구와 함께하는 카공 챌린지',
    challengeStartDate: '2025.07.01',
    challengeDoneDate: '2025.07.31',
    challengeImage:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
    participating: false,
    challengeDescription: '친구와 함께 같은 날 카페에서\n3회 공부 인증하기',
    challengeDetail:
      '혼자보다 함께일 때, 루피는 더 오래 이어지고 집중도 더 길어져요.\n친구와 함께하는 카페 공부(카공) 시간, 이제 루피 챌린지로 기록해보세요.\n마음 맞는 친구와 함께 카페에 앉아 공부하고, 스탬프도 함께 쌓다 보면 어느새 나만의 루틴이 완성될 거예요.',
    challengeReward: '+ 300p',
    storeList: [
      {
        name: '카페 위니',
        address: '서울 서대문구 이화여대길 52',
        imageUrl:
          'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
        distance: 500,
      },
    ],
  },
];
