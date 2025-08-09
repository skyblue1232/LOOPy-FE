import { useSearchParams, useParams } from 'react-router-dom';
import CommonSideBar from '../../../components/admin/sideBar/CommonSideBar';
import AdminCouponListPage from './_components/AdminCouponListPage';
import AdminCouponCreatePage from './_components/AdminCreateCouponPage';

const AdminCouponPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const step = searchParams.get('step') || 'list';

  const { cafeId } = useParams<{ cafeId: string }>();

  const cafeIdNum: number = cafeId ? Number(cafeId) : 1;

  return (
    <div className="w-full min-h-screen flex font-suit text-[#252525]">
      <CommonSideBar />
      <div className="flex-1 flex flex-col ml-[12.875rem]">
        <main className="flex-1 overflow-y-auto">
          {step === 'list' && (
            <AdminCouponListPage
              cafeId={cafeIdNum}
              onAdd={() => setSearchParams({ step: 'create' })}
            />
          )}
          {step === 'create' && (
            <AdminCouponCreatePage
              cafeId={cafeIdNum}
              onBack={() => setSearchParams({ step: 'list' })}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminCouponPage;
