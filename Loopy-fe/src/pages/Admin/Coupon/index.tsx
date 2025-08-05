import { useSearchParams } from 'react-router-dom';
import CommonSideBar from '../../../components/admin/sideBar/CommonSideBar';
import AdminCouponListPage from './_components/AdminCouponListPage';
import AdminCouponCreatePage from './_components/AdminCreateCouponPage';

const AdminCouponPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const step = searchParams.get('step') || 'list';

  return (
    <div className="w-full min-h-screen flex font-suit text-[#252525]">
      <CommonSideBar />
      <div className="flex-1 flex flex-col ml-[12.875rem]">
        <main className="flex-1 overflow-y-auto">
          {step === 'list' && (
            <AdminCouponListPage onAdd={() => setSearchParams({ step: 'create' })} />
          )}
          {step === 'create' && (
            <AdminCouponCreatePage onBack={() => setSearchParams({ step: 'list' })} />
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminCouponPage;
