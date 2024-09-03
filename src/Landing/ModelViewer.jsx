import AloveraModel from "@/ModelView/AloveraModel";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

export default function ModelViewer() {
  const onSearch = async (searchedString) => {
    //set searched plants according to searched string
    try {
      const response = await fetch(`https://niroha.vercel.app/plant/tulsi`);
      if (response.status === 200) {
        const data = await response.json();
        setSearchedPlants(data);
      } else throw Error(`Plants not found with name ${searchedPlants}`);
    } catch (err) {
      console.error(err.message);
      setSearchedPlants([]);
    }
  }
  return (
    <div onClick={() => onSearch('tulsi')}>
      {/* <Canvas camera={{ position: [-5, 5, 0] }}
      style={{
        width: "450px",
        height: "450px",
      }}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <AloveraModel />
        <Environment preset="sunset" />
      </Canvas> */}
      hello
    </div>
  );
}
