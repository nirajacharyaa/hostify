const amenities = [
  { icon: "Waves", label: "Lakeside" },
  { icon: "Utensils", label: "Kitchen" },
  { icon: "ShieldCheck", label: "Security cameras on property" },
  { icon: "Wifi", label: "Wifi" },
  { icon: "Car", label: "Free parking" },
  { icon: "Flower2", label: "Outdoor shower" },
  { icon: "Droplets", label: "Hot water" },
  { icon: "Bath", label: "Shampoo" },
  { icon: "FireExtinguisher", label: "Fire Extinguisher" },
  { icon: "Snowflake", label: "Freezer" },
  { icon: "Coffee", label: "Coffee Maker" },
  { icon: "Flame", label: "Glass stove" },
];

import * as LucideIcons from "lucide-react";
import { Button } from "../ui/button";

const DynamicIcon = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  const IconComponent = (LucideIcons as any)[name];
  return IconComponent ? (
    <IconComponent className={className} />
  ) : (
    <LucideIcons.HelpCircle className={className} />
  );
};

const Amenities = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
        {amenities.map((item, index) => (
          <div key={index} className="flex items-center gap-3 text-gray-700">
            <DynamicIcon name={item.icon} className="w-5 h-5" />
            <span className="text-sm md:text-base font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        className="mt-8 px-6 py-3 border border-gray-900! rounded-lg font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
      >
        Show all amenities
      </Button>
    </div>
  );
};

export default Amenities;
