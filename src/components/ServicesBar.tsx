import { CreditCard, FileText, Truck, MapPin } from "lucide-react";

const services = [
  { icon: CreditCard, title: "Descuentos Bancarios", desc: "Consultá promociones vigentes" },
  { icon: FileText, title: "Pedí tu Presupuesto", desc: "Sin cargo vía WhatsApp" },
  { icon: MapPin, title: "Encontrá tu Sucursal", desc: "Estacionamiento propio" },
  { icon: Truck, title: "Métodos de Entrega", desc: "Envíos a obra en el día" },
];

export default function ServicesBar() {
  return (
    <section className="py-12 bg-white border-y border-gray-100"> 
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group flex items-center gap-4 p-5 rounded-xl border border-bg-blue-400 bg-white hover:border-aqua-orange/30 hover:shadow-lg transition-all duration-300">
              
              <div className="h-14 w-14 rounded-full bg-blue-400 flex items-center justify-center text-aqua-orange group-hover:bg-aqua-orange group-hover:text-white transition-colors duration-300 shrink-0">
                <s.icon className="h-7 w-7" />
              </div>
              
              <div>
                <h3 className="font-bold text-gray-900 text-base group-hover:text-aqua-orange transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}