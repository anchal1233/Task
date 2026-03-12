import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

 const [role, setRole] = useState("Admin");

 return (
  <AuthContext.Provider value={{ role, setRole }}>
   {children}
  </AuthContext.Provider>
 );
};

export const useAuth = () => useContext(AuthContext);