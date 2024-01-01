import { useCallback, useEffect, useState } from "react";

import { supabase } from "@/supabase/client";
import { useAuth } from "../context/AuthProvider";

const Admin = () => {
  const { user, signOut } = useAuth();

  const [users, setUsers] = useState<any[]>();

  async function getUsers() {
    const { data, error } = await supabase.from("profile").select("*");
    if (error) {
      console.error();
      return false;
    }

    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  const handleLogout = async () => {
    try {
      const { error } = await signOut();
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>You are logged ADMIN in and your email address is {user?.email}</div>
      <button onClick={handleLogout}>Logout</button>

      {JSON.stringify(users)}
    </>
  );
};
export default Admin;
