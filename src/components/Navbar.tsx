"use client"; // Importante: esto es un componente interactivo

import Link from "next/link";
import { ShoppingCart, Menu, Search, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* LOGO - Izquierda */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-blue-700">
          <Droplets className="h-6 w-6" />
          <span>Aqua Sanitarios</span>
        </Link>

        {/* MENÚ DE ESCRITORIO - Centro (Oculto en móvil) */}
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-700">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* ACCIONES - Derecha */}
        <div className="flex items-center gap-4">
          {/* Buscador (Solo Desktop) */}
          <div className="hidden md:flex relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Buscar caños, grifería..."
              className="pl-9 bg-gray-50 border-gray-200 focus-visible:ring-blue-500"
            />
          </div>

          {/* Carrito */}
          <Button variant="ghost" size="icon" className="relative text-gray-700 hover:text-blue-600">
            <ShoppingCart className="h-6 w-6" />
            <span className="sr-only">Carrito</span>
            {/* Badge de cantidad (Simulado por ahora) */}
            <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
          </Button>

          {/* MENÚ MÓVIL (Hamburguesa) */}
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
                  {/* Buscador Móvil */}
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