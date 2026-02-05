import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";

export default function HistoryBanner() {
  return (
    // Agregamos 'bg-gray-900' para que si falla la foto, el fondo sea negro y se lea el texto blanco
    <section className="relative w-full h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden bg-gray-900">
      
      {/* 1. Imagen de Fondo */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-60" // Opacidad 60% para que se vea oscura
        style={{ 
          // Usamos tu foto de noche que tiene lindo contraste
          backgroundImage: 'url("/Shop_night_2.jpg")', 
        }} 
      />

      {/* 2. Capa Negra Extra (Gradiente) para asegurar lectura */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />

      {/* 3. Contenido Centrado */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white space-y-8">
        <FadeIn>
          <div className="inline-block mb-4 border-b-2 border-aqua-orange pb-1">
            <span className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-gray-300">
              Sobre Nosotros
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-lg">
            CONOCÉ NUESTRA <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">HISTORIA</span>
          </h2>
          
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
            Desde 2018 acompañando a las familias de Tandil. 
            Somos más que una casa de sanitarios, somos parte de tu proyecto.
          </p>
          
          <Button 
            asChild 
            size="lg" 
            className="bg-aqua-orange hover:bg-orange-600 text-white font-bold text-lg px-10 py-7 rounded-full shadow-lg hover:shadow-orange-500/50 transition-all hover:scale-105"
          >
            <Link href="/historia">
              Leer Más
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}