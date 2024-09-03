import React from "react";
import PlantVisuals from "./PlantVisuals";
import PlantBasic from "./PlantBasic";
import AudioDetails from "./AudioDetails";
import PlantMedicinal from "./PlantMedicinal";
import PlantBenefits from "./PlantBenefits";

export default function PlantDetails() {
  return (
    <div className="w-screen p-5 px-10 h-[90vh] flex justify-evenly items-center">
      <PlantBasic />
      <section className="h-full flex flex-col justify-evenly">
        <PlantBenefits />
        <AudioDetails />
        <PlantVisuals />
      </section>
      <PlantMedicinal />
    </div>
  );
}
