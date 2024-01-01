import { useAuth } from "../context/AuthProvider";

const Admin = () => {
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    try {
      const { error } = await signOut();
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);
  return (
    <>
      <div>You are logged ADMIN in and your email address is {user?.email}</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
export default Admin;
