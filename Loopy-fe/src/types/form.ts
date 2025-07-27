export interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  phone: string;
  verifyCode: string;
  agreeTerms?: boolean; 
  agreePrivacy?: boolean;
}
