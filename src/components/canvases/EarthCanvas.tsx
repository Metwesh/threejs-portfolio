import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../CanvasLoader";
import Earth from "../meshes/Earth";

export default function EarthCanvas() {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
