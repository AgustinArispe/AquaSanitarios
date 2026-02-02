"use client";

import FadeIn from "@/components/animations/FadeIn";
import CategoryCard from "@/components/CategoryCard";

const categories = [
  {
    id: 1,
    title: "Agua y Plomería",
    description: "Caños, tanques y conexiones.",
    href: "/categoria/agua",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2070&auto=format&fit=crop",
    colSpan: "md:col-span-2",
    theme: "blue" // Por defecto
  },
  {
    id: 2,
    title: "Gas",
    description: "Materiales aprobados y seguros.",
    href: "/categoria/gas",
    image: "https://images.unsplash.com/photo-1621905476059-5f69529db3d9?q=80&w=2069&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    theme: "orange" // <--- ¡EL COLOR DEL LOGO!
  },
  {
    id: 3,
    title: "Grifería y Baño",
    description: "Renová tu estilo.",
    href: "/categoria/griferia",
    image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    colSpan: "md:col-span-1",
    theme: "blue"
  },
  {
    id: 4,
    title: "Tanques y Bombas",
    description: "Presión y almacenamiento.",
    href: "/categoria/tanques",
    image: "https://images.unsplash.com/photo-1517646331032-9e8563c523a1?q=80&w=2000&auto=format&fit=crop",
    colSpan: "md:col-span-2",
    theme: "blue"
  },
  {
    id: 5,
    title: "Sanitarios",
    description: "Inodoros, bidets y bachas.",
    href: "/categoria/sanitarios",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070&auto=format&fit=crop",
    colSpan: "md:col-span-3", // Ocupa todo el ancho
    theme: "blue"
  },
];

export default function Categories() {
  return (
    // Agregamos 'h-full flex flex-col justify-center' para centrar verticalmente en el slide
    <section className="min-h-screen bg-white flex items-center py-20">
      <div className="container px-4 md:px-6 mx-auto">
        
        {/* Animación del Título reactivada */}
        <FadeIn className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Todo para tu obra
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Explorá nuestro catálogo completo organizado por rubros.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {categories.map((category, index) => (
            // Envolvemos cada tarjeta en FadeIn con un delay progresivo
            <FadeIn 
              key={category.id} 
              delay={index * 0.1} 
              className={category.colSpan}
              fullWidth
            >
              <CategoryCard
                title={category.title}
                description={category.description}
                image={category.image}
                href={category.href}
                theme={category.theme} // Pasamos el tema
              />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}