import { Suspense, lazy } from "react";
import { useAdminSettingFunnel } from "../../../contexts/AdminSettingProvider";
import LoadingSpinner from "../../../components/loading/LoadingSpinner";

const AdminMainSettingPage = lazy(() => import("./_components/AdminMainSettingPage"));
const AdminEditProfile = lazy(() => import("./_components/AdminEditProfile.tsx"));
const AdminManageAccount = lazy(() => import("./_components/AdminManageAccount.tsx"));

const AdminSettingPage = () => {
  const funnel = useAdminSettingFunnel();

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <funnel.Render
        setting={({ history }) => (
          <AdminMainSettingPage onNavigate={history.push} />
        )}
        editProfile={({ history }) => (
          <AdminEditProfile onBack={() => history.push("setting", {})} />
        )}
        manageAccount={({ history }) => (
          <AdminManageAccount onBack={() => history.push("setting", {})} />
        )}
      />
    </Suspense>
  );
};

export default AdminSettingPage;
