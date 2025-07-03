import { useNavigate } from "react-router-dom";
import { useState } from "react";
import StepEmail from "./_components/StepEmail";
import StepNickname from "./_components/StepNickname";
import StepVerify from "./_components/StepVerify";
import AgreementPage from "./_components/AgreementPage";
import CommonHeader from "../../../components/header/CommonHeader";

interface FormData {
  email: string;
  password: string;
  nickname: string;
  phone: string;
  verifyCode: string;
}

const SignupPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    nickname: "",
    phone: "",
    verifyCode: "",
  });

  const goNext = () => setStep(prev => prev + 1);
  const goBack = () => setStep(prev => (prev > 0 ? prev - 1 : 0));
  const goToHome = () => navigate("/home");

  return (
    <div>
      {step !== 0 && (
        <CommonHeader
          title="회원가입"
          onBack={goBack}
          onClose={() => navigate("/")}
        />
      )}

      {step === 0 && <AgreementPage onNext={goNext} onBack={() => navigate("/")} />}
      {step === 1 && (
        <StepEmail
          formData={formData}
          setFormData={setFormData}
          onNext={goNext}
        />
      )}
      {step === 2 && (
        <StepNickname
          formData={formData}
          setFormData={setFormData}
          onNext={goNext}  
        />
      )}
      {step === 3 && (
        <StepVerify
          formData={formData}
          setFormData={setFormData}
          onNext={goToHome}
        />
      )}
    </div>
  );
};

export default SignupPage;
