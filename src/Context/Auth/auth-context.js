import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);
const isTokenPresent = localStorage.getItem("token") ? true : false;
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLogin: isTokenPresent,
    tokenValue: localStorage.getItem("token"),
  });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
// Remember if anything happens then there is a typo in tokenValue check this once and then try again