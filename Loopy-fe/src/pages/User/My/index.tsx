import { useState } from "react";
import MainMyPage from "./_components/MainMyPage.tsx";
import SettingPage from "./Setting";
import StampExchangePage from "./StampExchange";
import MyChallengePage from "./Challenge";
import CouponBoxPage from "./CouponBox";
import StampHistoryPage from "./StampHistory";
import ReviewPage from "./Review";
import FilterPage from "./Filter";
import CafeNoticePage from "./CafeNotice";
import EditProfile from "./Setting/_components/EditProfile";
import ManageAccount from "./Setting/_components/ManageAccount";
import WithdrawAccountView from "./Setting/_components/WithdrawAccountView";
import type { MyPageStep } from "../../../types/mySteps";

const MyPage = () => {
  const [step, setStep] = useState<MyPageStep>("my");

  const renderStep = () => {
    switch (step) {
      case "my":
        return <MainMyPage onNavigate={setStep} />;
      case "setting":
        return <SettingPage onBack={() => setStep("my")} onNavigate={setStep} />;
      case "editProfile":
        return <EditProfile onBack={() => setStep("setting")} />;
      case "manageAccount":
        return <ManageAccount onBack={() => setStep("setting")} onGoWithdraw={() => setStep("withdraw")} />;
      case "withdraw":
        return <WithdrawAccountView onBack={() => setStep("manageAccount")} onConfirm={() => setStep("my")} />;
      case "stampExchange":
        return <StampExchangePage />;
      case "myChallenge":
        return <MyChallengePage />;
      case "couponBox":
        return <CouponBoxPage />;
      case "stampHistory":
        return <StampHistoryPage />;
      case "review":
        return <ReviewPage />;
      case "filter":
        return <FilterPage onBack={() => setStep("my")} />;
      case "cafeNotice":
        return <CafeNoticePage />;
    }
  };

  return <>{renderStep()}</>;
};

export default MyPage;
