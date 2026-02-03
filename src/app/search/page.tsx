import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import FadeIn from "@/components/animations/FadeIn";
import { SearchX } from "lucide-react";

interface SearchPageProps {
  searchParams: Promise<{ q: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams; // Leemos lo que escribió el usuario (query)
  const query = q?.toLowerCase() || "";

  // FILTRO INTELIGENTE: Busca en nombre O en categoría
  const results = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
  );

  return (
    <main className="min-h-screen bg-gray-50 py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <FadeIn className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Resultados para &quot;<span className="text-blue-600">{q}</span>&quot;
          </h1>
          <p className="text-gray-500">
            Encontramos {results.length} coincidencias.
          </p>
        </FadeIn>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((product, index) => (
              <FadeIn key={product.id} delay={index * 0.05}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <SearchX className="h-16 w-16 text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900">No encontramos nada</h2>
            <p className="text-gray-500 max-w-md mt-2">
              Intenta con palabras más simples como "tanque", "caño" o "gas".
            </p>
          </div>
        )}
      </div>
    </main>
  );
}