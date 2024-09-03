import React from "react";
import img from "../assets/plantsImage/ginger.png";
import { Button } from "@/components/ui/button";
import {
  Box,
  Images,
  MoonStar,
  Sprout,
  TvMinimalPlay,
  Video,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import AloveraModel from "@/ModelView/AloveraModel";
import ModelViewer from "@/Landing/ModelViewer";
import LandingModel from "@/Landing/LandingModel";
import ModelCanvas from "@/Landing/ModelCanvas";

export default function PlantVisuals() {
  return (
    <section className="relative w-[400px] h-[400px] glassmorphism border-none rounded-lg shadow-lg p-4 flex flex-col justify-between">
      <div className="w-full h-max flex justify-between items-center">
        <div>
          <VisualModeButton
            hoverText="3D View"
            icon={<Box className="h-4 w-4" />}
          />
          <VisualModeButton
            hoverText="Images"
            icon={<Images className="h-4 w-4" />}
          />
          <VisualModeButton
            hoverText="Videos"
            icon={<TvMinimalPlay className="h-4 w-4" />}
          />
        </div>
        <VisualModeButton
          hoverText="Day/Night Mode"
          isDayNightMode={true}
          icon={<MoonStar className="h-4 w-4" />}
        />
      </div>
      <VisualCarousel />
      {/* <img className="m-auto" src={img} alt="Plants Image" width={300} /> */}
      <Badge
        className="absolute -bottom-3 left-[50%] -translate-x-[50%] w-max mx-auto px-2 py-1"
        variant="secondary"
      >
        <Sprout className="h-4 w-4 mr-1" />
        Matricaria chamomilla
      </Badge>
    </section>
  );
}

export const PlantImages = () => {
  return <img className="m-auto" src={img} alt="Plants Image" width={300} />;
};

export const PlantVideos = () => {
  return (
    <video
      controls
      className="w-[220px] h-[300px] mx-auto rounded-lg shadow-lg object-cover"
    >
      <source src="/public/Tulsi2.mp4" />
    </video>
  );
};

export const VisualCarousel = () => {
  return (
    <Carousel className="w-[300px] mb-2 max-w-xs mx-auto ">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              {/* <PlantVideos /> */}
              <PlantImages />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="glassmorphism  ml-8" />
      <CarouselNext className="glassmorphism  mr-8" />
    </Carousel>
  );
};

export const VisualModeButton = ({ icon, isDayNightMode, hoverText }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Badge
            className={`glassmorphism text-white text-sm p-[10px] hover:text-black hover:bg-white cursor-pointer rounded-full ${
              !isDayNightMode ? "mr-3" : ""
            }`}
            variant="secondary"
          >
            {icon}
          </Badge>
        </TooltipTrigger>
        <TooltipContent className="rounded-full font-medium text-[12px] glassmorphism text-white shadow-xl relative -left-2">
          <p>{hoverText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
