import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="w-full min-h-screen bg-[#D9D9D9] font-suit">
      <Outlet />
    </div>
  );
};

export default AdminLayout;