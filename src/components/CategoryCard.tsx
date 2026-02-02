import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
  className?: string;
  theme?: string; // Nueva propiedad
}

export default function CategoryCard({ 
  title, 
  description, 
  href, 
  image, 
  className = "",
  theme = "blue" // Azul por defecto
}: CategoryCardProps) {
  
  // Definimos colores dinámicos basados en el tema
  const accentColor = theme === "orange" ? "text-orange-500" : "text-blue-400";
  // Usamos group-hover para cambiar bordes o brillos si quisieramos
  
  return (
    <div className={`relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer h-[300px] block ${className}`}>
      <Link href={href} className="block w-full h-full">
        
        {/* Imagen de Fondo */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* El overlay cambia sutilmente según el tema */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300 ${theme === 'orange' ? 'group-hover:from-orange-950/90' : 'group-hover:from-blue-950/90'}`} />
        </div>

        {/* Contenido Texto */}
        <div className="absolute bottom-0 left-0 p-6 w-full text-white">
          <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
            {title}
          </h3>
          <p className="text-gray-200 text-sm">{description}</p>
          
          <div className={`flex items-center text-sm font-bold gap-1 mt-2 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 ${accentColor}`}>
            Ver productos <ArrowRight className="h-4 w-4" />
          </div>
        </div>

      </Link>
    </div>
  );
}