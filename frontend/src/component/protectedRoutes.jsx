import { useNavigate } from "react-router-dom";
import SpinnerFull from "./SpinnerFull";
import { useAuth } from "../contexts/authContext";

function ProtectedRoutes({ children }) {
  const { user, isLoading } = useAuth();

  console.log(user);

  const navigate = useNavigate();

  if (isLoading) return <SpinnerFull />;
  if (!user && !isLoading) navigate("onboarding");

  return children;
}

export default ProtectedRoutes;
