import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="h-full w-full bg-gray-300">
      <h1>I AM USER</h1>
      <Outlet />
    </div>
  );
};
export default UserLayout;
