"use client";

import PetAgeChart from "@/components/PetAgeChart";
import PetCard from "@/components/PetCard";
import PetSpeciesChart from "@/components/PetSpeciesChart";

type Pet = {
  id: number;
  name: string;
  species: string;
  age: number;
  color: string;
  breed: string;
};

export default function Home() {
  const pets: Pet[] = [
    {
      id: 1,
      name: "Pochi",
      species: "Dog",
      age: 3,
      color: "Brown",
      breed: "Golden Retriever",
    },
    {
      id: 2,
      name: "Tama",
      species: "Cat",
      age: 5,
      color: "Orange",
      breed: "Persian",
    },
    {
      id: 3,
      name: "Piyo",
      species: "Bird",
      age: 2,
      color: "Yellow",
      breed: "Canary",
    },
    {
      id: 4,
      name: "Masuo",
      species: "Fish",
      age: 1,
      color: "Blue",
      breed: "Betta",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-900">
          🐾 Pet Management Dashboard 🐾
        </h1>

        {/* Add the chart here */}
        <div className="mb-8 flex justify-center">
          <PetSpeciesChart pets={pets} />
        </div>

        {/* Add age chart */}
        <div className="mb-8 flex justify-center">
          <PetAgeChart pets={pets} />
        </div>

        {/* Pet cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pets.map((pet) => (
            <PetCard key={pet.id} {...pet} />
          ))}
        </div>
      </div>
    </main>
  );
}
