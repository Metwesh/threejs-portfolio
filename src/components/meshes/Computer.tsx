import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

export default function Computer(props: { isMobile: boolean }) {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const meshRef = useRef<Mesh>();

  // TODO: Handle the instant loading of the model

  return (
    <>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <mesh>
        <hemisphereLight intensity={1} groundColor="black" />
        <pointLight intensity={1} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <primitive
          ref={meshRef}
          object={computer.scene}
          scale={props.isMobile ? 0.65 : 0.75}
          position={props.isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </>
  );
}
