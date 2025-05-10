
import { Card } from "@/components/ui/card";

const DashboardHome = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">Welcome to E-HDT Dashboard</h1>
      <p className="text-muted-foreground mb-8">
        Electric Heavy-Duty Trucks Charging Infrastructure Management
      </p>

      <div className="stats-grid">
        <StatCard 
          title="Total Charging Stations" 
          value="342" 
          change="+24"
          trend="up" 
        />
        <StatCard 
          title="Active Stations" 
          value="298" 
          change="+12"
          trend="up" 
        />
        <StatCard 
          title="Average Utilization" 
          value="68%" 
          change="+5%"
          trend="up" 
        />
        <StatCard 
          title="Network Uptime" 
          value="99.8%" 
          change="-0.1%"
          trend="down" 
        />
      </div>

      <section className="mb-8">
        <h2 className="section-title">Recent Updates</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <UpdateCard 
            title="New Charging Stations"
            description="Added 10 new high-capacity charging stations across the TEN-T network"
            date="May 5, 2025"
            icon="➕"
          />
          <UpdateCard 
            title="Route Coverage Update"
            description="Extended coverage across TEN-T corridors with 5 new strategic locations"
            date="May 2, 2025" 
            icon="🧭"
          />
          <UpdateCard 
            title="Data Synchronization"
            description="Improved real-time data synchronization with all charging stations"
            date="April 30, 2025"
            icon="🔄" 
          />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="section-title">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <ActionButton text="View Active Stations" icon="📍" />
          <ActionButton text="Run Utilization Report" icon="📊" />
          <ActionButton text="Explore New Sites" icon="🔍" />
          <ActionButton text="System Diagnostics" icon="🔧" />
        </div>
      </section>

      <section>
        <h2 className="section-title">System Status</h2>
        <Card className="p-4">
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium">System Health</span>
              <div className="flex items-center">
                <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                <span className="text-sm text-green-600">Operational</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <StatusItem name="API Services" status="operational" />
              <StatusItem name="Database" status="operational" />
              <StatusItem name="Authentication" status="operational" />
              <StatusItem name="Mapping Service" status="issues" />
              <StatusItem name="Payment Processing" status="operational" />
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

const StatCard = ({ title, value, change, trend }: StatCardProps) => {
  return (
    <div className="stat-card">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <div className="flex items-end justify-between mt-1">
        <span className="text-2xl font-bold">{value}</span>
        <div className={`flex items-center ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          <span className="text-sm font-medium mr-1">{change}</span>
          <span>{trend === 'up' ? '↑' : '↓'}</span>
        </div>
      </div>
    </div>
  );
};

interface UpdateCardProps {
  title: string;
  description: string;
  date: string;
  icon: string;
}

const UpdateCard = ({ title, description, date, icon }: UpdateCardProps) => {
  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex gap-3">
        <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center text-xl">
          {icon}
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <p className="text-xs text-gray-400 mt-2">{date}</p>
        </div>
      </div>
    </Card>
  );
};

interface ActionButtonProps {
  text: string;
  icon: string;
}

const ActionButton = ({ text, icon }: ActionButtonProps) => {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 transition-colors">
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
};

interface StatusItemProps {
  name: string;
  status: "operational" | "issues" | "outage";
}

const StatusItem = ({ name, status }: StatusItemProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "operational": return "bg-green-500";
      case "issues": return "bg-yellow-400";
      case "outage": return "bg-red-500";
      default: return "bg-gray-400";
    }
  };

  return (
    <div className="flex items-center justify-between py-1 border-b border-gray-100">
      <span className="text-sm">{name}</span>
      <div className={`h-2 w-2 rounded-full ${getStatusColor()}`}></div>
    </div>
  );
};

export default DashboardHome;
