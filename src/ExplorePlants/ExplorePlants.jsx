import React from "react";
import SearchPlants from "./SearchPlants";
import PlantCard from "./PlantCard";

{
  /* Search plants by name and instantly access detailed information on their healing benefits. */
}
export default function ExplorePlants() {
// bg-top filter invert

  return (
    <section className="w-screen p-5 px-10 h-[90vh] flex flex-col justify-evenly items-center">
      <SearchPlants />
      <div className="w-full h-[85%] gap-y-14 overflow-y-scroll grid grid-cols-4 justify-items-center">
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
        <PlantCard />
      </div>
    </section>
  );
}
