"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn"; 
import FeatureItem from "@/components/animations/FeatureItem";   

export default function Hero() {
  return (
        <section className="relative overflow-hidden bg-gray-50 h-screen flex items-center">      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* COLUMNA IZQUIERDA */}
          <div className="flex flex-col justify-center space-y-8">
            
            {/* Bloque 1: Títulos */}
            <FadeIn delay={0.1}>
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">
                  <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                  Envíos a todo Tandil
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                  Soluciones integrales para tu <span className="text-blue-600">obra de agua y gas</span>
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Todo lo que necesitas en sanitarios, grifería, caños y accesorios. Asesoramiento experto de familia a familia.
                </p>
              </div>
            </FadeIn>

            {/* Bloque 2: Botones */}
            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20">
                  <Link href="/catalogo">
                    Ver Catálogo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  <Link href="/contacto">
                    Consultar por WhatsApp
                  </Link>
                </Button>
              </div>
            </FadeIn>

            {/* Bloque 3: Features (Modularizados) */}
            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-4 lg:gap-8">
                <FeatureItem text="Stock Permanente" />
                <FeatureItem text="Atención Personalizada" />
                <FeatureItem text="Garantía de Calidad" />
              </div>
            </FadeIn>
          </div>

          {/* COLUMNA DERECHA: Imagen */}
          <FadeIn direction="left" delay={0.2} className="w-full flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                alt="Baño moderno Aqua Sanitarios"
                className="aspect-square object-cover w-full h-full"
                src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none" />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}