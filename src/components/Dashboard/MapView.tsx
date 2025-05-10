
import { Button } from "@/components/ui/button";
import ChargingMap from "./ChargingMap";

interface MapViewProps {
  setActivePage: (page: string) => void;
}

const MapView = ({ setActivePage }: MapViewProps) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Map View</h1>
      <p className="text-muted-foreground mb-8">
        Comprehensive view of charging infrastructure across Europe
      </p>

      <div className="mb-6">
        <div className="bg-white rounded-lg p-4 shadow-sm mb-4">
          <h3 className="font-medium mb-3">Map Filter Options</h3>
          <div className="flex flex-wrap gap-3">
            <FilterButton text="High Capacity" />
            <FilterButton text="Medium Capacity" />
            <FilterButton text="Low Capacity" />
            <FilterButton text="TEN-T Corridor" />
            <FilterButton text="Urban Areas" />
          </div>
        </div>
      </div>

      <ChargingMap height="600px" />

      <div className="flex justify-end mt-6">
        <Button 
          className="bg-secondary hover:bg-secondary/90 text-white" 
          onClick={() => setActivePage("existing-sites")}
        >
          Go to Existing Sites
        </Button>
      </div>
    </div>
  );
};

interface FilterButtonProps {
  text: string;
  active?: boolean;
}

const FilterButton = ({ text, active = false }: FilterButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        active 
          ? "bg-secondary text-white" 
          : "bg-gray-100 hover:bg-gray-200 text-gray-700"
      }`}
    >
      {text}
    </button>
  );
};

export default MapView;
