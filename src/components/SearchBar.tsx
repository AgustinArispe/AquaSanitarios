"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que se recargue la página
    if (query.trim()) {
      // Navega a la página que creamos en el paso 1
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full lg:w-64">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
      <Input
        type="search"
        placeholder="Buscar caños, grifería..."
        className="pl-9 bg-gray-50 border-gray-200 focus-visible:ring-blue-500 rounded-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}