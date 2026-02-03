"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore, CartItem as CartItemType } from "@/lib/store";

interface Props {
  item: CartItemType;
}

export default function CartItem({ item }: Props) {
  const { addItem, removeItem } = useCartStore();

  // Función para restar: si hay 1 y resto, lo borra. Si hay más, baja la cantidad.
  const handleDecrease = () => {
    if (item.quantity > 1) {
      // Truco: addItem suma 1, pero necesitamos restar. 
      // Para restar con la logica actual del store, a veces es mejor tener una accion 'decreaseItem' en el store.
      // PERO, por simplicidad ahora, vamos a modificar el store en el Paso 2 o usar removeItem si es 1.
      // MIRA LA NOTA ABAJO SOBRE ESTO.
      
      // Por ahora, usaremos una lógica simple: si quieres restar, necesitamos actualizar el store.
      // Vamos a agregar la función 'decreaseItem' al store en un minuto.
    } 
  };
  
  // FORMATEADOR DE PRECIO
  const formatPrice = (value: number) => 
    new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", minimumFractionDigits: 0 }).format(value);

  return (
    <div className="flex gap-4 py-4 border-b">
      {/* Imagen */}
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3 className="line-clamp-1 mr-2">{item.name}</h3>
            <p className="ml-4">{formatPrice(item.price * item.quantity)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{formatPrice(item.price)} c/u</p>
        </div>
        
        <div className="flex flex-1 items-end justify-between text-sm">
          {/* Controles de Cantidad */}
          <div className="flex items-center gap-2 border rounded-md px-2 py-1">
             <button 
                onClick={() => useCartStore.getState().decreaseItem(item.id)} // Usaremos esta función nueva
                className="text-gray-500 hover:text-gray-700"
             >
               <Minus className="h-4 w-4" />
             </button>
             <span className="font-medium w-4 text-center">{item.quantity}</span>
             <button 
                onClick={() => addItem({ ...item })} 
                className="text-gray-500 hover:text-gray-700"
             >
               <Plus className="h-4 w-4" />
             </button>
          </div>

          <button
            type="button"
            onClick={() => removeItem(item.id)}
            className="font-medium text-red-600 hover:text-red-500 flex items-center gap-1"
          >
            <Trash2 className="h-4 w-4" />
            <span className="text-xs">Quitar</span>
          </button>
        </div>
      </div>
    </div>
  );
}