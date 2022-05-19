import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const RequestAuth = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  if (currentUser) {
    return <Outlet />;
  } else {
    navigate("/login");
  }
};
export default RequestAuth;
