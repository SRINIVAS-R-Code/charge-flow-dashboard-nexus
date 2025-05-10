
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChargingMap from "./ChargingMap";

const ChargingStations = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Charging Stations</h1>
      <p className="text-muted-foreground mb-8">
        Management and monitoring of charging station infrastructure
      </p>
      
      <div className="stats-grid mb-8">
        <StationStatCard 
          title="Total Stations" 
          value="342" 
          icon="⚡" 
        />
        <StationStatCard 
          title="Total Capacity" 
          value="8.6 MW" 
          icon="⚙️" 
        />
        <StationStatCard 
          title="Average Power" 
          value="250 kW" 
          icon="⚡" 
        />
        <StationStatCard 
          title="Efficiency Rate" 
          value="92%" 
          icon="✓" 
        />
      </div>

      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="map">Station Map</TabsTrigger>
          <TabsTrigger value="types">Station Types</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stationTypes.map((type, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex justify-between items-center">
                    <span>{type.name}</span>
                    <span className="text-xl">{type.icon}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Power Output:</span>
                      <span>{type.power}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Charging Time:</span>
                      <span>{type.chargingTime}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Count:</span>
                      <span>{type.count}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="map">
          <ChargingMap height="500px" />
        </TabsContent>
        
        <TabsContent value="types">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-medium mb-4">Charging Station Type Distribution</h3>
            <div className="flex flex-wrap gap-4">
              {stationTypes.map((type, index) => (
                <div key={index} className="flex-1 min-w-[200px] border rounded-lg p-4">
                  <div className="text-4xl mb-2 text-center">{type.icon}</div>
                  <h4 className="text-center font-medium">{type.name}</h4>
                  <div className="mt-4 space-y-2">
                    <DetailRow label="Power Range" value={type.power} />
                    <DetailRow label="Protocol" value={type.protocol} />
                    <DetailRow label="Charging Time" value={type.chargingTime} />
                    <DetailRow label="Count" value={`${type.count} units`} />
                    <DetailRow label="Compatibility" value={type.compatibility} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="maintenance">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-4 py-3">Station ID</th>
                  <th className="text-left px-4 py-3">Location</th>
                  <th className="text-left px-4 py-3">Last Maintenance</th>
                  <th className="text-left px-4 py-3">Status</th>
                  <th className="text-left px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {maintenanceData.map((item) => (
                  <tr key={item.id} className="hover:bg-muted">
                    <td className="px-4 py-3 font-medium">{item.id}</td>
                    <td className="px-4 py-3">{item.location}</td>
                    <td className="px-4 py-3">{item.lastMaintenance}</td>
                    <td className="px-4 py-3">
                      <span 
                        className={`px-2 py-1 rounded-full text-xs ${
                          item.status === "Operational" 
                            ? "bg-green-100 text-green-800" 
                            : item.status === "Scheduled" 
                              ? "bg-yellow-100 text-yellow-800" 
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <Button variant="outline" size="sm">Schedule</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button>Generate Station Report</Button>
      </div>
    </div>
  );
};

interface StationStatCardProps {
  title: string;
  value: string;
  icon: string;
}

const StationStatCard = ({ title, value, icon }: StationStatCardProps) => {
  return (
    <div className="stat-card border-secondary">
      <div className="flex justify-between">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <span className="text-xl">{icon}</span>
      </div>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
};

interface DetailRowProps {
  label: string;
  value: string;
}

const DetailRow = ({ label, value }: DetailRowProps) => {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground">{label}:</span>
      <span>{value}</span>
    </div>
  );
};

const stationTypes = [
  {
    name: "MCS Ultra-Fast",
    icon: "⚡⚡⚡",
    power: "700-1200 kW",
    protocol: "MCS",
    chargingTime: "30-45 min",
    compatibility: "Heavy-duty trucks",
    count: 42
  },
  {
    name: "High-Power DC",
    icon: "⚡⚡",
    power: "350-500 kW",
    protocol: "CCS2",
    chargingTime: "45-90 min",
    compatibility: "Trucks & buses",
    count: 123
  },
  {
    name: "Standard DC",
    icon: "⚡",
    power: "150-350 kW",
    protocol: "CCS2/CHAdeMO",
    chargingTime: "1.5-3 hours",
    compatibility: "All electric vehicles",
    count: 177
  }
];

const maintenanceData = [
  { id: "CS-1042", location: "Berlin Central Hub", lastMaintenance: "2025-04-15", status: "Operational" },
  { id: "CS-0857", location: "Munich East Logistics", lastMaintenance: "2025-03-22", status: "Scheduled" },
  { id: "CS-1128", location: "Hamburg Port Terminal", lastMaintenance: "2025-04-30", status: "Operational" },
  { id: "CS-0762", location: "Frankfurt Freight Center", lastMaintenance: "2025-02-18", status: "Requires Attention" },
  { id: "CS-0991", location: "Düsseldorf Logistics Park", lastMaintenance: "2025-04-05", status: "Operational" },
];

export default ChargingStations;
