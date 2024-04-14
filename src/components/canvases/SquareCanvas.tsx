import { Loader, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Square from "../meshes/Square";
import SimpleLoader from "../SimpleLoader";

export default function SquareCanvas(props: {
  imgUrl: string;
  workInProgress: boolean | undefined;
}) {
  const [grabbing, setGrabbing] = useState(false);

  return (
    <Canvas
      className={!grabbing ? "cursor-grab" : "cursor-grabbing"}
      onMouseDown={() => setGrabbing(true)}
      onMouseUp={() => setGrabbing(false)}
      frameloop="demand"
      camera={{ position: [0, 1, 10], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<SimpleLoader />}>
        <Square {...props} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
