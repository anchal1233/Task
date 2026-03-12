export default function ActivityFeed() {

 const activities = [
  "New user registered",
  "Order #1024 created",
  "Admin updated product",
  "Manager approved refund",
  "User left a review"
 ];

 return (
  <div
   style={{
    border: "1px solid #eee",
    padding: "20px",
    borderRadius: "12px",
    background: "#fff",
    width: "300px"
   }}
  >

   <h3>Activity Feed</h3>

   <ul>
    {activities.map((item, index) => (
     <li key={index} style={{ marginBottom: "8px" }}>
      {item}
     </li>
    ))}
   </ul>

  </div>
 );
}