import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState("Doctor");
  const [isLoading, setIsLoading] = useState(true);

  function login(userType) {
    setUser(userType);
  }

  function logout() {
    setUser("");
  }

  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error("You tried to use AuthContext outside of the AuthProvider");

  return context;
}

export { AuthProvider, useAuth };
