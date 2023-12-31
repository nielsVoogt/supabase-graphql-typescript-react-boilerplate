import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Home = () => {
  const { user, signOut } = useAuth();

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
      <div>You are logged in and your email address is {user?.email}</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};
export default Home;
