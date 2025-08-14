export interface AvailableChallenge {
  id: number;
  title: string;
  thumbnailUrl: string;
  startDate: string;
  endDate: string;
  isJoined: boolean;
}

export interface AvailableChallengesResponse {
  resultType: 'SUCCESS' | 'FAILURE' | string;
  data: AvailableChallenge[];
}
