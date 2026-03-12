import {
 LineChart,
 Line,
 XAxis,
 YAxis,
 Tooltip,
 CartesianGrid
} from "recharts";

const data = [
 { month: "Jan", revenue: 4000 },
 { month: "Feb", revenue: 3000 },
 { month: "Mar", revenue: 5000 },
 { month: "Apr", revenue: 4200 },
 { month: "May", revenue: 6000 }
];

export default function RevenueChart() {

 return (
  <div
   style={{
    border: "1px solid #eee",
    padding: "20px",
    borderRadius: "12px",
    background: "#fff"
   }}
  >

   <h3>Revenue Growth</h3>

   <LineChart width={400} height={250} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="revenue" stroke="#1677ff" strokeWidth={3}/>
   </LineChart>

  </div>
 );
}