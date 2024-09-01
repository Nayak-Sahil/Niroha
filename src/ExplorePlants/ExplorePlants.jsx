import React from "react";
import SearchPlants from "./SearchPlants";
import PlantCard from "./PlantCard";

{
  /* <h1 className='text-xl font-medium text-center text-primary leading-10'>Explore the Healing Power of Plants and Herbs.</h1> */
}
{
  /* <p className='font-medium text-primary-foreground text-center'>Search plants by name and instantly access detailed information on their healing benefits.</p> */
}
export default function ExplorePlants() {
  return (
    <section className="w-screen p-5 px-10 h-[90vh] flex flex-col justify-evenly items-center bg-[url('https://www.3daistudio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBackground.86dd7208.png&w=3840&q=75')]">
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
