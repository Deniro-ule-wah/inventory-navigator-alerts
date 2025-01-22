import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  category: string;
  stockLevel: number;
  threshold: number;
  status: "in-stock" | "low-stock" | "out-of-stock";
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Office Chair",
    category: "Furniture",
    stockLevel: 25,
    threshold: 10,
    status: "in-stock",
  },
  {
    id: "2",
    name: "Desk Lamp",
    category: "Lighting",
    stockLevel: 8,
    threshold: 15,
    status: "low-stock",
  },
  {
    id: "3",
    name: "Wireless Mouse",
    category: "Electronics",
    stockLevel: 0,
    threshold: 5,
    status: "out-of-stock",
  },
  // Add more mock products as needed
];

const getStatusColor = (status: Product["status"]) => {
  switch (status) {
    case "in-stock":
      return "bg-success";
    case "low-stock":
      return "bg-warning";
    case "out-of-stock":
      return "bg-danger";
    default:
      return "bg-gray-500";
  }
};

export function StockTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<Product[]>(mockProducts);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Stock Level</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.stockLevel}</TableCell>
                <TableCell>
                  <Badge className={`${getStatusColor(product.status)}`}>
                    {product.status.replace("-", " ")}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}