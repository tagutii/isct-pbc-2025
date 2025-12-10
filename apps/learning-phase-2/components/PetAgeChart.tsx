import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { getAgeCategory } from "../lib/petUtils";

type Pet = {
  id: number;
  name: string;
  species: string;
  age: number;
  color: string;
  breed: string;
};

type PetAgeChartProps = {
  pets: Pet[];
};

export default function PetAgeChart({ pets }: PetAgeChartProps) {
  // Count pets by age category
  const babyCount = pets.filter((p) => getAgeCategory(p.age) === "Baby").length;
  const adultCount = pets.filter(
    (p) => getAgeCategory(p.age) === "Adult"
  ).length;
  const seniorCount = pets.filter(
    (p) => getAgeCategory(p.age) === "Senior"
  ).length;

  // Prepare data for the chart
  const data = [
    { id: 1, category: "Baby (0-1)", count: babyCount },
    { id: 2, category: "Adult (2-7)", count: adultCount },
    { id: 3, category: "Senior (8+)", count: seniorCount },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Age Distribution</h2>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </div>
  );
}
