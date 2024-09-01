import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { PlantsModel } from "../ModelView/PlantsModel";
import { GardenModel } from "../ModelView/GardenModel";
import { PondModel } from "../ModelView/PondModel";
import { IsLandModel } from "../ModelView/IslandModel";
import AloveraModel from "@/ModelView/AloveraModel";
import { Suspense } from "react";

export default function ModelCanvas() {
  return (
    <Canvas
      camera={{ position: [-5, 5, 0] }}
      style={{
        width: "450px",
        height: "450px",
        position: "absolute",
        top: "-45px",
      }}
    >
      <ambientLight intensity={0.5} />
      /** * ? To limit model movement in y-axis: "maxPolarAngle" used. * ? To
      limit model movement in Zoom: "maxDistance" and "minDistance" used. */
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        autoRotate={true}
        autoRotateSpeed={1}
        maxDistance={6}
        minDistance={5}
      />
      <group scale={4.5}>
        <PondModel />
      </group>
      <Environment preset="sunset" /> //! For sunlight and night mode
    </Canvas>
  );
}
