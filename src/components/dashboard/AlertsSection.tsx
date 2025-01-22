import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";

interface Alert {
  id: string;
  product: string;
  message: string;
  type: "warning" | "danger";
  timestamp: string;
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    product: "Office Chair",
    message: "Stock below threshold (5 units remaining)",
    type: "warning",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    product: "Wireless Mouse",
    message: "Out of stock",
    type: "danger",
    timestamp: "1 day ago",
  },
];

export function AlertsSection() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">Recent Alerts</CardTitle>
        <Bell className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockAlerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-center justify-between space-x-4 rounded-md border p-4"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium">{alert.product}</p>
                <p className="text-sm text-muted-foreground">{alert.message}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  className={alert.type === "warning" ? "bg-warning" : "bg-danger"}
                >
                  {alert.type}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {alert.timestamp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}