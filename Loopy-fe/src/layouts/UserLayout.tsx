import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="w-full relative flex justify-center font-suit overflow-hidden">
      <div className="w-full sm:max-w-[393px] min-h-screen bg-white relative flex flex-col px-[1.5rem] outline outline-[0.5px] outline-[#E0E0E0]">
        <Outlet />
      </div>
    </div>
  );
};

export default UserLayout;