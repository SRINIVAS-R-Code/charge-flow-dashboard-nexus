
import { useState } from "react";
import Sidebar from "@/components/Dashboard/Sidebar";
import DashboardHome from "@/components/Dashboard/DashboardHome";
import MapView from "@/components/Dashboard/MapView";
import ExistingSites from "@/components/Dashboard/ExistingSites";
import PotentialSites from "@/components/Dashboard/PotentialSites";
import ChargingStations from "@/components/Dashboard/ChargingStations";
import Analytics from "@/components/Dashboard/Analytics";
import Settings from "@/components/Dashboard/Settings";

const Index = () => {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <DashboardHome />;
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
      case "settings":
        return <Settings />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="dashboard-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
