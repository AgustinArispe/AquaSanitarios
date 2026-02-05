# 💧 Aqua Sanitarios - Catálogo Digital & E-commerce

Plataforma web moderna desarrollada a medida para **Aqua Sanitarios** (Tandil), enfocada en la exhibición de productos de agua y gas, gestión de pedidos y conversión directa vía WhatsApp.

## Tecnologías Utilizadas (Tech Stack)

Este proyecto fue construido utilizando la última tecnología en desarrollo web (Stack Moderno 2026), garantizando velocidad, escalabilidad y seguridad.

### Core & Framework
* **Next.js 14/15 (App Router):** Framework de React para producción. Permite renderizado del lado del servidor (SSR) para carga instantánea y SEO óptimo.
* **React:** Librería de interfaz de usuario líder en la industria.
* **TypeScript:** Superset de JavaScript que añade tipado estático, reduciendo errores y mejorando la robustez del código.

### Diseño & UI
* **Tailwind CSS:** Framework de estilos "utility-first" para un diseño totalmente personalizado y responsivo (móvil/escritorio).
* **Shadcn/ui:** Colección de componentes de alta calidad (basados en Radix UI) para botones, diálogos y menús accesibles.
* **Lucide React:** Iconografía moderna y ligera.
* **Tailwind Animate:** Animaciones fluidas (marquesinas, flotación, transiciones).

### Gestión de Estado & Lógica
* **Zustand:** Gestor de estado global para el **Carrito de Compras**.
* **Local Storage Persistence:** El carrito no se borra al recargar la página (Persistencia de datos del lado del cliente).

### Funcionalidades Clave
1.  **Catálogo Dinámico:** Filtrado por categorías (Agua, Gas, Sanitarios).
2.  **Buscador Inteligente:** Búsqueda en tiempo real de productos.
3.  **Carrito Interactivo:** Panel lateral (Drawer) con gestión de cantidades y cálculo de totales.
4.  **Checkout vía WhatsApp:** Generación automática de mensajes pre-formateados con el detalle del pedido listo para enviar al vendedor.
5.  **Diseño Responsive:** Optimizado para celulares, tablets y monitores grandes.

---

## Instalación y Despliegue

### Requisitos
* Node.js 18+
* NPM o Yarn

### Comandos
```bash
# Instalar dependencias
npm install

# Correr en modo desarrollo
npm run dev

# Compilar para producción (Servidor Local)
npm run build
npm start