import { Card } from "components/ui/card";
import { PieChart, Pie, Cell, Tooltip as ReTooltip, Legend, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts";

interface ChartSectionProps {
  title: string;
  chartType: "pie" | "bar";
  data?: any[];
  children?: React.ReactNode;
}

const pieData = [
  { name: "MCS Ultra-Fast", value: 42 },
  { name: "High-Power DC", value: 123 },
  { name: "Standard DC", value: 177 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const ChartSection = ({ title, chartType, data, children }: ChartSectionProps) => {
  if (chartType === "pie") {
    return (
      <Card className="chart-container">
        <h3 className="font-medium mb-4">{title}</h3>
        <div className="h-[300px] flex items-center justify-center">
          {children ? children : (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={data || pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {(data || pieData).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <ReTooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </Card>
    );
  } else if (chartType === "bar") {
    return (
      <Card className="chart-container">
        <h3 className="font-medium mb-4">{title}</h3>
        <div className="h-[300px] flex items-center justify-center">
          {children ? children : (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <ReTooltip />
                <Legend />
                <Bar dataKey="avgKwh" fill="#8884d8" name="Avg kWh/Session" />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </Card>
    );
  } else {
    return (
      <Card className="chart-container">
        <h3 className="font-medium mb-4">{title}</h3>
        <div className="h-[300px] flex items-center justify-center">
          <div>Chart type not implemented yet</div>
        </div>
      </Card>
    );
  }
};

export default ChartSection;
