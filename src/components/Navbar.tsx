"use client";

import Link from "next/link";
import { ShoppingCart, Menu, Search, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/lib/store";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import CartSheet from "@/components/cart/CartSheet";
import SearchBar from "@/components/SearchBar";

export default function Navbar() {
  const links = [
    { name: "Inicio", href: "/" },
    { name: "Agua", href: "/categoria/agua" },
    { name: "Gas", href: "/categoria/gas" },
    { name: "Sanitarios", href: "/categoria/sanitarios" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      
      {/* CAMBIO 1: Usamos 'w-full px-6' en lugar de 'container' para usar todo el ancho */}
      <div className="flex h-16 items-center justify-between px-4 md:px-8 w-full relative">
        
        {/* 1. IZQUIERDA: Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-700">
            <Droplets className="h-6 w-6" />
            <span className="hidden sm:inline-block">Aqua Sanitarios</span>
            <span className="sm:hidden">Aqua</span>
          </Link>
        </div>

        {/* 2. CENTRO: Links de Navegación */}
        {/* Truco de ingeniero: position absolute + translate para centrado matemático perfecto */}
        <nav className="hidden md:flex gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 3. DERECHA: Acciones (Buscador, Carrito ÚNICO, Menú Móvil) */}
        <div className="flex items-center gap-4">
          
          {/* Buscador Desktop */}
          <SearchBar />

          <CartSheet />

          {/* Menú Móvil */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="text-left flex items-center gap-2 text-blue-700 font-bold">
                    <Droplets className="h-5 w-5" /> Aqua Sanitarios
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-6">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input placeholder="Buscar..." className="pl-9" />
                  </div>
                  <Separator />
                  <nav className="flex flex-col gap-4">
                    {links.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-lg font-medium hover:text-blue-600"
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