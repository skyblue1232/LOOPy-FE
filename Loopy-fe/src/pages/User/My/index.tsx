import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMyPageFunnel } from "../../../contexts/MyFunnelProvider";
import MainMyPage from "./_components/MainMyPage";
import SettingPage from "./Setting";
import StampExchangePage from "./StampExchange";
import CouponBoxPage from "./CouponBox";
import StampHistoryPage from "./StampHistory";
import FilterPage from "./Filter";
import CafeNoticePage from "./CafeNotice";
import EditProfile from "./Setting/_components/EditProfile";
import ManageAccount from "./Setting/_components/ManageAccount";
import WithdrawAccountView from "./Setting/_components/WithdrawAccountView";
import MyReviewPage from "./MyReview";

const MyPage = () => {
  const funnel = useMyPageFunnel();
  const navigate = useNavigate();

  useEffect(() => {
    if ((funnel.step as string) === "myChallenge") {
      navigate("/challenge");
    }
  }, [funnel.step, navigate]);

  return (
    <funnel.Render
      my={({ history }) => (
        <MainMyPage onNavigate={history.push} />
      )}
      setting={({ history, step }) => (
        <SettingPage
          currentStep={step}
          onBack={() => history.push("my", {})}
          onNavigate={history.push}
        />
      )}
      editProfile={({ history }) => (
        <EditProfile onBack={() => history.push("setting", {})} />
      )}
      manageAccount={({ history }) => (
        <ManageAccount
          onBack={() => history.push("setting", {})}
          onGoWithdraw={() => history.push("withdraw", {})}
        />
      )}
      withdraw={({ history }) => (
        <WithdrawAccountView
          onBack={() => history.push("manageAccount", {})}
          onConfirm={() => history.push("my", {})}
        />
      )}
      stampExchange={({ history }) => (
        <StampExchangePage onBack={() => history.push("my", {})} />
      )}
      couponBox={({ history }) => (
        <CouponBoxPage onBack={() => history.push("my", {})} />
      )}
      stampHistory={({ history }) => (
        <StampHistoryPage onBack={() => history.push("my", {})} />
      )}
      review={({ history }) => (
        <MyReviewPage onBack={() => history.push("my", {})} />
      )}
      filter={({ history }) => (
        <FilterPage onBack={() => history.push("my", {})} />
      )}
      cafeNotice={({ history }) => (
        <CafeNoticePage onBack={() => history.push("my", {})} />
      )}
    />
  );
};

export default MyPage;
