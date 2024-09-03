import React, { useState } from "react";
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
import CommingSoon from "../assets/CommingSoon.png";
import PlantCanvas from "./PlantCanvas";

export default function PlantVisuals({ images, videos, models }) {
  const [visualMode, setVisualMode] = useState({
    mode: "Images",
    file: images,
  });

  const updateVisualMode = (mode) => {
    const updatedVisualMode = { mode: mode };
    switch (mode) {
      case "Images":
        updatedVisualMode.file = images;
        break;
      case "Videos":
        updatedVisualMode.file = videos;
        break;
      case "3D View":
        updatedVisualMode.file = models;
        break;
      default:
        updatedVisualMode.file = images;
    }
    setVisualMode(updatedVisualMode);
  };

  return (
    <section className="relative w-[400px] h-[400px] glassmorphism border-none rounded-lg shadow-lg p-4 flex flex-col justify-between">
      <div className="w-full h-max flex justify-between items-center">
        <div>
          <VisualModeButton
            updateVisualMode={updateVisualMode}
            hoverText="3D View"
            icon={<Box className="h-4 w-4" />}
          />
          <VisualModeButton
            updateVisualMode={updateVisualMode}
            hoverText="Images"
            icon={<Images className="h-4 w-4" />}
          />
          <VisualModeButton
            updateVisualMode={updateVisualMode}
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
      <VisualCarousel visualMode={visualMode} />
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

export const PlantImages = ({ file }) => {
  return <img className="m-auto" src={file} alt="Plants Image" width={200} />;
};

export const PlantVideos = ({ file }) => {
  return (
    <video
      controls
      className="w-[220px] h-[300px] mx-auto rounded-lg shadow-lg object-cover"
    >
      <source src={file} />
    </video>
  );
};

export const VisualCarousel = ({ visualMode }) => {
  return (
    <Carousel className="w-[300px] mb-2 max-w-xs mx-auto ">
      <CarouselContent>
        {visualMode.file ? Array.from(visualMode.file).map((url, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              {visualMode.mode == "Images" ? (
                <PlantImages file={url} />
              ) : visualMode.mode == "Videos" ? (
                <PlantVideos file={visualMode.file} />
              ) : (
                <PlantCanvas file={visualMode.file} />
              )}
            </div>
          </CarouselItem>
        )) : <img className="mx-auto mb-28" src={CommingSoon} width={200} />}
      </CarouselContent>
      <CarouselPrevious className="glassmorphism  ml-8" />
      <CarouselNext className="glassmorphism  mr-8" />
    </Carousel>
  );
};

export const VisualModeButton = ({
  icon,
  isDayNightMode,
  hoverText,
  updateVisualMode,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Badge
            onClick={() => {
              updateVisualMode(hoverText);
            }}
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
