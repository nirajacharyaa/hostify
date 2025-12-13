import Image from "next/image";
import { Plus, Minus, MapPin } from "lucide-react";
import { Button } from "../ui/button";

const MapSection = ({ locationName }: { locationName: string }) => {
  return (
    <div className="py-8">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Where you’ll be</h2>
          <div className="flex items-center text-gray-600 mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{locationName}</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <Image alt="sun cloud" height={54} width={64} src="/cloud.png" />
          <div>
            <p className="font-bold text-gray-900">20°C</p>
            <p className="text-xs text-gray-500">Broken clouds</p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-75 rounded-xl overflow-hidden bg-gray-100 shadow-inner border border-gray-200 group">
        <Image
          src="/map.png"
          alt="Map Location"
          fill
          className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity grayscale-20"
        />

        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <Button
            size="icon"
            className="bg-white p-2 rounded shadow hover:bg-gray-50"
          >
            <Plus className="w-5 h-5 text-gray-700" />
          </Button>
          <Button
            size="icon"
            className="bg-white p-2 rounded shadow hover:bg-gray-50"
          >
            <Minus className="w-5 h-5 text-gray-700" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
