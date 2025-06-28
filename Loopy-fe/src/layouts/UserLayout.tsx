import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="w-full flex justify-center font-suit">
      <div className="w-full sm:max-w-[393px] min-h-screen bg-white relative flex flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;