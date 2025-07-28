import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="w-full min-h-screen flex justify-center font-suit">
      <div className="w-full min-h-screen bg-white px-[1.5rem] 2xl:max-w-[1366px] outline outline-[0.5px] outline-[#BDBDBD]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;