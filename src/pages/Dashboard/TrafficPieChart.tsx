import { PieChart, Pie, Tooltip, Cell } from "recharts";

const data = [
 { name: "Google", value: 400 },
 { name: "Facebook", value: 300 },
 { name: "Direct", value: 200 },
 { name: "Referral", value: 100 }
];

const COLORS = ["#1677ff", "#52c41a", "#faad14", "#f5222d"];

export default function TrafficPieChart() {

 return (
  <div
   style={{
    border: "1px solid #eee",
    padding: "20px",
    borderRadius: "12px",
    background: "#fff"
   }}
  >

   <h3>Traffic Source</h3>

   <PieChart width={300} height={250}>

    <Pie
     data={data}
     dataKey="value"
     nameKey="name"
     cx="50%"
     cy="50%"
     outerRadius={80}
    >

     {data.map((entry, index) => (
      <Cell key={index} fill={COLORS[index % COLORS.length]} />
     ))}

    </Pie>

    <Tooltip />

   </PieChart>

  </div>
 );
}