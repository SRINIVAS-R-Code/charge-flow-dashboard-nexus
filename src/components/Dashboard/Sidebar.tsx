import { useState } from "react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  totalChargingStations?: number;
  activeChargingStations?: number;
}

const Sidebar = ({ activePage, setActivePage, totalChargingStations, activeChargingStations }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "map-view", label: "Map View", icon: "🗺️" },
    { id: "existing-sites", label: "Existing Sites", icon: "📍" },
    { id: "potential-sites", label: "Potential Sites", icon: "🎯" },
    { id: "charging-stations", label: "Charging Stations", icon: "⚡" },
    { id: "analytics", label: "Analytics", icon: "📈" },
  ];

  return (
    <aside
      className={cn(
        "bg-gradient-to-br from-primary to-primary/80 text-white transition-all duration-300",
        collapsed ? "w-[70px]" : "w-[250px]"
      )}
    >
      <div className="p-4 flex items-center justify-between">
        <div className={cn("flex items-center", collapsed && "justify-center w-full")}>
          {!collapsed && (
            <>
              <img src="/logo.png" alt="E-HDT Logo" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold ml-2">E-HDT Dashboard</span>
            </>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-white/80 hover:text-white"
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>

      <nav className="mt-6">
        <ul className="space-y-2 px-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActivePage(item.id)}
                className={cn(
                  "w-full flex items-center p-3 rounded-lg transition-all duration-200",
                  activePage === item.id
                    ? "bg-white/20 font-medium shadow-md"
                    : "hover:bg-white/10",
                  collapsed && "justify-center"
                )}
              >
                <span className="text-xl">{item.icon}</span>
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {!collapsed && (
        <div className="mt-6 px-4 bg-white/10 rounded-lg p-3 text-sm">
          <p className="font-medium">Charging Stations Summary</p>
          <p>Total Stations: {totalChargingStations ?? "N/A"}</p>
          <p>Active Stations: {activeChargingStations ?? "N/A"}</p>
        </div>
      )}
      
      <div className="absolute bottom-4 left-0 right-0 px-4">
        {!collapsed && (
          <div className="bg-white/10 rounded-lg p-3 text-sm">
            <p className="font-medium">Sora Energy</p>
            <p className="text-xs text-white/70">© 2025 All rights reserved</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
