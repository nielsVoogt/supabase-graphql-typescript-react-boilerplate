import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>You are not authorized to see this page</div>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
};
export default Unauthorized;
