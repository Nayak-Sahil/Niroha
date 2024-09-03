import { AirVent, LandPlot, MapPin, Ruler, Sun } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";

export default function PlantBasic() {
  return (
    <div className="w-[400px] h-full p-4 flex flex-col justify-between">
      <BasicDetailsCard icon={<Ruler className="h-4 w-4"/>} title="Plant Size" description="Grows up to 1-2 meters (3-6 feet) in height." />
      <BasicDetailsCard icon={<MapPin className="h-4 w-4"/>} title="Native Region" description="Europe, Western Asia, and North Africa, now widely cultivated in temperate regions worldwide." />
      <BasicDetailsCard icon={<AirVent className="h-4 w-4"/>} title="Preferred Climate" description="Temperate climates with moist, well-drained soil." />
      <BasicDetailsCard icon={<Sun className="h-4 w-4"/>} title="Required Sunlight" description="Full sun to partial shade." />
      <BasicDetailsCard icon={<LandPlot className="h-4 w-4"/>} title="Required Soil" description="Well-drained, loamy soil." />
    </div>
  );
}

export const BasicDetailsCard = ({icon, title, description}) => {
  return (
    <div className="w-full h-max p-3 flex items-center glassmorphism rounded-lg shadow-lg">
      <Badge
        className="glassmorphism text-white text-sm p-[10px] hover:text-black hover:bg-white cursor-pointer rounded-full"
        variant="secondary"
      >
        {icon}
      </Badge>
      <div className="h-full flex flex-col font-medium text-white ml-3">
        <p className="text-sm text-primary">{title}</p>
        <p className="text-[14px]">{description}</p>
      </div>
    </div>
  );
};
