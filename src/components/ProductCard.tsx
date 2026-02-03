"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store";

// Definimos la estructura de los datos que recibimos
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Conectamos con el estado global del carrito
  const addItem = useCartStore((state) => state.addItem);

  // Función para manejar el click en el botón "Agregar"
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita que el click se propague (por si hubiera un link padre)
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  // Formateador de moneda (Pesos Argentinos)
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="group relative bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
      
      {/* 1. SECCIÓN IMAGEN (Con Link al detalle) */}
      <Link href={`/producto/${product.id}`} className="block relative aspect-square overflow-hidden bg-gray-100 cursor-pointer">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badge de Categoría */}
        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 text-xs font-bold uppercase tracking-wider text-gray-900 rounded-md shadow-sm">
          {product.category}
        </div>
      </Link>

      {/* 2. SECCIÓN INFO */}
      <div className="p-4 space-y-3 flex flex-col flex-1">
        <div className="flex-1">
          {/* Título (Con Link al detalle) */}
          <Link href={`/producto/${product.id}`}>
            <h3 className="font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer mb-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-sm text-gray-500">Marca líder</p>
        </div>
        
        {/* Precio y Botón */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-lg font-bold text-blue-700">
            {formatPrice(product.price)}
          </span>
          
          <Button 
            onClick={handleAddToCart}
            size="icon" 
            className="rounded-full bg-gray-900 hover:bg-blue-600 transition-colors shadow-md active:scale-95 flex-shrink-0"
            title="Agregar al carrito"
          >
            <ShoppingCart className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}