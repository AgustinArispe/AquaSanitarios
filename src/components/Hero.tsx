"use client";

import Link from "next/link";
import { ArrowRight, Flame, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white">
      
      {/* Fondo técnico decorativo (Cuadrícula) */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      
      {/* Mancha de color decorativa (Blur) en la esquina */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container relative px-6 md:px-10 mx-auto flex flex-col-reverse lg:flex-row items-center py-12 lg:py-24 gap-12">
        
        {/* COLUMNA IZQUIERDA: Texto y Botones */}
        <div className="flex-1 space-y-8 text-center lg:text-left z-10">
          
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-aqua-blue text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Envíos a todo Tandil en el día
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
              Transformamos tu <br />
              <span className="relative inline-block text-aqua-blue">
                proyecto en realidad.
                {/* Subrayado naranja estilo marcador */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-aqua-orange" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.8" />
                </svg>
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              De Tandil, para tu casa. Todo en sanitarios, gas y grifería con el asesoramiento técnico que tu obra merece. Desde 2018, acompañando cada paso de tu construcción con soluciones que duran.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            {/* Contenedor de botones */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              
              {/* BOTÓN 1: CATÁLOGO */}
              <Button 
                size="lg" 
                asChild
                className="bg-blue-800 hover:bg-aqua-blue text-white font-bold text-lg px-8 py-7 rounded-full shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-1"
              >
                <Link href="/categoria/agua">
                  Ver Catálogo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              {/* BOTÓN 2: OFERTAS */}
              <Button 
                size="lg" 
                asChild
                className="bg-orange-600 hover:bg-aqua-orange text-white font-bold text-lg px-8 py-7 rounded-full shadow-lg shadow-orange-900/20 transition-all hover:-translate-y-1"
              >
                <Link href="/ofertas">
                  <Flame className="mr-2 h-5 w-5 text-white" /> 
                  Ofertas Destacadas
                </Link>
              </Button>

            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-medium text-gray-500 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5" /> Stock Permanente
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5" /> Atención Personalizada
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500 h-5 w-5" /> Garantía de Calidad
              </div>
            </div>
          </FadeIn>
        </div>

        {/* COLUMNA DERECHA: Imagen Flotante */}
        <div className="flex-1 relative z-10 w-full max-w-[600px] lg:max-w-none">
          <FadeIn delay={0.5} className="relative">
            
            {/* Círculo decorativo detrás */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-transparent rounded-full opacity-70 blur-2xl" />
            
            {/* IMAGEN PRINCIPAL FLOTANTE */}
            {/* Usamos una imagen con fondo limpio o transparente si es posible. 
                Si no tienes PNG, una buena foto rectangular con bordes redondeados también sirve. */}
            <div className="relative animate-float rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/Bathroom-3.jpg" 
                alt="Baño Moderno Aqua Sanitarios"
                className="w-full h-auto object-cover"
              />
              
              {/* Tarjeta Flotante Decorativa (Precio/Oferta) */}
              <div className="absolute 
                  bottom-2 right-2 md:bottom-6 md:right-6  {/* Pegadito al borde en cel, más lejos en PC */}
                  bg-white/95 backdrop-blur 
                  p-2 md:p-4                             {/* Menos relleno en celular */}
                  rounded-xl md:rounded-2xl 
                  shadow-xl border border-gray-100 
                  flex items-center 
                  gap-2 md:gap-4                         {/* Elementos más juntos en celular */}
                  animate-bounce duration-[3000ms]       {/* Le bajé la velocidad para que sea más elegante */}
                  max-w-[70%] md:max-w-none              {/* Que nunca ocupe más del 70% de la foto en cel */}
              ">
                <div className="bg-green-100 p-1.5 md:p-2 rounded-full">
                    {/* Icono más chico en celular (h-4) y normal en PC (md:h-6) */}
                    <CheckCircle2 className="h-4 w-4 md:h-6 md:w-6 text-green-600" />
                </div>
                <div>
                    {/* Texto minúsculo en celular, normal en PC */}
                    <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase leading-tight">
                      Calidad Garantizada
                    </p>
                    <p className="text-xs md:text-sm font-bold text-gray-900 leading-tight">
                      Primeras Marcas
                    </p>
                </div>
              </div>

            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}