import { Card } from "components/ui/card";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid, Legend, PieChart, Pie, Cell } from "recharts";

interface ExistingSitesData {
  totalSites: number;
  activeSites: number;
  averageUtilization: string;
  networkUptime: string;
  kwTypesDistribution: { name: string; value: number }[]; // new prop for pie chart
  publicTruckChargersCount?: number; // new optional prop for public truck chargers count
  likelyTruckStationsCount?: number; // new optional prop for likely truck stations count
}

interface PotentialSitesData {
  highPriorityCount: number;
  mediumPriorityCount: number;
  lowPriorityCount: number;
}

interface AnalyticsData {
  networkUptime: string;
  averageUtilization: string;
}

interface DashboardHomeProps {
  existingSitesData: ExistingSitesData;
  potentialSitesData: PotentialSitesData;
  analyticsData: AnalyticsData;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const PRIORITY_COLORS = ['#00C49F', '#FFBB28', '#FF0000']; // Green, Orange, Red

const StatCard = ({ title, value, change, trend }: { title: string; value: string; change: string; trend: "up" | "down" }) => {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-semibold">{value}</p>
      <p className={`text-sm ${trend === "up" ? "text-green-600" : "text-red-600"}`}>{change}</p>
    </Card>
  );
};

const renderLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={14}
      fontWeight="bold"
      style={{ pointerEvents: "none" }}
    >
      {name}
    </text>
  );
};

const DashboardHome = ({ existingSitesData, potentialSitesData, analyticsData }: DashboardHomeProps) => {
  // Prepare data for charts
  const siteStatusData = [
    { name: "Total Sites", value: existingSitesData.totalSites },
    { name: "Active Sites", value: existingSitesData.activeSites },
  ];

  const priorityData = [
    { name: "High Priority", value: potentialSitesData.highPriorityCount },
    { name: "Medium Priority", value: potentialSitesData.mediumPriorityCount },
    { name: "Low Priority", value: potentialSitesData.lowPriorityCount },
  ];

  const utilizationData = [
    { name: "Average Utilization", value: parseFloat(existingSitesData.averageUtilization) },
    { name: "Network Uptime", value: parseFloat(existingSitesData.networkUptime) },
  ];

  return (
    <div>
      <Card className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-md flex flex-col space-y-2">
        <h1 className="text-3xl font-bold">Welcome to E-HDT Dashboard</h1>
        <p className="text-muted-foreground">
          Here you can find key metrics and insights about the charging network.
        </p>
      </Card>

      <div className="stats-grid mb-8">
        <StatCard 
          title="Total Charging Stations" 
          value={existingSitesData.totalSites.toString()} 
          change="+24"
          trend="up" 
        />
        <StatCard 
          title="Active Stations" 
          value={existingSitesData.activeSites.toString()} 
          change="+12"
          trend="up" 
        />
        <StatCard 
          title="Average Utilization" 
          value={existingSitesData.averageUtilization} 
          change="+5%"
          trend="up" 
        />
        <StatCard 
          title="Network Uptime" 
          value={existingSitesData.networkUptime} 
          change="-0.1%"
          trend="down" 
        />
        {existingSitesData.publicTruckChargersCount !== undefined && (
          <StatCard
            title="Public Truck Chargers"
            value={existingSitesData.publicTruckChargersCount.toString()}
            change="+0"
            trend="up"
          />
        )}
        {existingSitesData.likelyTruckStationsCount !== undefined && (
          <StatCard
            title="Likely Truck Stations"
            value={existingSitesData.likelyTruckStationsCount.toString()}
            change="+0"
            trend="up"
          />
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-2">Site Status</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={siteStatusData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-2">Site Priority</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={priorityData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-2">Charging Station Type Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={existingSitesData.kwTypesDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                fill="#8884d8"
                label={renderLabel}
              >
                {existingSitesData.kwTypesDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-2">Utilization & Uptime</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={utilizationData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Line type="monotone" dataKey="value" stroke="#ef4444" />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-4">
          <h3 className="text-lg font-semibold mb-2">eTruck Charger Potential Map</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={priorityData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                fill="#8884d8"
                label={renderLabel}
              >
                {priorityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={PRIORITY_COLORS[index % PRIORITY_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
