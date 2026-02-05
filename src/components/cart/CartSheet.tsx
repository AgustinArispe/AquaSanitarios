"use client";

import { useEffect, useState } from "react";
import { ShoppingCart, Plus, Minus, Trash2, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useCartStore } from "@/lib/store";

export default function CartSheet() {
  // 1. HIDRATACIÓN
  const [mounted, setMounted] = useState(false);
  
  // 2. CONEXIÓN DIRECTA
  // Traemos todo el estado para asegurarnos que cualquier cambio dispare el render
  const items = useCartStore((state) => state.items);
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useCartStore((state) => state.removeItem);
  const decreaseItem = useCartStore((state) => state.decreaseItem);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Calculamos totales
  const itemCount = mounted ? items.reduce((acc, item) => acc + item.quantity, 0) : 0;
  const total = mounted ? getTotalPrice() : 0;

  const formatPrice = (value: number) =>
    new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", minimumFractionDigits: 0 }).format(value);

  const handleCheckout = () => {
    const phone = "5492494567818"; 
    let message = "Hola Aqua! 👋 Pedido Web:%0A%0A";
    items.forEach((item) => {
      message += `▪️ ${item.quantity}x ${item.name} - $${item.price * item.quantity}%0A`;
    });
    message += `%0A💰 *Total: $${formatPrice(total)}*`;
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  // Si no está montado, mostramos botón estático para evitar parpadeos
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative h-10 w-10 text-gray-700">
        <ShoppingCart className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-10 w-10 text-gray-700 hover:text-aqua-orange hover:bg-transparent">
          <ShoppingCart className="h-6 w-6" />
          
          {/* EL GLOBO ROJO (BADGE) */}
          {/* Usamos una animación key para forzar repintado cuando cambia el número */}
          {itemCount > 0 && (
            <span 
              key={itemCount} 
              className="absolute -top-1 -right-1 h-5 w-5 text-[10px] font-bold flex items-center justify-center rounded-full bg-aqua-orange text-white ring-2 ring-white animate-in zoom-in spin-in-3"
            >
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-md flex flex-col bg-white p-0 border-l border-gray-200 shadow-2xl z-[100]">
        {/* Header */}
        <SheetHeader className="px-6 py-4 border-b border-gray-100 flex flex-row items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <SheetTitle className="text-xl font-bold text-gray-900">Tu Carrito</SheetTitle>
            <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded-full">
              {itemCount}
            </span>
          </div>
          {/* Botón Cerrar Manual para asegurar UX */}
          <SheetClose asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500">
               <X className="h-5 w-5" />
            </Button>
          </SheetClose>
        </SheetHeader>

        {/* Lista */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="h-24 w-24 bg-gray-50 rounded-full flex items-center justify-center">
                <ShoppingCart className="h-10 w-10 text-gray-300" />
              </div>
              <p className="text-gray-500">El carrito está vacío</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 animate-in slide-in-from-right-4 duration-300">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-gray-900 line-clamp-1 text-sm">{item.name}</h3>
                      <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-gray-100 rounded-md p-1">
                         <button onClick={() => decreaseItem(item.id)} className="w-6 h-6 bg-white rounded flex items-center justify-center shadow-sm"><Minus className="h-3 w-3" /></button>
                         <span className="w-4 text-center text-xs font-bold">{item.quantity}</span>
                         <button onClick={() => addItem(item)} className="w-6 h-6 bg-white rounded flex items-center justify-center shadow-sm"><Plus className="h-3 w-3" /></button>
                      </div>
                      <span className="font-bold text-gray-900 text-sm">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 bg-gray-50 px-6 py-6">
            <div className="flex justify-between items-center mb-4">
               <span className="text-lg font-bold">Total</span>
               <span className="text-2xl font-black text-aqua-blue">{formatPrice(total)}</span>
            </div>
            <Button className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl flex gap-2" onClick={handleCheckout}>
              <MessageCircle className="h-5 w-5" /> Confirmar por WhatsApp
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}