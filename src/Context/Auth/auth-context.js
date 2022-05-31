import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutHandler } from "../../Utils/logoutHandler";

const AuthContext = createContext(null);
const isTokenPresent = localStorage.getItem("token") ? true : false;
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLogIn: isTokenPresent,
    tokenValue: localStorage.getItem("token"),
  });
  const navigate = useNavigate();
  const logOutUser = async () => {
    logoutHandler();
    setAuth({ isLogin: false });
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ auth, setAuth, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
