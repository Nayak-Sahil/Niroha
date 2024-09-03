import { useGLTF } from '@react-three/drei'

export default function AloveraModel() {
  const {scene} = useGLTF("/public/models/Rohan.glb");
  // const {scene} = useGLTF("/public/PlantsModels/Aloevera.glb");
  return (
    <primitive object={scene} />
  )
}
