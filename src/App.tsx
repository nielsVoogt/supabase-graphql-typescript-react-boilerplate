import { Route, Routes } from "react-router-dom";

import Admin from "./pages/Admin";
import AdminLayout from "./layout/AdminLayout";
import AuthLayout from "./layout/AuthLayout";
import AuthRoute from "./components/AuthRoute";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ResetPassword from "./pages/Auth/ResetPassword";
import UpdatePassword from "./pages/Auth/UpdatePassword";
import User from "./pages/User";
import UserLayout from "./layout/UserLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<User />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
        </Route>
      </Route>
      <Route element={<AuthLayout />}>
        <Route index path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/update-password" element={<UpdatePassword />} />
      </Route>
    </Routes>
  );
};

export default App;
