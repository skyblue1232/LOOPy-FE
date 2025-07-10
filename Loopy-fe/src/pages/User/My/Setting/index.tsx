import { useState } from "react";
import CommonHeader from "../../../../components/header/CommonHeader";
import NextIcon from "../../../../assets/images/Next.svg?react";
import EditProfile from "./_components/EditProfile";
import ManageAccount from "./_components/ManageAccount";
import WithdrawAccountView from "./_components/WithdrawAccountView";
import { useNavigate } from "react-router-dom";

interface SettingPageProps {
  onBack: () => void;
}

type Step = 0 | 1 | 2 | 3;

const SettingPage = ({ onBack }: SettingPageProps) => {
  const [step, setStep] = useState<Step>(0);
  const navigate = useNavigate();

  const getTitle = () => {
    switch (step) {
      case 1:
        return "개인정보 수정";
      case 2:
        return "계정 관리";
      case 3:
        return "회원 탈퇴";
      default:
        return "설정";
    }
  };

  const handleBack = () => {
    if (step === 1 || step === 2) {
      setStep(0);
    } else if (step === 3) {
      setStep(2);
    } else {
      onBack();
    }
  };

  return (
    <div>
      <CommonHeader title={getTitle()} onBack={handleBack} />

      {step === 0 && (
        <div className="flex flex-col mt-[1.5rem]">
          <button
            onClick={() => setStep(1)}
            className="flex w-full items-center justify-between py-[0.625rem] text-[1.125rem] font-medium"
          >
            <span>개인정보 수정</span>
            <NextIcon className="w-[1rem] h-[1rem] text-[#A8A8A8]" />
          </button>

          <button
            onClick={() => setStep(2)}
            className="flex w-full items-center justify-between py-[0.625rem] text-[1.125rem] font-medium"
          >
            <span>계정 관리</span>
            <NextIcon className="w-[1rem] h-[1rem] text-[#A8A8A8]" />
          </button>
        </div>
      )}

      {step === 1 && <EditProfile onBack={() => setStep(0)} />}

      {step === 2 && <ManageAccount onBack={() => setStep(0)} onGoWithdraw={() => setStep(3)} />}

      {step === 3 && (
        <WithdrawAccountView
          onBack={() => setStep(2)}
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
