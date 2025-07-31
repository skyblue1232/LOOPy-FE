import CommonSideBar from '../../../components/admin/sideBar/CommonSideBar';

const AdminHomePage = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col justify-center items-center bg-white text-[#252525] font-suit">
      <div className="absolute top-[1.25rem] left-0"></div>
      <CommonSideBar />
      <h1 className="text-[1.5rem] font-bold mb-4">사장님 홈</h1>
      <p className="text-[1rem] text-[#7F7F7F]">매장과 고객 관리</p>
    </div>
  );
};

export default AdminHomePage;
