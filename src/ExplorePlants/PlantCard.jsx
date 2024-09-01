import React from "react";
// import Aloevera from "../assets/plantsImage/Aloevera.png";
import Aloevera from "../assets/plantsImage/ginger.png";
import { Badge } from "@/components/ui/badge";
import { Bookmark, Bot, Leaf, Sparkle, Sparkles, Star, WandSparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
export default function PlantCard() {
  return (
    <div className="relative w-[250px] h-[350px] flex flex-col justify-end">
      <img
        className="absolute -top-2 translate-x-[50%] right-[50%] z-10"
        src={Aloevera}
        alt="Aloevera"
        width={180}
      />
      <Badge
        variant="secondary"
        className="absolute top-10 glassmorphism text-white hover:text-black rounded-full p-2"
      >
        <WandSparkles className="w-4 h-4" />
        {/* Smart Pick */}
      </Badge>
      <div className="relative w-[250px] h-[270px] flex flex-col items-center glassmorphism rounded-lg border-none p-5 leaf-card">
        <Bookmark className="w-4 h-4 absolute right-4 top-[70px] text-white" />
        <div className="w-full h-[70%] flex flex-col items-center justify-between mt-[70px]">
          <p className="text-white font-medium text-lg">Aloevera</p>
          <div className="w-full flex items-center justify-between">
            <Label className="text-white">Faimily</Label>
            <Badge className="glassmorphism text-white" variant={"outline"}>Terminalia</Badge>
          </div>
          <div className="w-full flex items-center justify-between">
            <Label className="text-white">Genus</Label>
            <Badge className="glassmorphism text-white" variant={"outline"}>Combretaceae</Badge>
          </div>
          <div className="w-full flex items-center justify-between">
            <Label className="text-white">Size</Label>
            <Badge className="glassmorphism text-white" variant={"outline"}>20-25 m</Badge>
          </div>
          <Badge className="cursor-pointer py-2 px-4 relative -bottom-1" variant="outline">
            View More <Leaf className="w-3 h-3 ml-1" />
          </Badge>
        </div>
      </div>
    </div>
  );
}
