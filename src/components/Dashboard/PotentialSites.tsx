
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChargingMap from "./ChargingMap";

const PotentialSites = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Potential Sites</h1>
      <p className="text-muted-foreground mb-8">
        Planning and analysis of potential new charging locations
      </p>

      <Tabs defaultValue="map" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="map">Map View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="analysis">Site Analysis</TabsTrigger>
        </TabsList>
        
        <TabsContent value="map">
          <ChargingMap height="500px" />
        </TabsContent>
        
        <TabsContent value="list">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-4 py-3">Location</th>
                  <th className="text-left px-4 py-3">Country</th>
                  <th className="text-left px-4 py-3">Priority</th>
                  <th className="text-left px-4 py-3">Viability Score</th>
                  <th className="text-left px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {potentialSites.map((site) => (
                  <tr key={site.id} className="hover:bg-muted">
                    <td className="px-4 py-3">
                      <div className="font-medium">{site.name}</div>
                      <div className="text-xs text-muted-foreground">{site.address}</div>
                    </td>
                    <td className="px-4 py-3">{site.country}</td>
                    <td className="px-4 py-3">
                      <PriorityBadge priority={site.priority} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className={`h-2 rounded-full ${getScoreColor(site.viabilityScore)}`} 
                            style={{ width: `${site.viabilityScore}%` }}
                          ></div>
                        </div>
                        <span className="text-sm">{site.viabilityScore}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <Button variant="outline" size="sm">View Details</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
        
        <TabsContent value="analysis">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-medium mb-4">Site Selection Criteria</h3>
              <ul className="space-y-2 text-sm">
                <li>• Proximity to TEN-T corridors</li>
                <li>• Grid connection capacity</li>
                <li>• Land availability</li>
                <li>• Accessibility for heavy-duty vehicles</li>
                <li>• Existing traffic patterns</li>
                <li>• Environmental considerations</li>
                <li>• Local regulations</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-medium mb-4">Priority Regions</h3>
              <ul className="space-y-2 text-sm">
                <li>• Northern Italy - Po Valley</li>
                <li>• Rhine-Alpine Corridor</li>
                <li>• North Sea-Baltic Corridor</li>
                <li>• Atlantic Corridor</li>
                <li>• Mediterranean Corridor</li>
                <li>• Scandinavian-Mediterranean</li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-medium mb-4">Investment Planning</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Total Budget Allocation</p>
                  <p className="font-medium">€120,000,000</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Sites Planned (2025)</p>
                  <p className="font-medium">35</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Average Cost per Site</p>
                  <p className="font-medium">€3,428,571</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between">
        <Button variant="outline">Export Data</Button>
        <Button className="bg-secondary hover:bg-secondary/90 text-white">Add New Site</Button>
      </div>
    </div>
  );
};

interface PriorityBadgeProps {
  priority: "High" | "Medium" | "Low";
}

const PriorityBadge = ({ priority }: PriorityBadgeProps) => {
  const getBadgeColor = () => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs ${getBadgeColor()}`}>
      {priority}
    </span>
  );
};

const getScoreColor = (score: number) => {
  if (score >= 80) return "bg-green-500";
  if (score >= 60) return "bg-yellow-500";
  return "bg-red-500";
};

const potentialSites = [
  { id: 1, name: "Munich East Logistics", address: "A94 Corridor, Munich", country: "Germany", priority: "High" as const, viabilityScore: 92 },
  { id: 2, name: "Lyon Freight Hub", address: "Port Edouard Herriot, Lyon", country: "France", priority: "High" as const, viabilityScore: 87 },
  { id: 3, name: "Antwerp Container Terminal", address: "Port of Antwerp", country: "Belgium", priority: "Medium" as const, viabilityScore: 78 },
  { id: 4, name: "Warsaw Logistics Center", address: "Janki, Warsaw", country: "Poland", priority: "Medium" as const, viabilityScore: 75 },
  { id: 5, name: "Stockholm South Terminal", address: "Årsta, Stockholm", country: "Sweden", priority: "Low" as const, viabilityScore: 62 },
  { id: 6, name: "Porto Industrial Zone", address: "Matosinhos, Porto", country: "Portugal", priority: "Low" as const, viabilityScore: 58 },
];

export default PotentialSites;
