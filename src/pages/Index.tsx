import { Package, PackageOpen, AlertTriangle, BarChart3 } from "lucide-react";
import { StockMetricsCard } from "@/components/dashboard/StockMetricsCard";
import { StockTable } from "@/components/dashboard/StockTable";
import { StockChart } from "@/components/dashboard/StockChart";
import { AlertsSection } from "@/components/dashboard/AlertsSection";

const Index = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Stock Management Dashboard</h1>
      
      {/* Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <StockMetricsCard
          title="Total Products"
          value="124"
          icon={<Package className="h-4 w-4 text-muted-foreground" />}
          description="+4 from last month"
        />
        <StockMetricsCard
          title="Low Stock Items"
          value="7"
          icon={<AlertTriangle className="h-4 w-4 text-warning" />}
          description="Items below threshold"
        />
        <StockMetricsCard
          title="Out of Stock"
          value="3"
          icon={<PackageOpen className="h-4 w-4 text-danger" />}
          description="Requires immediate attention"
        />
        <StockMetricsCard
          title="Stock Value"
          value="$45,231"
          icon={<BarChart3 className="h-4 w-4 text-muted-foreground" />}
          description="Total inventory value"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Stock Chart */}
        <div className="md:col-span-2 lg:col-span-4">
          <StockChart />
        </div>

        {/* Alerts Section */}
        <div className="md:col-span-2 lg:col-span-3">
          <AlertsSection />
        </div>

        {/* Stock Table */}
        <div className="md:col-span-2 lg:col-span-7">
          <h2 className="text-2xl font-bold mb-4">Inventory List</h2>
          <StockTable />
        </div>
      </div>
    </div>
  );
};

export default Index;