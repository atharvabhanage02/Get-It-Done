import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/Auth/auth-context";

export const RequiresAuth = ({ children }) => {
  const {
    auth: { isLogIn },
  } = useAuth();
  return isLogIn ? children : <Navigate to="/" replace />;
};
