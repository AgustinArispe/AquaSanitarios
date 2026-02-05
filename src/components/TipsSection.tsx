"use client";

import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Datos falsos del blog (luego pueden venir de una base de datos)
const tips = [
  {
    id: 1,
    title: "LA TENDENCIA DE GRIFERÍA NEGRA EN BAÑOS MODERNOS",
    category: "CONSEJO TÉCNICO",
    image: "/tips/joaco-griferia.jpeg",
    link: "#"
  },
  {
    id: 2,
    title: "CÓMO ELEGIR LA DUCHA IDEAL",
    category: "TENDENCIA",
    image: "/tips/agus-cote.jpeg",
    link: "#"
  },
  {
    id: 3,
    title: "MANTENIMIENTO DE SANITARIOS: LO QUE TENÉS QUE SABER",
    category: "MANTENIMIENTO",
    image: "/tips/joaco-sanitarios.jpeg",
    link: "#"
  }
];

export default function TipsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* Título de la sección */}
        <div className="flex justify-between items-end mb-10 text-center md:text-left">
          <div className="w-full text-center">
             <span className="text-gray-500 font-bold tracking-widest uppercase text-sm">Aqua Lifestyle</span>
             <h2 className="text-3xl font-black text-gray-900 mt-2 uppercase">Nuestro Blog</h2>
          </div>
        </div>

        {/* Grilla de 3 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <FadeIn key={tip.id} delay={index * 0.1} className="group relative aspect-square overflow-hidden cursor-pointer bg-gray-900">
              
              {/* Imagen de Fondo con Zoom al hover */}
              <img 
                src={tip.image} 
                alt={tip.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-60"
              />
              
              {/* Degradado para que se lea el texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Contenido (Texto sobre la imagen) */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block bg-blue-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider mb-3">
                  {tip.category}
                </span>
                <h3 className="text-white font-bold text-xl md:text-2xl leading-tight mb-2 group-hover:text-blue-300 transition-colors">
                  {tip.title}
                </h3>
                <div className="h-0 overflow-hidden group-hover:h-6 transition-all duration-300">
                    <span className="text-sm text-gray-300 flex items-center gap-2">
                        Leer nota completa <ArrowRight className="h-3 w-3" />
                    </span>
                </div>
              </div>

            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}