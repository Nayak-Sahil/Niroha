import { useGLTF } from "@react-three/drei";
import { useCallback } from "react";

export default function AloveraModel({ plantId }) {
  let modelMap = new Map();
  modelMap.set("PLT002", "/public/PlantsModels/tulsi.glb");
  modelMap.set("PLT005", "/public/PlantsModels/aloevera.glb");
  modelMap.set("PLT010", "/public/PlantsModels/neem.glb");
  modelMap.set("PLT016", "/public/PlantsModels/garlic.glb");
  modelMap.set("PLT031", "/public/PlantsModels/bacopa.glb");
  modelMap.set("PLT049", "/public/PlantsModels/nagkesar.glb");
  modelMap.set("PLT056", "/public/PlantsModels/kapur.glb");
  // const {scene} = useGLTF("/public/models/Rohan.glb");
  const { scene } = useGLTF(modelMap.get(plantId));
  return <primitive object={scene} />;
}
