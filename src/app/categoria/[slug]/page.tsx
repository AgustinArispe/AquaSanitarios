import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import FadeIn from "@/components/animations/FadeIn";
import { notFound } from "next/navigation";

// Definimos los tipos para los parámetros de la URL
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  // En Next.js 15+, params es una Promesa, hay que esperarla
  const { slug } = await params;

  // 1. Filtramos los productos según el slug de la URL
  const categoryProducts = products.filter((p) => p.category === slug);

  // 2. Títulos bonitos para mostrar
  const titles: Record<string, string> = {
    agua: "Agua y Plomería",
    gas: "Gas y Calefacción",
    griferia: "Grifería y Baño",
    tanques: "Tanques y Bombas",
    sanitarios: "Sanitarios y Porcelana",
  };

  const title = titles[slug] || slug.toUpperCase();

  // Si no hay productos (o la categoría no existe en nuestra "DB"), podríamos mostrar error 404
  // if (categoryProducts.length === 0) return notFound(); 

  return (
    <main className="min-h-screen bg-gray-50 py-24">
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* Encabezado */}
        <FadeIn className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 capitalize mb-2">{title}</h1>
          <p className="text-gray-500">
            Encontrados {categoryProducts.length} productos para tu obra.
          </p>
        </FadeIn>

        {/* Grilla de Productos */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryProducts.map((product, index) => (
              <FadeIn key={product.id} delay={index * 0.05}>
                <ProductCard product={product} />
              </FadeIn>
            ))}
          </div>
        ) : (
          // Estado Vacío
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No hay productos cargados en esta categoría aún.</p>
            <p className="text-sm text-gray-400 mt-2">(Prueba con 'agua', 'gas' o 'griferia')</p>
          </div>
        )}
        
      </div>
    </main>
  );
}