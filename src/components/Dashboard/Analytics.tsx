
import ChartSection from "./ChartSection";

const Analytics = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Analytics</h1>
      <p className="text-muted-foreground mb-8">
        Key metrics and performance insights for the charging network
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartSection title="Charging Station Types" chartType="pie" />
        <ChartSection title="Charging Station Utilization Over Time" chartType="line" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <ChartSection title="Energy Consumption by Region" chartType="bar" />
        <ChartSection title="Average Charging Session Duration" chartType="line" />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="font-medium mb-4">Key Performance Metrics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard 
            title="Network Availability" 
            value="99.8%" 
            trend="up" 
            change="+0.3%" 
          />
          <MetricCard 
            title="Avg. Session Duration" 
            value="64 min" 
            trend="down" 
            change="-8 min" 
            positive
          />
          <MetricCard 
            title="Energy Delivered" 
            value="12.4 GWh" 
            trend="up" 
            change="+2.1 GWh" 
          />
          <MetricCard 
            title="CO2 Reduction" 
            value="8,240 tons" 
            trend="up" 
            change="+1,450 tons" 
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="font-medium mb-4">Regional Analysis</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left px-4 py-2">Region</th>
                <th className="text-left px-4 py-2">Stations</th>
                <th className="text-left px-4 py-2">Utilization</th>
                <th className="text-left px-4 py-2">Avg. kWh/Session</th>
                <th className="text-left px-4 py-2">Growth</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {regionalData.map((region, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{region.name}</td>
                  <td className="px-4 py-3">{region.stations}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className={`h-2 rounded-full ${
                            region.utilization > 70 ? "bg-green-500" : 
                            region.utilization > 40 ? "bg-yellow-500" : "bg-red-500"
                          }`} 
                          style={{ width: `${region.utilization}%` }}
                        ></div>
                      </div>
                      <span className="text-sm">{region.utilization}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">{region.avgKwh}</td>
                  <td className={`px-4 py-3 ${region.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {region.growth > 0 ? '+' : ''}{region.growth}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  trend: "up" | "down";
  change: string;
  positive?: boolean;
}

const MetricCard = ({ title, value, trend, change, positive = true }: MetricCardProps) => {
  const isPositiveTrend = (trend === 'up' && positive) || (trend === 'down' && !positive);
  
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h4 className="text-sm text-gray-500 mb-1">{title}</h4>
      <div className="text-2xl font-bold mb-2">{value}</div>
      <div className={`flex items-center text-sm ${isPositiveTrend ? 'text-green-600' : 'text-red-600'}`}>
        {trend === 'up' ? '↑' : '↓'} 
        <span className="ml-1">{change}</span>
      </div>
    </div>
  );
};

const regionalData = [
  { name: "Central Europe", stations: 112, utilization: 84, avgKwh: 245, growth: 12 },
  { name: "Western Europe", stations: 86, utilization: 78, avgKwh: 228, growth: 8 },
  { name: "Northern Europe", stations: 54, utilization: 62, avgKwh: 217, growth: 15 },
  { name: "Southern Europe", stations: 68, utilization: 72, avgKwh: 232, growth: 6 },
  { name: "Eastern Europe", stations: 22, utilization: 45, avgKwh: 197, growth: -2 },
];

export default Analytics;
