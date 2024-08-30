import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function HoverTip({text, tooltipText}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{text}</TooltipTrigger>
        <TooltipContent className="leaf-shape">
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
