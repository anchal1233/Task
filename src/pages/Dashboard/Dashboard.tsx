import Sidebar from "../../components/Sidebar";

import DashboardCards from "./DashboardCards";
import RevenueChart from "./RevenueChart";
import TrafficPieChart from "./TrafficPieChart";
import ActivityFeed from "./ActivityFeed";

export default function Dashboard() {

  return (

    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>

        <h1>Admin Dashboard</h1>

        <DashboardCards />

        <div
          style={{
            display: "flex",
            gap: "30px",
            marginTop: "30px"
          }}
        >
          <RevenueChart />
          <TrafficPieChart />
          <ActivityFeed />
        </div>

      </div>

    </div>

  );
}