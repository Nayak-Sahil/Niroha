import { Button } from "@/components/ui/button";
import {
  Activity,
  ShieldPlus,
  CircleX,
  Salad,
  Amphora,
  Milk,
  Pill,
  Cross,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function PlantBenefits() {
  return (
    <div className="w-[400px] h-max flex justify-between items-center">
      <BenefitDialog
        title={
          <h1 className="flex items-center">
            <ShieldPlus className="h-5 w-5 mr-2" /> AYUSH Application
          </h1>
        }
        button={
          <BenefitButton
            icon={<ShieldPlus className="h-4 w-4 mr-2" />}
            text="AYUSH Application"
          />
        }
        content={
          <>
            <AyushCard
              icon={<Salad className="h-4 w-4 mr-2" />}
              title="Ayurveda"
              content="Used for calming the mind, improving digestion, and reducing inflammation."
            />
            <AyushCard
              icon={<Milk className="h-4 w-4 mr-2" />}
              title="Unani"
              content="Used to treat digestive disorders, anxiety, and skin conditions."
            />
            <AyushCard
              icon={<Pill className="h-4 w-4 mr-2" />}
              title="Siddha"
              content="Used for promoting relaxation, digestive health, and treating inflammation."
            />
          </>
        }
      />
      <BenefitDialog
        title={
          <h1 className="flex items-center">
            <Activity className="h-4 w-4 mr-2" /> Health Benefits
          </h1>
        }
        button={
          <BenefitButton
            icon={<Activity className="h-4 w-4 mr-2" />}
            text="Health Benefits"
          />
        }
        content={
          <>
            <AyushCard
              icon={<Cross className="h-4 w-4" />}
              title=""
              content="Promotes relaxation and reduces anxiety."
            />
            <AyushCard
              icon={<Cross className="h-4 w-4" />}
              title=""
              content="Supports digestive health and relieves indigestion."
            />
            <AyushCard
              icon={<Cross className="h-4 w-4" />}
              title=""
              content="Acts as an anti-inflammatory and antispasmodic agent."
            />
          </>
        }
      />
    </div>
  );
}

export const BenefitDialog = ({ button, title, content }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{button}</AlertDialogTrigger>
      <AlertDialogContent className="glassmorphism">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className="w-full h-max py-3 font-medium text-sm text-white flex flex-col gap-y-3">
            {content}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-black">Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const AyushCard = ({ icon, title, content }) => {
  return (
    <div className="w-full h-max mt-5 border border-[#f9fafb24] relative rounded-lg p-5">
      <Badge
        className="text-black text-xs px-3 rounded-full absolute -top-3 left-5"
        variant="secondary"
      >
        {icon}{title}
      </Badge>
      <p>{content}</p>
    </div>
  );
};

// export const HealthBenefitsListCard = ()=>{
//     return(
//         <ul>
//             <li></li>
//         </ul>
//     )
// }

export const BenefitButton = ({ icon, text }) => {
  return (
    <Button className="text-[13px] rounded-full" variant="secondary">
      {icon} {text}
    </Button>
  );
};
