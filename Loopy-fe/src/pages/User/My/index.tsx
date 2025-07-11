import { useFunnel } from "../../../hooks/Funnel/useFunnel";
import type { MyPageStep } from "../../../types/mySteps";
import MainMyPage from "./_components/MainMyPage";
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

const MyPage = () => {
  const { step, go, back } = useFunnel<MyPageStep>("my");

  switch (step) {
    case "my":
      return <MainMyPage onNavigate={go} />;
    case "setting":
      return <SettingPage onBack={back("my")} onNavigate={go} />;
    case "editProfile":
      return <EditProfile onBack={back("setting")} />;
    case "manageAccount":
      return <ManageAccount onBack={back("setting")} onGoWithdraw={() => go("withdraw")} />;
    case "withdraw":
      return <WithdrawAccountView onBack={back("manageAccount")} onConfirm={back("my")} />;
    case "stampExchange":
      return <StampExchangePage />;
    case "myChallenge":
      return <MyChallengePage onBack={back("my")} />;
    case "couponBox":
      return <CouponBoxPage onBack={back("my")} />;
    case "stampHistory":
      return <StampHistoryPage />;
    case "review":
      return <ReviewPage />;
    case "filter":
      return <FilterPage onBack={back("my")} />;
    case "cafeNotice":
      return <CafeNoticePage onBack={back("my")} />;
    default:
      return <MainMyPage onNavigate={go} />;
  }
};

export default MyPage;
