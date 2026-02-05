import Image from "next/image";
import { Droplets, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 items-start">
          
          {/* COLUMNA 1: Logo */}
          <div className="flex flex-col space-y-6">
            
            <div className="w-48"> 
              <Image
                src="/Aqua_With_Logo.png" 
                alt="Aqua Sanitarios"
                width={200}
                height={80}
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Aqua Sanitario nació en 2018, pero nuestra historia en el rubro comenzó hace más de dos décadas. 
            Somos una familia de Tandil que transformó años de oficio y conocimiento técnico en un espacio pensado para asesorarte. 
            No solo vendemos materiales; compartimos la experiencia de haber estado en cada etapa de una obra.
            </p>
          </div>

          {/* COLUMNA 2: Contacto Grande */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-800 pb-2 inline-block">
              Contacto
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4 group cursor-pointer">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <Mail className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-bold uppercase mb-1">Escríbanos</span>
                  <a href="mailto:clientes@aquasanitarios.com.ar" className="text-gray-200 hover:text-white text-base transition-colors">
                    clientes@aquasanitarios.com.ar
                  </a>
                </div>
              </li>
              <li className="flex gap-4 group">
                <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <MapPin className="h-5 w-5 text-gray-300 group-hover:text-white" />
                </div>
                <div>
                  <span className="block text-xs text-gray-500 font-bold uppercase mb-1">Visítenos</span>
                  <p className="text-gray-200 text-base">Av. del Valle 470</p>
                  <p className="text-gray-400 text-sm">Tandil, Buenos Aires</p>
                </div>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: Horarios Destacados */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider border-b border-gray-800 pb-2 inline-block">
              Horarios
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <Clock className="h-6 w-6 text-blue-500" />
                <div>
                  <span className="block text-sm font-bold text-white uppercase">Lunes a Viernes</span>
                  <span className="text-gray-300">08:00 a 18:00 Hs</span>
                </div>
              </li>
              <li className="flex items-center gap-4 bg-gray-900/50 p-4 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                <Clock className="h-6 w-6 text-gray-600" />
                <div>
                  <span className="block text-sm font-bold text-white uppercase">Sábados</span>
                  <span className="text-gray-300">08:30 a 13:30 Hs</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Aqua Sanitarios S.A. - Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Términos y Condiciones</span>
            <span className="hover:text-white cursor-pointer">Política de Privacidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}