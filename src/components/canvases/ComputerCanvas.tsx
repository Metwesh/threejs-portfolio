import {
  Preload
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Suspense,
  useCallback,
  useEffect,
  useState
} from "react";
import CanvasLoader from "../CanvasLoader";
import Computer from "../meshes/Computer";

export default function ComputerCanvas() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 640px").matches
  );

  const resizeHandler = useCallback(() => {
    setIsMobile(window.matchMedia("(max-width: 640px").matches);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [resizeHandler]);

  const [grabbing, setGrabbing] = useState(false);

  return (
    <Canvas
      className={`mt-9 ${!grabbing ? "cursor-grab" : "cursor-grabbing"}`}
      onMouseDown={() => setGrabbing(true)}
      onMouseUp={() => setGrabbing(false)}
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Computer isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
