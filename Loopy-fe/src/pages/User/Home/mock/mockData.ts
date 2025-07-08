export interface StampItem {
  imageUrl: string;
  cafeName: string;
  address: string;
  stampCount: number;
  stampMax: number;
  dueDate: string;
}

export interface ProfileCardData {
  username: string;
  level: string;
  imageUrl?: string;
  receivedStamps: number;
  ongoingChallenges: number;
  totalStamps: number;
  points: number;
}

export interface ChallengeCardData {
  challengeName: string;
  challengeImage: string;
}

export const stampList: StampItem[] = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
    cafeName: '카페 위니',
    address: '서울 서대문구 이화여대길 52',
    stampCount: 5,
    stampMax: 10,
    dueDate: '10/7',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
    cafeName: '카페 위니',
    address: '서울 서대문구 이화여대길 52',
    stampCount: 2,
    stampMax: 10,
    dueDate: '11/15',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
    cafeName: '카페 위니',
    address: '서울 서대문구 이화여대길 52',
    stampCount: 4,
    stampMax: 10,
    dueDate: '7/30',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
    cafeName: '카페 위니',
    address: '서울 서대문구 이화여대길 52',
    stampCount: 8,
    stampMax: 10,
    dueDate: '8/15',
  },
];

export const profileCardData: ProfileCardData = {
  username: '루피25',
  level: '호기심 많은 탐색가',
  imageUrl:
    'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
  receivedStamps: 5,
  ongoingChallenges: 2,
  totalStamps: 10,
  points: 100,
};

export const challengeCardList: ChallengeCardData[] = [
  {
    challengeName: '지구를 지켜요!\n텀블러 챌린지',
    challengeImage:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
  },
  {
    challengeName: '지구를 지켜요!\n텀블러 챌린지',
    challengeImage:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
  },
  {
    challengeName: '지구를 지켜요!\n텀블러 챌린지',
    challengeImage:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
  },
  {
    challengeName: '지구를 지켜요!\n텀블러 챌린지',
    challengeImage:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
  },
  {
    challengeName: '지구를 지켜요!\n텀블러 챌린지',
    challengeImage:
      'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=400&q=80',
  },
];
