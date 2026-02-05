"use client";

import Link from "next/link";
import Image from "next/image"; 
import { ShoppingCart, Menu, Search } from "lucide-react"; // Borramos Droplets porque ya no lo usamos
import { Button } from "@/components/ui/button";
import CartSheet from "@/components/cart/CartSheet";
import SearchBar from "@/components/SearchBar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  const links = [
    { name: "Inicio", href: "/" },
    { name: "Agua", href: "/categoria/agua" },
    { name: "Gas", href: "/categoria/gas" },
    { name: "Sanitarios", href: "/categoria/sanitarios" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b-4 border-aqua-orange">
      
      <div className="flex h-24 items-center justify-between px-6 md:px-10 w-full relative max-w-[1920px] mx-auto">
        
        {/* 1. IZQUIERDA: LOGO  */}
        <div className="flex-shrink-0 z-20">
          <Link href="/" className="block hover:opacity-80 transition-opacity">
            <img 
              src="/logo-nav.png" 
              alt="Aqua Sanitarios" 
              className="h-45 w-auto object-contain" 
            />
          </Link>
        </div>

        {/* 2. CENTRO: Links */}
        <nav className="hidden lg:flex gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-bold text-gray-700 hover:text-aqua-orange transition-colors uppercase tracking-wide py-2 border-b-2 border-transparent hover:border-aqua-orange"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 3. DERECHA: Buscador y Carrito */}
        <div className="flex items-center gap-6 z-20">
          
          <div className="hidden xl:block w-80">
            <SearchBar /> 
          </div>

          <div className="flex items-center gap-2">
             <div className="hidden sm:flex flex-col text-right mr-2">
                <span className="text-xs text-gray-500 font-bold">Tu Carrito</span>
                <span className="text-xs text-aqua-orange font-bold">Ver compra</span>
             </div>
             <CartSheet />
          </div>

          {/* Menú Móvil */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-8 w-8 text-aqua-blue" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="text-left">
                    {/* Logo chiquito en el menú móvil también */}
                    <div className="w-32">
                      <img src="/logo-nav.jpg" alt="Aqua Logo" className="w-full object-contain" />
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 mt-8">
                  <div className="relative">
                    <SearchBar />
                  </div>
                  <Separator />
                  <nav className="flex flex-col gap-6">
                    {links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-xl font-bold text-gray-800 hover:text-aqua-orange"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}