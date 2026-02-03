"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store";
import { useState } from "react";

// Definimos el tipo mínimo que necesita el botón
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function AddToCartButton({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    
    // Feedback visual temporal
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <Button 
      size="lg" 
      onClick={handleAdd}
      className={`transition-all duration-300 ${isAdded ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}`}
    >
      <ShoppingCart className="mr-2 h-5 w-5" />
      {isAdded ? "¡Agregado!" : "Agregar al Carrito"}
    </Button>
  );
}