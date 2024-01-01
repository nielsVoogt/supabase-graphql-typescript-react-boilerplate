import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h1>I AM ADMIN</h1>
      <Outlet />
    </div>
  );
};
export default AdminLayout;
