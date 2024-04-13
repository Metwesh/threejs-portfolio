import { OrbitControls, useGLTF } from "@react-three/drei";

export default function Earth() {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <>
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <primitive
        object={earth.scene}
        scale={2.5}
        position-y={0}
        rotation-y={0}
      />
    </>
  );
}
