import Hero from "@/components/Hero";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <main className="w-full bg-white">
      
      {/* SECCIÓN 1: Hero */}
      {/* Mantenemos h-screen aquí porque la portada SIEMPRE queda linda ocupando todo */}
      <section className="h-screen w-full">
        <Hero />
      </section>
      
      {/* SECCIÓN 2: Categorías */}
      {/* Quitamos snap-start. Usamos min-h-screen para que se estire si hace falta */}
      <section className="min-h-screen w-full">
        <Categories />
      </section>
      
      {/* Footer */}
      <section className="py-10 text-center border-t bg-gray-50">
        <p className="text-gray-500">Aqua Sanitarios © 2026 - Tandil</p>
      </section>
      
    </main>
  );
}