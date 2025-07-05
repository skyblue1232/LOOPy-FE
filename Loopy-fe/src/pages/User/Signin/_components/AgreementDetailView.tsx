interface AgreementDetailViewProps {
  agreementKey: "terms" | "privacy" | "location" | "marketing";
}

const AgreementDetailView = ({ agreementKey }: AgreementDetailViewProps) => {
  switch (agreementKey) {
    case "terms":
      return (
        <div className="mt-[1.5rem] font-normal leading-relaxed">
          <h2 className="text-[1.125rem] font-bold mb-4">1. 서비스 개요</h2>
          <p className="text-[0.875rem] mb-2">본 약관은 사용자가 루피(이하 ‘서비스’)을 이용함에 있어 서비스 제공자와 사용자 간의 권리, 의무 및 책임 사항을 규정합니다.</p>
          <p className="text-[0.875rem] text-[#8E9398]">• 서비스는 사용자가 메모를 작성, 저장, 분류할 수 있도록 지원하는 도구입니다. <br />
            • 사용자는 로컬 환경에서 메모를 저장 및 관리할 수 있으며, 구글 소셜 로그인을 통해 서버에 데이터를 저장할 수 있습니다. <br />
            • 구글 소셜 로그인 사용자는 아이덴티티 테스트를 진행하며, 이를 기반으로 레터 추천 및 메모 자동 분류 (스페이스) 기능을 제공받을 수 있습니다.
          </p>
          <h2 className="text-[1.125rem] font-bold mt-8 mb-4">2. 서비스 이용 제한</h2>
          <p className="text-[0.875rem] mb-2">본 약관은 사용자가 루피(이하 ‘서비스’)을 이용함에 있어 서비스 제공자와 사용자 간의 권리, 의무 및 책임 사항을 규정합니다.</p>
          <p className="text-[0.875rem] text-[#8E9398]">• 서비스는 사용자가 메모를 작성, 저장, 분류할 수 있도록 지원하는 도구입니다. <br />
            • 사용자는 로컬 환경에서 메모를 저장 및 관리할 수 있으며, 구글 소셜 로그인을 통해 서버에 데이터를 저장할 수 있습니다. <br />
            • 구글 소셜 로그인 사용자는 아이덴티티 테스트를 진행하며, 이를 기반으로 레터 추천 및 메모 자동 분류 (스페이스) 기능을 제공받을 수 있습니다.
          </p>
        </div>
      );
    case "privacy":
      return (
        <div className="mt-[1.5rem] font-normal leading-relaxed">
          <h2 className="text-[1.125rem] font-bold mb-4">1. 서비스 개요</h2>
          <p className="text-[0.875rem] mb-2">본 약관은 사용자가 루피(이하 ‘서비스’)을 이용함에 있어 서비스 제공자와 사용자 간의 권리, 의무 및 책임 사항을 규정합니다.</p>
          <p className="text-[0.875rem] text-[#8E9398]">• 서비스는 사용자가 메모를 작성, 저장, 분류할 수 있도록 지원하는 도구입니다. <br />
            • 사용자는 로컬 환경에서 메모를 저장 및 관리할 수 있으며, 구글 소셜 로그인을 통해 서버에 데이터를 저장할 수 있습니다. <br />
            • 구글 소셜 로그인 사용자는 아이덴티티 테스트를 진행하며, 이를 기반으로 레터 추천 및 메모 자동 분류 (스페이스) 기능을 제공받을 수 있습니다.
          </p>
          <h2 className="text-[1.125rem] font-bold mt-8 mb-4">2. 서비스 이용 제한</h2>
          <p className="text-[0.875rem] mb-2">본 약관은 사용자가 루피(이하 ‘서비스’)을 이용함에 있어 서비스 제공자와 사용자 간의 권리, 의무 및 책임 사항을 규정합니다.</p>
          <p className="text-[0.875rem] text-[#8E9398]">• 서비스는 사용자가 메모를 작성, 저장, 분류할 수 있도록 지원하는 도구입니다. <br />
            • 사용자는 로컬 환경에서 메모를 저장 및 관리할 수 있으며, 구글 소셜 로그인을 통해 서버에 데이터를 저장할 수 있습니다. <br />
            • 구글 소셜 로그인 사용자는 아이덴티티 테스트를 진행하며, 이를 기반으로 레터 추천 및 메모 자동 분류 (스페이스) 기능을 제공받을 수 있습니다.
          </p>
        </div>
      );
    case "location":
      return (
        <div className="mt-[1.5rem] font-normal leading-relaxed">
          <h2 className="text-[1.125rem] font-bold mb-4">1. 서비스 개요</h2>
          <p className="text-[0.875rem] mb-2">본 약관은 사용자가 루피(이하 ‘서비스’)을 이용함에 있어 서비스 제공자와 사용자 간의 권리, 의무 및 책임 사항을 규정합니다.</p>
          <p className="text-[0.875rem] text-[#8E9398]">• 서비스는 사용자가 메모를 작성, 저장, 분류할 수 있도록 지원하는 도구입니다. <br />
            • 사용자는 로컬 환경에서 메모를 저장 및 관리할 수 있으며, 구글 소셜 로그인을 통해 서버에 데이터를 저장할 수 있습니다. <br />
            • 구글 소셜 로그인 사용자는 아이덴티티 테스트를 진행하며, 이를 기반으로 레터 추천 및 메모 자동 분류 (스페이스) 기능을 제공받을 수 있습니다.
          </p>
          <h2 className="text-[1.125rem] font-bold mt-8 mb-4">2. 서비스 이용 제한</h2>
          <p className="text-[0.875rem] mb-2">본 약관은 사용자가 루피(이하 ‘서비스’)을 이용함에 있어 서비스 제공자와 사용자 간의 권리, 의무 및 책임 사항을 규정합니다.</p>
          <p className="text-[0.875rem] text-[#8E9398]">• 서비스는 사용자가 메모를 작성, 저장, 분류할 수 있도록 지원하는 도구입니다. <br />
            • 사용자는 로컬 환경에서 메모를 저장 및 관리할 수 있으며, 구글 소셜 로그인을 통해 서버에 데이터를 저장할 수 있습니다. <br />
            • 구글 소셜 로그인 사용자는 아이덴티티 테스트를 진행하며, 이를 기반으로 레터 추천 및 메모 자동 분류 (스페이스) 기능을 제공받을 수 있습니다.
          </p>
        </div>
      );
    case "marketing":
      return (
        <div className="mt-[1.5rem] font-normal leading-relaxed">
          <h2 className="text-[1.125rem] font-bold mb-4">1. 서비스 개요</h2>
          <p className="text-[0.875rem] mb-2">본 약관은 사용자가 루피(이하 ‘서비스’)을 이용함에 있어 서비스 제공자와 사용자 간의 권리, 의무 및 책임 사항을 규정합니다.</p>
          <p className="text-[0.875rem] text-[#8E9398]">• 서비스는 사용자가 메모를 작성, 저장, 분류할 수 있도록 지원하는 도구입니다. <br />
            • 사용자는 로컬 환경에서 메모를 저장 및 관리할 수 있으며, 구글 소셜 로그인을 통해 서버에 데이터를 저장할 수 있습니다. <br />
            • 구글 소셜 로그인 사용자는 아이덴티티 테스트를 진행하며, 이를 기반으로 레터 추천 및 메모 자동 분류 (스페이스) 기능을 제공받을 수 있습니다.
          </p>
          <h2 className="text-[1.125rem] font-bold mt-8 mb-4">2. 서비스 이용 제한</h2>
          <p className="text-[0.875rem] mb-2">본 약관은 사용자가 루피(이하 ‘서비스’)을 이용함에 있어 서비스 제공자와 사용자 간의 권리, 의무 및 책임 사항을 규정합니다.</p>
          <p className="text-[0.875rem] text-[#8E9398]">• 서비스는 사용자가 메모를 작성, 저장, 분류할 수 있도록 지원하는 도구입니다. <br />
            • 사용자는 로컬 환경에서 메모를 저장 및 관리할 수 있으며, 구글 소셜 로그인을 통해 서버에 데이터를 저장할 수 있습니다. <br />
            • 구글 소셜 로그인 사용자는 아이덴티티 테스트를 진행하며, 이를 기반으로 레터 추천 및 메모 자동 분류 (스페이스) 기능을 제공받을 수 있습니다.
          </p>
        </div>
      );
    default:
      return null;
  }
};

export default AgreementDetailView;
