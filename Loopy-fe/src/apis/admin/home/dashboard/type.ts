export interface DailyStampCount {
  date: string;
  count: number;
}

export interface StampStats {
  todayStampCount: number;
  thisWeekStampCount: number;
  totalStampCount: number;
  uniqueUserCount: number;
  rewardGivenCount: number;
  dailyStampCounts: DailyStampCount[];
}

export interface StampStatsResponse {
  message: string;
  data: StampStats;
}
