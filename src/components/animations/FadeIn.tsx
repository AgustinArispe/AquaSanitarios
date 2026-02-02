"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number; // Opcional: para que aparezcan cosas en escalera
  direction?: "up" | "down" | "left" | "right"; // Opcional: dirección
  className?: string; // Para pasarle clases de Tailwind extra si hace falta
  fullWidth?: boolean;
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  direction = "up", 
  className = "",
  fullWidth = false
}: FadeInProps) {
  
  // Definimos la dirección del movimiento
  const directionOffset = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }} // whileInView activa la animación cuando scrolleas hasta ahí
      viewport={{ once: true, margin: "-50px" }} // once: true para que no se repita al subir y bajar
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      className={`${className} ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </motion.div>
  );
}