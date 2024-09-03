import { Button } from "@/components/ui/button";
import ModelCanvas from "./ModelCanvas";
import HoverTip from "./HoverTip";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Leaf, Sprout } from "lucide-react";
import LeafPot from "../assets/icons/LeafPot.png"
import FlowerPot from "../assets/icons/FlowerPot.png"

export default function LandingModel() {
  return (
    <main className="h-[90vh] flex justify-evenly items-center bg-[url('https://www.3daistudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBackground.86dd7208.png&w=3840&q=75')] bg-top">
      <div className="relative w-[40%] h-max">
        <Badge
          className="absolute -top-16 left-0 text-secondary-foreground"
          variant="secondary"
        >
          🍀 GreenVerse
        </Badge>
        <h1 className="text-7xl font-bold text-primary mb-4">
          <HoverTip text="N" tooltipText="Nourishment" />
          <HoverTip text="i" tooltipText="Immunity" />
          <HoverTip text="r" tooltipText="Restoration" />
          <HoverTip text="o" tooltipText="Oxygenation" />
          <HoverTip text="h" tooltipText="Healing" />
          <HoverTip text="a" tooltipText="Ayurveda" />
          <span className="text-card-foreground  text-white block text-3xl mt-2">
            Discover the Healing Power of Nature!
          </span>
        </h1>
        <p className="text-lg font-medium text-white my-7">
          Explore a Virtual Herbal Garden and <span className="text-primary">Uncover the Secrets</span> of Ancient
          Healing Practices.
        </p>
        <div className="relative w-[70%] flex items-center justify-between my-5">
          <Input
            className="bg-gray-100 capitalize text-base backdrop-filter backdrop-blur-sm bg-opacity-5 py-6 rounded-full text-white px-5 shadow-lg outline-none focus-visible:ring-offset-0 focus-visible:ring-0 border border-[#f9fafb24]"
            placeholder="Find your herbal plant!"
          />
          <Button className="py-6 rounded-full bg-gradient-to-r from-lime-200 to-primary text-black absolute right-0 px-7 z-10 hover:bg-gradient-to-tr hover:from-primary hover:to-lime-200 ease-in-out">
            <Leaf className="w-4 h-4 mr-2" /> Search
          </Button>
        </div>
        <div className="flex mt-10 items-center -ml-2">
          <img src={LeafPot} alt="Leaf Pot" width={50} />
          <img src={FlowerPot} alt="Flower Pot" width={50} />
          <Button
            className="ml-5 rounded-tl-[50px] text-white bg-transparent leaf-shape shadow-lg hover:bg-gradient-to-r from-lime-200 to-primary hover:text-black"
            variant="outline"
          >
            Explore
          </Button>
        </div>
      </div>
      <div className="relative flex justify-center border w-[350px] h-[300px] bg-white glassmorphism rounded-lg">
        <Badge
          variant="secondary"
          className="absolute top-5 right-5 text-black shadow-md"
        >
          3D Model
        </Badge>
        <ModelCanvas />
      </div>
    </main>
  );
}
