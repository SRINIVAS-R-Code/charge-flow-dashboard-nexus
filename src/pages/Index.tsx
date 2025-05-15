import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardHome from "../components/Dashboard/DashboardHome";
import MapView from "../components/Dashboard/MapView";
import ExistingSites from "../components/Dashboard/ExistingSites";
import PotentialSites from "../components/Dashboard/PotentialSites";
import ChargingStations from "../components/Dashboard/ChargingStations";
import Analytics from "../components/Dashboard/Analytics";

const Index = () => {
  const [activePage, setActivePage] = useState("dashboard");

  // Updated existing sites data including public charger station count from map
  const existingSitesData = {
    totalSites: 30,            // updated total sites including public charger stations from map
    activeSites: 28,           // updated active sites count
    averageUtilization: "75%", // updated average utilization
    networkUptime: "99.95%",   // updated network uptime
    kwTypesDistribution: [     // kW types distribution for Public truck chargers
      { name: "50 kW", value: 10 },
      { name: "150 kW", value: 12 },
      { name: "350 kW", value: 8 },
    ],
    publicTruckChargersCount: 10 + 12 + 8, // sum of kwTypesDistribution values
    likelyTruckStationsCount: 19, // count of likely truck stations from map
  };

  const potentialSitesData = {
    highPriorityCount: 5,
    mediumPriorityCount: 4,
    lowPriorityCount: 3,
  };

  const analyticsData = {
    networkUptime: "99.85%",
    averageUtilization: "69%",
  };

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return (
          <DashboardHome
            existingSitesData={existingSitesData}
            potentialSitesData={potentialSitesData}
            analyticsData={analyticsData}
          />
        );
      case "map-view":
        return <MapView setActivePage={setActivePage} />;
      case "existing-sites":
        return <ExistingSites />;
      case "potential-sites":
        return <PotentialSites />;
      case "charging-stations":
        return <ChargingStations />;
      case "analytics":
        return <Analytics />;
      default:
        return (
          <DashboardHome
            existingSitesData={existingSitesData}
            potentialSitesData={potentialSitesData}
            analyticsData={analyticsData}
          />
        );
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="dashboard-content">{renderContent()}</main>
    </div>
  );
};

export default Index;
