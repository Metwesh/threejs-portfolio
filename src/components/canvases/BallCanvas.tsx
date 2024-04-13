import {
  Preload
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Ball from "../meshes/Ball";
import SimpleLoader from "../SimpleLoader";

export default function BallCanvas(props: { imgUrl: string; index: number }) {
  const [grabbing, setGrabbing] = useState(false);

  return (
    <Canvas
      className={!grabbing ? "cursor-grab" : "cursor-grabbing"}
      onMouseDown={() => setGrabbing(true)}
      onMouseUp={() => setGrabbing(false)}
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<SimpleLoader />}>
        <Ball {...props} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
