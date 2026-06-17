import { Navigate } from "react-router-dom";

import { useAuth } from "../hooks/useAuth.ts";
import { ROUTES } from "./routes";

interface PublicRouteProps {
  children: React.ReactNode;
}

export function PublicRoute({ children }: PublicRouteProps) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <>{children}</>;
}
