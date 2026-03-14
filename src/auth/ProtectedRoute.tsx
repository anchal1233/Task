import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type Props = {
 children: React.ReactNode
 allowedRoles: string[]
}

export default function ProtectedRoute({ children, allowedRoles }: Props) {

 const { role } = useAuth();

 if (!allowedRoles.includes(role)) {
  return <Navigate to="/" />;
 }

 return children;
}