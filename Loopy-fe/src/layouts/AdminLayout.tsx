import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="w-full min-h-screen flex justify-center relative font-suit">
      <div className="w-full min-h-screen bg-white px-[1.5rem]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
