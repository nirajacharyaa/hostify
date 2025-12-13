import * as LucideIcons from "lucide-react";

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

const FeaturesList = () => {
  const features = [
    {
      title: "Dedicated workspace",
      description: "A private room equipped with WiFi",
      icon: "Layout",
    },
    {
      title: "Self check-in",
      description: "Check in with just your phone",
      icon: "KeyRound",
    },
    {
      title: "Free cancellation",
      description: "Cancel anytime",
      icon: "CalendarX",
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      {features.map((feature, index) => (
        <div key={index} className="flex gap-4 items-start">
          <div className="shrink-0 p-3 bg-orange-50 text-orange-500 rounded-lg">
            <DynamicIcon name={feature.icon} className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-base">
              {feature.title}
            </h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;
