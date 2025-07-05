import { useState } from "react";
import CommonHeader from "../../../../components/header/CommonHeader";
import AgreementListView from "./AgreementListView";
import AgreementDetailView from "./AgreementDetailView";
import type { AgreementKey, AgreementState } from "../../../../types/agreement";

interface AgreementPageProps {
  onNext: () => void;
  onBack: () => void;
}

const AgreementPage = ({ onNext, onBack }: AgreementPageProps) => {
  const [agreements, setAgreements] = useState<AgreementState>({
    terms: false,
    privacy: false,
    location: false,
    marketing: false,
  });

  const [view, setView] = useState<"list" | "detail">("list");
  const [selectedAgreementKey, setSelectedAgreementKey] = useState<AgreementKey | null>(null);

  const isAllRequiredChecked =
    agreements.terms && agreements.privacy && agreements.location;

  const handleToggle = (key: AgreementKey) => {
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

  const handleShowDetail = (key: AgreementKey) => {
    setSelectedAgreementKey(key);
    setView("detail");
  };

  const handleBackToList = () => {
    setSelectedAgreementKey(null);
    setView("list");
  };

  const getTitle = (key: AgreementKey) => {
    switch (key) {
      case "terms":
        return "서비스 이용 약관";
      case "privacy":
        return "개인정보 수집 및 이용 동의";
      case "location":
        return "위치기반 서비스 이용약관 동의";
      case "marketing":
        return "마케팅 정보 활용 동의";
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col font-suit">
      {view === "list" && (
        <>
          <CommonHeader
            title="서비스 이용 동의"
            onBack={onBack}
          />
          <AgreementListView
            agreements={agreements}
            onToggle={handleToggle}
            onToggleAll={handleToggleAll}
            onShowDetail={handleShowDetail}
            isAllRequiredChecked={isAllRequiredChecked}
            onNext={onNext}
          />
        </>
      )}

      {view === "detail" && selectedAgreementKey && (
        <>
          <CommonHeader
            title={getTitle(selectedAgreementKey)}
            onBack={handleBackToList}
          />
          <AgreementDetailView agreementKey={selectedAgreementKey} />
        </>
      )}
    </div>
  );
};

export default AgreementPage;
