import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../CanvasLoader";
import Computer from "../meshes/Computer";

// TODO: Make full page loading & block scroll ?
export default function ComputerCanvas() {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader className="mt-20 pt-[100px]" />}>
        <Computer />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
