import { useGLTF } from '@react-three/drei'

export default function AloveraModel() {
  const {scene} = useGLTF("/PlantsModels/Alovera.glb");
  return (
    <primitive object={scene} />
  )
}
