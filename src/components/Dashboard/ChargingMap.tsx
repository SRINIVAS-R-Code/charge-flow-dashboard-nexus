
interface ChargingMapProps {
  region?: string;
  height?: string;
  filters?: string[];
}

const ChargingMap = ({ 
  region = "DE,FR,IT,ES,GB,PL,SE,NO,FI,DK,BE,NL,AT,CH,PT",
  height = "500px",
  filters = []
}: ChargingMapProps) => {
  // Build the URL with region filters
  const baseUrl = "https://map.openchargemap.io/?mode=embedded";
  const regionParam = `countrycode=${region}`;
  const filterParams = filters.length > 0 ? `&${filters.join('&')}` : '';
  const mapUrl = `${baseUrl}&${regionParam}${filterParams}`;

  return (
    <div className="map-container" style={{ height }}>
      <iframe 
        src={mapUrl}
        className="w-full h-full rounded-lg border-0"
        allow="geolocation" 
        title="Charging Infrastructure Map"
      />
      <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-md text-xs text-gray-500">
        Data from OpenChargeMap
      </div>
    </div>
  );
};

export default ChargingMap;
