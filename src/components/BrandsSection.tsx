"use client";

const brands = [
  "Schneider", "PEISA", "Mi Pileta", "JOHNSON ACERO", 
  "Grifería Peirano", "FV", "FUSIO GAS", "ferrum", "ATRIM", "TIGRE"
];

export default function BrandsSection() {
  return (
    <section className="py-12 bg-white border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
          Nuestras Marcas Oficiales
        </p>
      </div>

      {/* Contenedor con degradado lateral para efecto desvanecido */}
      <div className="relative w-full overflow-hidden">
        
        {/* Sombras laterales para efecto de 'infinito' */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* La Tira Animada */}
        <div className="flex w-max animate-marquee">
          {/* Bloque 1 */}
          <div className="flex items-center gap-16 px-8">
            {brands.map((brand, index) => (
              <span key={`a-${index}`} className="text-3xl font-black text-gray-300 hover:text-blue-900 transition-colors cursor-pointer whitespace-nowrap uppercase font-sans">
                {brand}
              </span>
            ))}
          </div>
          {/* Bloque 2 (Duplicado exacto para el loop) */}
          <div className="flex items-center gap-16 px-8">
            {brands.map((brand, index) => (
              <span key={`b-${index}`} className="text-3xl font-black text-gray-300 hover:text-blue-900 transition-colors cursor-pointer whitespace-nowrap uppercase font-sans">
                {brand}
              </span>
            ))}
          </div>
          {/* Bloque 3 (Seguridad para pantallas muy anchas) */}
          <div className="flex items-center gap-16 px-8">
            {brands.map((brand, index) => (
              <span key={`c-${index}`} className="text-3xl font-black text-gray-300 hover:text-blue-900 transition-colors cursor-pointer whitespace-nowrap uppercase font-sans">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}