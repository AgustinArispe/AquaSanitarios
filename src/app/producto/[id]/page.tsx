import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ShoppingCart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
import AddToCartButton from "@/components/AddToCartButton";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  
  // Buscamos el producto por ID
  const product = products.find((p) => p.id === id);

  if (!product) {
    return notFound();
  }

  // Formateador de precio
  const formatPrice = (value: number) =>
    new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", minimumFractionDigits: 0 }).format(value);

  return (
    <main className="min-h-screen bg-white py-12 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* Botón Volver */}
        <Link href={`/categoria/${product.category}`} className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a {product.category}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* COLUMNA 1: Imagen */}
          <FadeIn direction="right" className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
             <img
               src={product.image}
               alt={product.name}
               className="object-cover w-full h-full"
             />
          </FadeIn>

          {/* COLUMNA 2: Información */}
          <FadeIn direction="left" delay={0.2} className="flex flex-col space-y-6">
            <div>
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>
            </div>

            <div className="text-3xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </div>

            <div className="prose text-gray-600 leading-relaxed">
              <p>{product.description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              {/* Usamos un componente cliente para el botón de agregar porque usa Hooks */}
              <AddToCartButton product={product} />
              
              <Button asChild variant="outline" size="lg" className="border-green-600 text-green-700 hover:bg-green-50">
                <a 
                  href={`https://wa.me/5492494000000?text=Hola! Me interesa este producto: ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Consultar Stock
                </a>
              </Button>
            </div>

            {/* Features (Hardcodeados por ahora para relleno visual) */}
            <div className="border-t pt-6 space-y-3">
               <div className="flex items-center text-sm text-gray-600">
                 <Check className="h-5 w-5 text-green-500 mr-2" />
                 Envíos a todo Tandil en el día
               </div>
               <div className="flex items-center text-sm text-gray-600">
                 <Check className="h-5 w-5 text-green-500 mr-2" />
                 Garantía oficial de fábrica
               </div>
               <div className="flex items-center text-sm text-gray-600">
                 <Check className="h-5 w-5 text-green-500 mr-2" />
                 Asesoramiento técnico incluido
               </div>
            </div>

          </FadeIn>
        </div>
      </div>
    </main>
  );
}