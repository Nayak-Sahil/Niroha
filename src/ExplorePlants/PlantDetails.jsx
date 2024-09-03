import React from "react";
import PlantVisuals from "./PlantVisuals";
import PlantBasic from "./PlantBasic";
import AudioDetails from "./AudioDetails";
import PlantMedicinal from "./PlantMedicinal";
import PlantBenefits from "./PlantBenefits";

export default function PlantDetails() {
  return (
    <div className="relative w-screen p-5 px-10 h-[90vh] flex justify-evenly items-center">
      <PlantBasic />
      <section className="h-full flex flex-col justify-evenly">
        <PlantBenefits />
        <AudioDetails />
        <PlantVisuals />
      </section>
      <PlantMedicinal />
      {/* <iframe
        src="https://aichatbot.sendbird.com/playground/index.html?app_id=1638BC62-01FD-4402-A03B-06C5BF67CC95&bot_id=onboarding_bot&region=ca-1"
        className="absolute bottom-15 right-5 w-[400px] h-[500px]"
        frameborder="0"
      ></iframe> */}
    </div>
  );
}
