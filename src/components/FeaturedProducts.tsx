import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import FadeIn from "@/components/animations/FadeIn";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedProducts() {
  // Tomamos los primeros 4 como "destacados" para el ejemplo
  const featured = products.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        
        <div className="flex justify-between items-end mb-10">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Ofertas del Mes
            </h2>
            <p className="text-gray-500 mt-2">Precios congelados hasta agotar stock.</p>
          </FadeIn>
          
          <Link href="/categoria/agua" className="hidden md:flex items-center text-blue-600 font-medium hover:underline">
            Ver todo <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.1}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
           <Link href="/categoria/agua" className="text-blue-600 font-medium">Ver todas las ofertas</Link>
        </div>

      </div>
    </section>
  );
}