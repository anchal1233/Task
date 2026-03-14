import { createContext, useContext, useState } from "react";

type AuthType = {
  role: string
  setRole: React.Dispatch<React.SetStateAction<string>>
}

export const AuthContext = createContext<AuthType | null>(null);

export const AuthProvider = ({ children }) => {

 const [role, setRole] = useState("Admin");

 return (
  <AuthContext.Provider value={{ role, setRole }}>
   {children}
  </AuthContext.Provider>
 );
};

export const useAuth = () => useContext(AuthContext);