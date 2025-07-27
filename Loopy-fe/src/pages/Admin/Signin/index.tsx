import { useState } from "react";
import AdminSigninPage from "./_components/AdminSinginPage";
import type { FormData } from "../../../types/form";

const AdminSigninPageIndex = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    phone: "",
    verifyCode: "",
    agreeTerms: true,
    agreePrivacy: true,
  });

  const handleNext = () => {
    console.log("다음 단계로 이동"); 
  };

  return (
    <AdminSigninPage
      formData={formData}
      setFormData={setFormData}
      onNext={handleNext}
    />
  );
};

export default AdminSigninPageIndex;
