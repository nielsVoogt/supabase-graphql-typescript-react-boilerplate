import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <h1>I AM USER</h1>
      <Outlet />
    </div>
  );
};
export default UserLayout;
