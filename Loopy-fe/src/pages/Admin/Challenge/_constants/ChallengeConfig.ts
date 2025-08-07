import TumblerChallengeImg from '../../../../assets/images/TumblerChallenge.svg?react';
import MorningCoffeeImg from '../../../../assets/images/MorningCoffee.svg?react';

export const CHALLENGE_CONFIG = {
  tumbler: {
    title: '지구를 지켜요! 텀블러 챌린지',
    image: TumblerChallengeImg,
    description: '일회용 컵 대신 텀블러를 사용하여\n지구를 지켜요!',
    period: '2025.08.15 ~ 2025.09.15',
  },
  coffee: {
    title: '아침 루틴! 모닝커피 챌린지',
    image: MorningCoffeeImg,
    description: '하루의 시작을 커피와 함께!\n아침 루틴을 만들어봐요.',
    period: '2025.09.01 ~ 2025.09.30',
  },
} as const;

export type ChallengeType = keyof typeof CHALLENGE_CONFIG;
