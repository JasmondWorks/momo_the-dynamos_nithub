import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../contexts/authContext";
import SplashScreen from "./splashScreen";

function ProtectedRoutes({ children }) {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/onboarding");
    }
  }, [isLoading, user, navigate]);

  // Render splash screen while loading or while determining auth status
  if (isLoading || (!user && !isLoading)) {
    return <SplashScreen />;
  }

  return children;
}

export default ProtectedRoutes;
