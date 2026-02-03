"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { useCartStore } from "@/lib/store";
import CartItem from "./CartItem";
import { Separator } from "@/components/ui/separator";

export default function CartSheet() {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.getTotalPrice());
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  // Generador de Link de WhatsApp
  const handleCheckout = () => {
    const phone = "5492494000000"; // PONER EL NUMERO REAL AQUI (sin +)
    
    let message = "Hola Aqua! Quiero consultar por este pedido:%0A%0A";
    items.forEach((item) => {
      message += `• ${item.quantity}x ${item.name} - $${item.price * item.quantity}%0A`;
    });
    message += `%0A*Total Estimado: $${total}*`;

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const formatPrice = (value: number) => 
    new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", minimumFractionDigits: 0 }).format(value);

  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* Este es el botón que se ve en el Navbar */}
        <Button variant="ghost" size="icon" className="relative text-gray-700 hover:text-blue-600">
          <ShoppingCart className="h-6 w-6" />
          <span className="sr-only">Carrito</span>
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 text-[11px] font-bold flex items-center justify-center rounded-full bg-red-600 text-white ring-2 ring-white animate-in zoom-in">
              {itemCount}
            </span>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-md flex flex-col h-full bg-white text-gray-900">
        <SheetHeader>
          <SheetTitle>Tu Carrito ({itemCount})</SheetTitle>
        </SheetHeader>

        {/* Lista Scrollable */}
        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
              <ShoppingCart className="h-12 w-12 opacity-20" />
              <p>El carrito está vacío</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer Fijo con Total */}
        {items.length > 0 && (
          <div className="space-y-4 pt-4">
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white" onClick={handleCheckout}>
              Pedir por WhatsApp
            </Button>
            <p className="text-xs text-center text-gray-500 px-4">
              El envío se coordina directamente con el vendedor.
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}