export type BasicInfoState = {
  storeName: string;
  ownerName: string;
  address: string;
  detailAddress: string;
  phone: string;
  sns: string;
  description: string;
  photos: File[];
};

export type AdminSettingContext = {
  basicInfo: BasicInfoState;
};

export type AdminSettingSteps = {
  setting: AdminSettingContext;
  editProfile: AdminSettingContext;
  manageAccount: AdminSettingContext;
};
