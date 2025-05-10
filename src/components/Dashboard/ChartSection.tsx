
import { Card } from "@/components/ui/card";

interface ChartSectionProps {
  title: string;
  chartType: "pie" | "line" | "bar";
  children?: React.ReactNode;
}

const ChartSection = ({ title, chartType, children }: ChartSectionProps) => {
  return (
    <Card className="chart-container">
      <h3 className="font-medium mb-4">{title}</h3>
      <div className="h-[300px] flex items-center justify-center">
        {children ? (
          children
        ) : (
          <div className="text-center">
            <div className="text-7xl mb-4">📊</div>
            <p className="text-muted-foreground">Chart would render here with real data</p>
            <p className="text-sm text-gray-400 mt-2">({chartType} chart placeholder)</p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ChartSection;
