import React from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import PlantModel from "./PlantModel";
import AloveraModel from "@/ModelView/AloveraModel";

export default function PlantCanvas({file}) {
  return (
    <Canvas
      camera={{ position: [-5, 5, 0] }}
      style={{
        width: "450px",
        height: "450px",
      }}
    >
      <ambientLight intensity={0.5} />
      /** * ? To limit model movement in y-axis: "maxPolarAngle" used. * ? To
      limit model movement in Zoom: "maxDistance" and "minDistance" used. */
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        autoRotate={true}
        autoRotateSpeed={1}
        // maxDistance={6}
        // minDistance={5}
      />
      <group scale={5}>
        <AloveraModel file={file} />
      </group>
      <Environment preset="sunset" /> //! For sunlight and night mode
    </Canvas>
  );
}
