import AloveraModel from "@/ModelView/AloveraModel";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

export default function ModelViewer() {
  return (
    <div>
      <Canvas camera={{ position: [-5, 5, 0] }}
      style={{
        width: "450px",
        height: "450px",
      }}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <AloveraModel />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}
