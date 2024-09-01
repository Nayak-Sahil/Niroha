import React from "react";
// import Aloevera from "../assets/plantsImage/Aloevera.png";
import Aloevera from "../assets/plantsImage/ginger.png";
import { Badge } from "@/components/ui/badge";
import { Bookmark, Leaf, Sparkle, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
export default function PlantCard() {
  return (
    <div className="w-[250px] h-[350px] flex flex-col justify-end">
      <div className="relative w-[250px] h-[270px] flex flex-col items-center glassmorphism rounded-tl-[50px] rounded-tr-[0px] border-none p-5">
        <Badge variant="secondary" className="absolute -left-8 top-[5px] -rotate-45 glassmorphism text-white hover:text-black">
            Recommended
        </Badge>
        <Bookmark className="w-4 h-4 absolute right-4 text-white" />
        <img
          className="absolute -top-[35%] z-10"
          src={Aloevera}
          alt="Aloevera"
          width={180}
        />
        <div className="w-full h-[70%] flex flex-col items-center justify-between mt-16">
          <p className="text-white font-medium text-lg">Aloevera</p>
          <div className="w-full flex items-center justify-between">
            <Label className="text-white">Faimily</Label>
            <Badge variant={"secondary"}>Terminalia</Badge>
          </div>
          <div className="w-full flex items-center justify-between">
            <Label className="text-white">Genus</Label>
            <Badge variant={"secondary"}>Combretaceae</Badge>
          </div>
          <div className="w-full flex items-center justify-between">
            <Label className="text-white">Size</Label>
            <Badge variant={"secondary"}>20-25 m</Badge>
          </div>
          <Badge className="cursor-pointer py-2 px-4" variant="outline">
            View More <Leaf className="w-3 h-3 ml-1" />
          </Badge>
        </div>
      </div>
    </div>
  );
}
