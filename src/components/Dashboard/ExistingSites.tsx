import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "components/ui/tabs";

const ExistingSites = () => {
  const sites = [
    { id: 1, name: "Berlin Central Hub", address: "Alexanderplatz, Berlin", country: "Germany", type: "High Capacity", status: "Active" },
    { id: 2, name: "Paris Logistics Center", address: "Porte de la Chapelle, Paris", country: "France", type: "High Capacity", status: "Active" },
    { id: 3, name: "Milan Distribution", address: "Via Mecenate, Milan", country: "Italy", type: "Medium Capacity", status: "Active" },
    { id: 4, name: "Rotterdam Port", address: "Maasvlakte, Rotterdam", country: "Netherlands", type: "High Capacity", status: "Maintenance" },
    { id: 5, name: "Barcelona Freight Terminal", address: "Port of Barcelona", country: "Spain", type: "Medium Capacity", status: "Active" },
    { id: 6, name: "Vienna Logistics Park", address: "Freudenau Hafen, Vienna", country: "Austria", type: "Low Capacity", status: "Active" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Existing Sites</h1>
      <p className="text-muted-foreground mb-8">
        Database of currently operational charging infrastructure
      </p>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Input className="w-[300px]" placeholder="Search sites..." />
          <Button variant="outline">Search</Button>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="high">High Capacity</SelectItem>
              <SelectItem value="medium">Medium Capacity</SelectItem>
              <SelectItem value="low">Low Capacity</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
              <SelectItem value="offline">Offline</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="maps" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="maps">Maps</TabsTrigger>
        </TabsList>

        <TabsContent value="maps">
          <Tabs defaultValue="publicTruckChargers" className="mb-4">
            <TabsList className="mb-4">
              <TabsTrigger value="publicTruckChargers">Public Truck Chargers</TabsTrigger>
              <TabsTrigger value="germanyHDT">Germany HDT</TabsTrigger>
              <TabsTrigger value="italyHDT">Italy HDT Map 2</TabsTrigger>
              <TabsTrigger value="ocmTruckMap">OCM Truck Map</TabsTrigger>
            </TabsList>

            <TabsContent value="publicTruckChargers">
              <iframe
                src="/Public truck chargers (1).html"
                className="w-full h-[400px] rounded-lg border-0"
                title="Public Truck Chargers Map"
              />
            </TabsContent>

            <TabsContent value="germanyHDT">
              <iframe
                src="/germany hdt (1).html"
                className="w-full h-[400px] rounded-lg border-0"
                title="Germany HDT Map"
              />
            </TabsContent>

            <TabsContent value="italyHDT">
              <iframe
                src="/Italy hdt map 2 (1).html"
                className="w-full h-[400px] rounded-lg border-0"
                title="Italy HDT Map 2"
              />
            </TabsContent>

            <TabsContent value="ocmTruckMap">
              <iframe
                src="/ocm_truck_map.html"
                className="w-full h-[400px] rounded-lg border-0"
                title="OCM Truck Map"
              />
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>

      <Button>View All Sites</Button>
    </div>
  );
};

export default ExistingSites;
