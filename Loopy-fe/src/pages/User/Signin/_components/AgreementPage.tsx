import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonButton from "../../../../components/button/CommonButton";
import AgreementItem from "./AgreementItem";
import CheckCircle from "./CheckCircle";
import CommonHeader from "../../../../components/header/CommonHeader";

interface AgreementPageProps {
  onNext: () => void;
  onBack: () => void;
}

const AgreementPage = ({ onNext, onBack }: AgreementPageProps) => {
  const navigate = useNavigate();

  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    location: false,
    marketing: false,
  });

  const isAllRequiredChecked =
    agreements.terms && agreements.privacy && agreements.location;

  const handleToggle = (key: keyof typeof agreements) => {
    setAgreements(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleToggleAll = () => {
    const allChecked = Object.values(agreements).every(Boolean);
    const next = !allChecked;
    setAgreements({
      terms: next,
      privacy: next,
      location: next,
      marketing: next,
    });
  };

  return (
    <div className="min-h-screen flex flex-col font-suit">
      <CommonHeader
        title="서비스 이용 동의"
        onBack={onBack}
        onClose={() => navigate("/")}
      />

      <div>
        <h1 className="text-xl font-bold mt-[2.875rem] mb-6">
          서비스 이용을 위해
          <br />
          약관에 동의해주세요.
        </h1>

        <button
          onClick={handleToggleAll}
          className="flex items-center justify-between w-full"
        >
          <div className="flex items-center gap-2 mb-[3.75rem]">
            <CheckCircle checked={Object.values(agreements).every(Boolean)} />
            <span className="text-base font-medium">전체 동의하기</span>
          </div>
        </button>

        <AgreementItem
          label="[필수] 서비스 이용약관"
          checked={agreements.terms}
          onClick={() => handleToggle("terms")}
        />
        <AgreementItem
          label="[필수] 개인정보 수집 및 이용 동의"
          checked={agreements.privacy}
          onClick={() => handleToggle("privacy")}
        />
        <AgreementItem
          label="[필수] 위치기반 서비스 이용약관 동의"
          checked={agreements.location}
          onClick={() => handleToggle("location")}
        />
        <AgreementItem
          label="[선택] 마케팅 정보 활용 동의"
          checked={agreements.marketing}
          onClick={() => handleToggle("marketing")}
        />
      </div>

      {isAllRequiredChecked && (
        <div className="fixed bottom-0 left-0 w-full px-[1.5rem] py-[3rem] text-white">
          <CommonButton text="다음" onClick={onNext} />
        </div>
      )}
    </div>
  );
};

export default AgreementPage;
