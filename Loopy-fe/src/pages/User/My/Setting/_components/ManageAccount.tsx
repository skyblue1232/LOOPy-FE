import { useState } from "react";
import CommonBottomPopup from "../../../../../components/popup/CommonBottomPopup";
import DefaultAccountView from "./DefaultAccountView";
import { useNavigate } from "react-router-dom";
import CommonHeader from "../../../../../components/header/CommonHeader";

interface ManageAccountProps {
  onBack: () => void;
  isKakaoLinked?: boolean;
  email?: string;
  onGoWithdraw: () => void;
}

const ManageAccount = ({ isKakaoLinked = false, email = "", onGoWithdraw, onBack }: ManageAccountProps) => {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("로그아웃 확정");
    setShowLogoutPopup(false);
    navigate("/");
  };

  return (
    <>
      <CommonHeader title="설정" onBack={onBack} />

      <DefaultAccountView
        email={email}
        isKakaoLinked={isKakaoLinked}
        onClickLogout={() => setShowLogoutPopup(true)}
        onClickWithdraw={onGoWithdraw} 
      />

      <CommonBottomPopup
        show={showLogoutPopup}
        onClose={() => setShowLogoutPopup(false)}
        titleText="로그아웃할까요?"
        contentsText="다시 로그인하면 루피 서비스를 이용하실 수 있어요"
        purpleButton="로그아웃하기"
        purpleButtonOnClick={handleLogout}
      />
    </>
  );
};

export default ManageAccount;
