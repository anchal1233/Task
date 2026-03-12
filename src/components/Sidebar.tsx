import { useAuth } from "../context/AuthContext";

export default function Sidebar() {

 const { role, setRole } = useAuth();

 const menus = {
  Admin: ["Dashboard", "Users", "Orders", "Settings"],
  Manager: ["Dashboard", "Orders", "Reports"],
  User: ["Dashboard", "My Orders"]
 };

 return (

  <div
   style={{
    width: "220px",
    borderRight: "1px solid #eee",
    padding: "20px",
    height: "100vh",
    background: "#fafafa"
   }}
  >

   <h3>Dashboard</h3>

   {/* ROLE SWITCHER */}
   <div style={{ marginBottom: "20px" }}>

    <label>Switch Role</label>

    <select
     value={role}
     onChange={(e) => setRole(e.target.value)}
     style={{ width: "100%", marginTop: "5px" }}
    >
     <option value="Admin">Admin</option>
     <option value="Manager">Manager</option>
     <option value="User">User</option>
    </select>

   </div>

   <h4>{role} Menu</h4>

   <ul style={{ marginTop: "15px" }}>

    {menus[role].map((menu, index) => (
     <li key={index} style={{ marginBottom: "10px" }}>
      {menu}
     </li>
    ))}

   </ul>

  </div>
 );
}