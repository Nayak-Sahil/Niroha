import { Button } from "@/components/ui/button";
import { AudioLines, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";

export default function AudioDetails() {
  return (
    <div className="w-[400px] h-12 glassmorphism border-none rounded-lg flex justify-center items-center">
      <h1 className="text-white flex items-center mr-3 font-medium text-sm">
        <AudioLines className="h-5 w-5 mr-2" /> Plant Knowledge on Play
      </h1>
      <Badge
        className="glassmorphism text-white text-sm p-[9px] hover:text-black hover:bg-white cursor-pointer rounded-full"
        variant="secondary"
      >
        <Play className="h-4 w-4" />
      </Badge>
    </div>
  );
}
