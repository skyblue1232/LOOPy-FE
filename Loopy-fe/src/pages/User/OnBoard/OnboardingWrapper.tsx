import { OnboardingProvider } from "../../../contexts/OnboardingContext";
import OnboardingPage from ".";

const OnboardingProviderWrapper = () => {
  return (
    <OnboardingProvider>
      <OnboardingPage />
    </OnboardingProvider>
  );
};

export default OnboardingProviderWrapper;
