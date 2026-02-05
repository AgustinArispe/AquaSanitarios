import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import BrandsSection from "@/components/BrandsSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer"; 
import HistoryBanner from "@/components/HistoryBanner"; 
import TipsSection from "@/components/TipsSection";
import LocationBanner from "@/components/LocationBanner";
import ServicesBar from "@/components/ServicesBar";
import FloatingWhatsApp from "@/components/FlootingWhatsApp";

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

      {/* 4. Blog y Tips */}
      <TipsSection />

      {/* 5. Ubicacion */}
      <LocationBanner />

      {/* 6. Servicios */}
      <ServicesBar />
      
      <FloatingWhatsApp/>
      {/* 7. Historia */}
      <HistoryBanner />

      {/* 8. Marcas */}
      <BrandsSection />
      
      {/* 9. Footer Negro Oficial */}
      <Footer />
      
    </main>
  );
}