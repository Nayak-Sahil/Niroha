import { Button } from "@/components/ui/button";
import ModelCanvas from "./ModelCanvas";
import HoverTip from "./HoverTip";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label";

export default function Main() {
  return (
    <main className="h-[90vh] flex justify-evenly items-center bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="relative w-[40%] h-max">
        <Badge className="absolute -top-16 left-0 text-secondary-foreground" variant="secondary">🍀 GreenVerse</Badge>
        <h1 className="text-6xl font-bold text-primary mb-4">
          <HoverTip text="N" tooltipText="Nourishment" />
          <HoverTip text="i" tooltipText="Immunity" />
          <HoverTip text="r" tooltipText="Restoration" />
          <HoverTip text="o" tooltipText="Oxygenation" />
          <HoverTip text="h" tooltipText="Healing" />
          <HoverTip text="a" tooltipText="Ayurveda" />
          <span className="text-card-foreground  text-white block text-3xl mt-2">
            The Virtual Herbal Garden
          </span>
        </h1>
        <p className="text-lg font-medium text-white my-7">
            Step into a virtual garden where technology and nature come together.
        </p>
        <Button className="rounded-tl-[50px] leaf-shape shadow-md" variant="secondary">
            Explore
        </Button>
      </div>
      <div className="relative flex justify-center border border-[#f9fafb24] w-[550px] h-[500px] bg-white rounded-lg backdrop-filter backdrop-blur-sm shadow-lg bg-opacity-5">
        <p className="text-base absolute bottom-0 w-[70%] text-center font-medium text-white my-7">
            Explore, Learn, and Connect with Nature’s Remedies.
        </p>
        <Badge variant="secondary" className="absolute top-8 right-8 text-black shadow-md">3D Model</Badge>
        <ModelCanvas />
      </div>
    </main>
  );
}


