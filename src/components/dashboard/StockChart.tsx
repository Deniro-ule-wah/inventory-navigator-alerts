import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', stock: 40 },
  { name: 'Feb', stock: 30 },
  { name: 'Mar', stock: 45 },
  { name: 'Apr', stock: 25 },
  { name: 'May', stock: 35 },
  { name: 'Jun', stock: 50 },
];

export function StockChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Stock Level Trends</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="stock" stroke="#2563eb" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}