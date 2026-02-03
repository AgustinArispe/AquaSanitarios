import { Phone, MapPin, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-blue-900 text-white text-xs py-2 hidden md:block">
      <div className="w-full px-4 md:px-8 flex justify-between items-center">
        
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3 text-blue-300" />
            <span>Av. Espora 1234, Tandil</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-3 w-3 text-blue-300" />
            <span>(249) 442-0000</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3 w-3 text-blue-300" />
            <span>Lun a Vie: 8:00 - 17:00</span>
          </div>
        </div>

        <div className="font-bold text-blue-200 uppercase tracking-wider">
          Envíos gratis en Tandil a partir de $50.000
        </div>

      </div>
    </div>
  );
}