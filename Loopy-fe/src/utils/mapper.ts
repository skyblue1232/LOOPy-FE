import type { SignupRequest } from "../apis/signin/type";
import type { FormData } from "../types/form";

export const mapFormDataToSignupRequest = (
  formData: FormData
): SignupRequest => ({
  email: formData.email,
  password: formData.password,
  nickname: formData.nickname,
  phoneNumber: formData.phone.replaceAll("-", ""),
  role: "CUSTOMER", 
  allowKakaoAlert: true,
  agreements: {
    termsAgreed: true,
    privacyPolicyAgreed: true,
    marketingAgreed: false,
    locationPermission: true,
  },
});
