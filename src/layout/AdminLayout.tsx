import { Outlet } from "react-router-dom";
import Unauthorized from "@/pages/Error/Unauthorized";
import { supabase } from "@/supabase/client";
import { useAuth } from "@/context/AuthProvider";
import { useState } from "react";

const AdminLayout = () => {
  const { user } = useAuth();

  if (!user?.app_metadata.claims_admin) {
    return <Unauthorized />;
  }

  return (
    <div className="h-full w-full bg-pink-500">
      <h1 className="text-sm">I AM ADMIN</h1>
      <Outlet />
    </div>
  );
};
export default AdminLayout;
