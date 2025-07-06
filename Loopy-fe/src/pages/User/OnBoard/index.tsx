import { useState } from "react";
import { useNavigate } from "react-router-dom";
import StepCafeInfo from "./_components/StepCafeInfo";
import StepSearchArea from "./_components/StepSearchArea";
import StepLocationPermission from "./_components/StepLocationPermission";
import CommonHeader from "../../../components/header/CommonHeader";

const OnboardingPage = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate(); 

  const goNext = () => setStep(prev => prev + 1);
  const goBack = () => setStep(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div>
      <CommonHeader
        title=""
        onBack={goBack}
      />
      {step === 0 && <StepCafeInfo onNext={goNext} />}
      {step === 1 && <StepSearchArea onNext={goNext} />}
      {step === 2 && <StepLocationPermission onNext={() => navigate("/home")} />}
    </div>
  );
};

export default OnboardingPage;
