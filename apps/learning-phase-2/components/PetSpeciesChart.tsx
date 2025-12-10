import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

type Pet = {
  id: number;
  name: string;
  species: string;
  age: number;
  color: string;
  breed: string;
};

type PetSpeciesChartProps = {
  pets: Pet[];
};

export default function PetSpeciesChart({ pets }: PetSpeciesChartProps) {
  // Count pets by species
  const dogCount = pets.filter((p) => p.species === "Dog").length;
  const catCount = pets.filter((p) => p.species === "Cat").length;
  const otherCount = pets.filter(
    (p) => p.species !== "Dog" && p.species !== "Cat"
  ).length;

  // Prepare data for the chart
  const data = [
    { id: 1, name: "Dogs", value: dogCount },
    { id: 2, name: "Cats", value: catCount },
    { id: 3, name: "Others", value: otherCount },
  ];

  const COLORS = ["#FF6B6B", "#4ECDC4", "#FFE66D"];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Pet Species Distribution
      </h2>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx={200}
          cy={150}
          labelLine={false}
          label
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry) => (
            <Cell
              key={entry.id}
              fill={COLORS.find((_, i) => i === entry.id - 1)}
            />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
