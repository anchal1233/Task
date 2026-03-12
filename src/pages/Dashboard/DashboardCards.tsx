import { useQuery } from "@tanstack/react-query";
import { fetchDashboardStats } from "../../api/dashboardApi";

export default function DashboardCards() {

 const { data, isLoading } = useQuery({
  queryKey: ["dashboardStats"],
  queryFn: fetchDashboardStats
 });

 if (isLoading) return <p>Loading dashboard...</p>;

 const cards = [
  { title: "Total Users", value: data?.users },
  { title: "Orders", value: data?.orders },
  { title: "Revenue", value: data?.revenue }
 ];

 return (
  <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
   {cards.map((card, index) => (
    <div
     key={index}
     style={{
      border: "1px solid #eee",
      padding: "25px",
      borderRadius: "12px",
      width: "200px",
      background: "#fff",
      boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
     }}
    >
     <h4 style={{ color: "#888" }}>{card.title}</h4>
     <h2>{card.value}</h2>
    </div>
   ))}
  </div>
 );
}