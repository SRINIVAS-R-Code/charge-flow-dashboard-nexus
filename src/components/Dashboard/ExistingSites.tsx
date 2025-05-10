
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import ChargingMap from "./ChargingMap";

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChargingMap height="400px" />
        
        <div className="data-table">
          <div className="table-header grid grid-cols-4">
            <div className="col-span-2 text-sm font-medium">Site</div>
            <div className="text-sm font-medium">Type</div>
            <div className="text-sm font-medium">Status</div>
          </div>
          <div className="divide-y">
            {sites.map((site) => (
              <div key={site.id} className="table-row grid grid-cols-4 items-center">
                <div className="col-span-2 pl-4 py-3">
                  <div className="font-medium">{site.name}</div>
                  <div className="text-xs text-muted-foreground">{site.address}</div>
                </div>
                <div>{site.type}</div>
                <div>
                  <span 
                    className={`px-2 py-1 rounded-full text-xs ${
                      site.status === "Active" 
                        ? "bg-green-100 text-green-800" 
                        : site.status === "Maintenance" 
                          ? "bg-yellow-100 text-yellow-800" 
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {site.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Button>View All Sites</Button>
    </div>
  );
};

export default ExistingSites;
