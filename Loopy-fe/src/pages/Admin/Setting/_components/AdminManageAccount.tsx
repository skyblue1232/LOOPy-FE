import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonSideBar from "../../../../components/admin/sideBar/CommonSideBar";
import CommonTopBar from "../../../../components/admin/topBar/CommonTopBar";
import { useMyInfo } from "../../../../hooks/query/userInfo/useMyInfo";
import { useLogout } from "../../../../hooks/mutation/logout/useLogout";
import AdminDefaultAccountView from "./AdminDefaultAccountView";
import CommonTwoButtonModal from "../../../../components/admin/modal/CommonTwoButtonModal";

interface Props {
  onBack: () => void;
}

const AdminManageAccount = ({ onBack }: Props) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  const { data: myInfo } = useMyInfo();
  const { mutate: logout } = useLogout(
    () => {
      navigate("/");
    },
    (error) => {
      console.error("로그아웃 실패:", error);
      alert("로그아웃에 실패했어요. 다시 시도해주세요.");
    }
  );

  const handleLogout = () => {
    logout();
    setShowLogoutModal(false);
  };

  const allowKakaoAlert = myInfo?.allowKakaoAlert ?? false;
  const email = allowKakaoAlert ? myInfo?.email ?? "" : "";

  return (
    <div className="w-full min-h-screen flex font-suit text-[#252525]">
      <CommonSideBar />

      <div className="flex-1 flex flex-col ml-[12.875rem]">
        <CommonTopBar title="계정 관리" profileImageUrl="" onBack={onBack} />

        <main className="flex-1">
          <AdminDefaultAccountView
            email={email}
            allowKakaoAlert={allowKakaoAlert}
            onClickLogout={() => setShowLogoutModal(true)}
            onClickWithdraw={() => console.log("회원 탈퇴 버튼 눌림")}
          />
        </main>
      </div>

      {showLogoutModal && (
        <CommonTwoButtonModal
          onClose={() => setShowLogoutModal(false)}
          title="로그아웃할까요?"
          message="다시 로그인하면 루피 서비스를 이용하실 수 있어요"
          purpleButton="로그아웃하기"
          purpleButtonOnClick={handleLogout}
        />
      )}
    </div>
  );
};

export default AdminManageAccount;
