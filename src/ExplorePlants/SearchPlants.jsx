import { Input } from "@/components/ui/input";
import { Bird, Leaf, Rabbit, Turtle } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

export default function SearchPlants() {
  return (
    <fieldset className="w-[95%] h-[20%] flex justify-center items-center p-4 glassmorphism mb-5 border-none">
      <legend className="-ml-1 px-3 text-base tracking-wider font-medium text-white">
        Explore the Healing Power of Plants and Herbs
      </legend>
      <div className="w-full h-[20%] flex items-center justify-between">
        <div className="w-max flex items-center">
          <Input
            className="w-[400px] mr-5 glassmorphism capitalize text-base py-2 rounded-full text-white px-3 shadow-lg outline-none focus-visible:ring-offset-0 focus-visible:ring-0 border-none"
            placeholder="Search your herbal plant by name!"
          />
          <Button variant="secondary" className="btn-gradient text-black">
            <Leaf className="w-4 h-4 mr-2" /> Search
          </Button>
        </div>
      </div>
    </fieldset>
  );
}
