import { useState } from "react";
import CommonHeader from "../../../../components/header/CommonHeader";
import NextIcon from "../../../../assets/images/Next.svg?react";
import EditProfile from "./_components/EditProfile";
import ManageAccount from "./_components/ManageAccount";
import WithdrawAccountView from "./_components/WithdrawAccountView";
import { useNavigate } from "react-router-dom";
import type { MyPageStep, SettingStep } from "../../../../types/mySteps";

interface SettingPageProps {
  onBack: () => void;
  onNavigate: (step: MyPageStep) => void;
}

const SettingPage = ({ onBack }: SettingPageProps) => {
  const [step, setStep] = useState<SettingStep>("settingMain");
  const navigate = useNavigate();

  const getTitle = () => {
    switch (step) {
      case "editProfile":
        return "개인정보 수정";
      case "manageAccount":
        return "계정 관리";
      case "withdraw":
        return "회원 탈퇴";
      default:
        return "설정";
    }
  };

  const handleBack = () => {
    switch (step) {
      case "editProfile":
      case "manageAccount":
        setStep("settingMain");
        break;
      case "withdraw":
        setStep("manageAccount");
        break;
      default:
        onBack();
    }
  };

  return (
    <div>
      <CommonHeader title={getTitle()} onBack={handleBack} />

      {step === "settingMain" && (
        <div className="flex flex-col mt-[1.5rem]">
          <button
            onClick={() => setStep("editProfile")}
            className="flex w-full items-center justify-between py-[0.625rem] text-[1.125rem] font-medium"
          >
            <span>개인정보 수정</span>
            <NextIcon className="w-[1rem] h-[1rem] text-[#A8A8A8]" />
          </button>

          <button
            onClick={() => setStep("manageAccount")}
            className="flex w-full items-center justify-between py-[0.625rem] text-[1.125rem] font-medium"
          >
            <span>계정 관리</span>
            <NextIcon className="w-[1rem] h-[1rem] text-[#A8A8A8]" />
          </button>
        </div>
      )}

      {step === "editProfile" && <EditProfile onBack={() => setStep("settingMain")} />}

      {step === "manageAccount" && (
        <ManageAccount onBack={() => setStep("settingMain")} onGoWithdraw={() => setStep("withdraw")} />
      )}

      {step === "withdraw" && (
        <WithdrawAccountView
          onBack={() => setStep("manageAccount")}
          onConfirm={() => {
            console.log("회원 탈퇴 확정");
            navigate("/");
          }}
        />
      )}
    </div>
  );
};

export default SettingPage;
