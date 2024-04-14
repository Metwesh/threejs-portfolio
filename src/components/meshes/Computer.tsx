import { OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";
import { Mesh } from "three";
import MobileContext from "../../contexts/MobileContext";

export default function Computer() {
  const { camera } = useThree();
  const { active } = useProgress();
  const { isMobile } = useContext(MobileContext);

  const computer = useGLTF("./desktop_pc/scene.gltf");

  const meshRef = useRef<Mesh>();

  useEffect(() => {
    if (active && "fov" in camera && typeof camera.fov === "number") {
      camera.fov = isMobile ? 30 : 25;
      camera.updateProjectionMatrix();
    }
  }, [isMobile, active]);

  return (
    <>
      <OrbitControls
        enableDamping
        enablePan={false}
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
          scale={isMobile ? 0.65 : 0.75}
          position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </>
  );
}
