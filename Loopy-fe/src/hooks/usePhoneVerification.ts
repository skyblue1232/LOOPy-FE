import { useState, useMemo } from "react";

export const usePhoneVerification = (phone: string, verifyCode: string) => {
  const phoneRegex = /^01[016789]-\d{3,4}-\d{4}$/;
  const codeRegex = /^\d{4,6}$/;

  const [isRequested, setIsRequested] = useState(false);
  const [verifyError, setVerifyError] = useState(false);

  const isPhoneValid = useMemo(() => phoneRegex.test(phone.trim()), [phone]);
  const isCodeValid = useMemo(
    () => codeRegex.test(verifyCode.trim()) && !verifyError,
    [verifyCode, verifyError]
  );

  const isFormValid = isPhoneValid && isCodeValid;

  const requestCode = () => {
    if (!isPhoneValid) return;
    setIsRequested(true);
    console.log("📨 인증번호 전송 요청됨");
  };

  const validateCode = () => {
    if (verifyCode !== "123456") {
      setVerifyError(true);
      return false;
    }
    setVerifyError(false);
    return true;
  };

  return {
    isRequested,
    verifyError,
    isPhoneValid,
    isCodeValid,
    isFormValid,
    requestCode,
    validateCode,
    setVerifyError,
    setIsRequested,
  };
};
