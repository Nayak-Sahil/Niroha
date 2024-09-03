import React from "react";
import { Badge } from "@/components/ui/badge";
import { Activity, Bean, Citrus, Leaf, ShieldPlus, TreePalm } from "lucide-react";
export default function PlantMedicinal() {
  return (
    <div className="w-[400px] h-full p-4 flex flex-col items-center justify-between">
      <fieldset className="w-full h-max p-3 flex items-center justify-between glassmorphism rounded-lg shadow-lg flex-wrap gap-1 gap-y-2">
        <legend className="text-primary px-3 font-medium text-[14px]">
          Part used in medicinal
        </legend>

        <PlantPart
          icon={<TreePalm className="h-4 w-4 mr-2" />}
          text="Whole Plant"
        />
        <PlantPart icon={<Leaf className="h-4 w-4 mr-2" />} text="Leaves" />
        <PlantPart icon={<Bean className="h-4 w-4 mr-2" />} text="Seeds" />
        <PlantPart icon={<Citrus className="h-4 w-4 mr-2" />} text="Fruits" />
      </fieldset>
      <fieldset className="w-full h-max p-3 flex items-center justify-evenly glassmorphism rounded-lg shadow-lg flex-wrap gap-1 gap-y-2">
        <legend className="text-primary px-3 font-medium text-[14px]">
          Active compounds in plants
        </legend>

        <ActiveCompundBadge text="Apigenin" />
        <ActiveCompundBadge text="Bisabolol" />
        <ActiveCompundBadge text="Chamazulene" />
        <ActiveCompundBadge text="Flavonoids" />
      </fieldset>
      <fieldset className="w-full h-max p-3 flex items-center justify-evenly glassmorphism rounded-lg shadow-lg flex-wrap gap-1 gap-y-2">
        <legend className="text-primary px-3 font-medium text-[14px]">
          Therapeutic properties in plants
        </legend>

        <ActiveCompundBadge text="Relaxant" />
        <ActiveCompundBadge text="Digestive aid" />
        <ActiveCompundBadge text="Anti-inflammatory" />
        <ActiveCompundBadge text="Antispasmodic" />
      </fieldset>
      <fieldset className="w-full h-max p-3 flex items-center justify-evenly glassmorphism rounded-lg shadow-lg flex-wrap gap-1 gap-y-2">
        <legend className="text-primary px-3 font-medium text-[14px]">
          Dosage Form
        </legend>

        <ActiveCompundBadge text="Tea" />
        <ActiveCompundBadge text="Oil" />
        <ActiveCompundBadge text="Capsules" />
        <ActiveCompundBadge text="Tinctures" />

      </fieldset>
    </div>
  );
}

export const PlantPart = ({ icon, text }) => {
  return (
    <Badge
      className="glassmorphism text-white text-[13px] px-4 py-2 hover:text-black hover:bg-white cursor-pointer rounded-full"
      variant="secondary"
    >
      {icon} {text}
    </Badge>
  );
};

export const ActiveCompundBadge = ({ text }) => {
  return (
    <Badge
      className="text-[13px] px-3 glassmorphism text-white hover:text-black hover:bg-white cursor-pointer rounded-full"
      variant="secondary"
    >
      {text}
    </Badge>
  );
};
