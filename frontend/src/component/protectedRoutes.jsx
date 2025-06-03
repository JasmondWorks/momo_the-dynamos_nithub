import { useNavigate } from "react-router-dom";
import SpinnerFull from "./spinnerFull";
import { useAuth } from "../contexts/authContext";
import SplashScreen from "./splashScreen";

function ProtectedRoutes({ children }) {
  const { user, isLoading } = useAuth();

  console.log(user);

  const navigate = useNavigate();

  if (isLoading) return <SplashScreen />;
  if (!user && !isLoading) navigate("onboarding");

  return children;
}

export default ProtectedRoutes;
