import { useState } from "react";
import AdminSigninPage from "./_components/AdminSinginPage";
import AdminStepPhoneVerify from "./_components/AdminStepPhoneVerify";
import AdminSignupSuccess from "./_components/AdminSignupSuccess.tsx";
import type { FormData } from "../../../types/form";

const AdminSigninPageIndex = () => {
  const [step, setStep] = useState<"account" | "phone" | "success">("account");

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    phoneNumber: "",
    allowKakaoAlert: true,
    verifyCode: "",
    agreeTerms: false,
    agreePrivacy: false,
    agreemarketing: true,
    agreelocation: true,
    role: "OWNER",
  });

  const handleNextStep = () => setStep("phone");
  const handleSignupSuccess = () => setStep("success");

  return (
    <div className="w-full min-h-screen bg-white flex justify-center">
      {step === "account" && (
        <AdminSigninPage
          formData={formData}
          setFormData={setFormData}
          onNext={handleNextStep}
        />
      )}

      {step === "phone" && (
        <AdminStepPhoneVerify
          formData={formData}
          setFormData={setFormData}
          onNext={handleSignupSuccess}
        />
      )}

      {step === "success" && <AdminSignupSuccess />}
    </div>
  );
};

export default AdminSigninPageIndex;
