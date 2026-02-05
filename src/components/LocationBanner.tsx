"use client";

import Link from "next/link";
import Image from "next/image"; 
import { MapPin, ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function LocationBanner() {
  return (
    <section className="w-full py-10">
      <Link 
        href="https://www.google.com/maps?sca_esv=b91b52423da4ab6e&rlz=1C1VDKB_esAR1164AR1164&biw=1536&bih=729&aic=0&output=search&q=aqua+sanitarios+tandil&source=lnms&fbs=ADc_l-bpk8W4E-qsVlOvbGJcDwpn4CbM0gHaMP9RLFWGd8kHNhTJmj_r203Jn6uBSzsvMQD4XRYEV9tq-gES8TCixlwG-rO013Rbz0r9vaqH6sTdPs0HOD89LsG0dNFa4TTJnzHjG2HUe7g-bCNWhxOYmLZRw7ajze6eNNI-G4LdRBijnvGjvOd-LrcnKl2Kn2auP14KD8IGfTu-1NJrYK2j-rl-bicEjqlWrv-jTIKhhOaZ41_CoDA&entry=mc&ved=1t:200715&ictx=111" // Poner link real de Google Maps a Av del Valle 470
        target="_blank"
        className="block group relative w-full h-[400px] md:h-[500px] overflow-hidden cursor-pointer"
      >
        
        {/* 1. IMAGEN DE FONDO (Con efecto zoom suave al pasar el mouse) */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ 
            backgroundImage: "url('/local.jpg')",
          }}
        />

        {/* 2. CAPA OSCURA (Para que el texto resalte) */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

        {/* 3. TEXTO "FLOTANTE" 3D */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <FadeIn>

            {/* Texto con sombra dura para efecto 3D/Levantado */}
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-wider transition-transform duration-300 group-hover:-translate-y-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              ¿Dónde Encontrarnos?
            </h2>
            
            <p className="mt-4 text-xl text-white font-medium drop-shadow-md flex items-center gap-2 justify-center opacity-90 group-hover:opacity-100">
              Av. del Valle 470, Tandil <ArrowRight className="h-5 w-5" />
            </p>

            {/* Botón visual extra (aunque toda la foto es botón) */}
            <span className="mt-8 inline-block bg-aqua-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-orange-900/20 transition-all transform group-hover:translate-y-1">              Ver en Mapa
            </span>

          </FadeIn>
        </div>

      </Link>
    </section>
  );
}