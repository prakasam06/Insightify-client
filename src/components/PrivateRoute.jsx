import { useAuth } from "../context/JWTAuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  return !loading && currentUser ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
