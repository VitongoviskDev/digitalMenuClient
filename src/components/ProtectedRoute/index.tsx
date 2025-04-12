import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  role?: "admin" | "cliente";
}

export const ProtectedRoute = ({ role }: ProtectedRouteProps) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // if (!token) {
  //   return <Navigate to="/login" replace />;
  // }

  // if (role == "admin" || role && user.role !== role) {
  //   return <Navigate to="/login" replace />;
  // }

  return <Outlet />;
};
