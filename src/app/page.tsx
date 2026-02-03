import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import BrandsSection from "@/components/BrandsSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer"; // <--- Importamos el nuevo Footer

export default function Home() {
  return (
    <main className="w-full bg-white">
      
      {/* 1. Portada */}
      <section className="h-screen w-full">
        <Hero />
      </section>
      
      {/* 2. Categorías */}
      <section className="min-h-screen w-full">
        <Categories />
      </section>

      {/* 3. Productos Destacados */}
      <FeaturedProducts />

      {/* 4. Marcas */}
      <BrandsSection />
      
      {/* 5. Footer Negro Oficial */}
      <Footer />
      
    </main>
  );
}