export interface BusinessHour {
  day: 
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY"
    | "SUNDAY";
  isClosed: boolean;
  openTime: string;    
  closeTime: string;   
  breakStart: string | null; 
  breakEnd: string | null;  
}

export interface UpdateOwnerCafeOperationPayload {
  businessHourType: 
    | "SAME_ALL_DAYS"  
    | "WEEKDAY_WEEKEND" 
    | "EACH_DAY_DIFFERENT"; 
  businessHours: BusinessHour[];
  breakTime: string | null; 
  keywords: string[];
  storeFilters: string[];
  takeOutFilters: string[];
  menuFilters: string[];
}

export interface UpdateOwnerCafeOperationResponse {
  message: string;
  cafe: {
    id: number;
    name: string;
    businessHourType: string;
    businessHours: BusinessHour[];
    breakTime: string | null;
    storeFilters: string[];
    takeOutFilters: string[];
    menuFilters: string[];
    keywords: string[];
  };
}
