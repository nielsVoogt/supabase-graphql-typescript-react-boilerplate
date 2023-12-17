import { Route, Routes } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import AuthRoute from "./components/AuthRoute";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ResetPassword from "./pages/Auth/ResetPassword";
import UpdatePassword from "./pages/Auth/UpdatePassword";

const App = () => {
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path="/home" element={<Home />} />
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
