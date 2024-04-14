import { TrackballControls, useProgress } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useContext, useEffect, useMemo } from "react";
import * as THREE from "three";
import { technologies } from "../../constants";
import MobileContext from "../../contexts/MobileContext";
import CanvasLoader from "../CanvasLoader";
import TechBox from "../meshes/TechBox";

export default function TechCanvas() {
  // Golden Spiral algorithm
  const points = useMemo(() => {
    const temp = [];
    const radius = 20; // Define the radius of the sphere
    const offset = 2 / technologies.length;
    const increment = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < technologies.length; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - Math.pow(y, 2));
      const phi = ((i + 1) % technologies.length) * increment;
      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;
      temp.push(new THREE.Vector3(x * radius, y * radius, z * radius));
    }
    return temp;
  }, []);

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <InnerControls points={points} />
    </Canvas>
  );
}

// Moved so that the InnerControls component can access the camera
function InnerControls(props: { points: Array<THREE.Vector3> }) {
  const { camera } = useThree();
  const { active } = useProgress();
  const { isMobile } = useContext(MobileContext);

  useEffect(() => {
    if (active && "fov" in camera && typeof camera.fov === "number") {
      camera.fov = isMobile ? 110 : 90;
      camera.updateProjectionMatrix();
    }
  }, [isMobile, active]);

  return (
    <>
      <fog attach="fog" args={["#202025", 0, 80]} />
      <ambientLight color="#ffffff" intensity={0.5} />
      <directionalLight
        color={0xffffffff}
        intensity={3.75}
        position={[0, 0, 35]}
      />
      <Suspense fallback={<CanvasLoader />}>
        <group rotation={[0, 0, 35]}>
          {props.points.map((pos, index) => (
            <TechBox
              key={`technology-${index}`}
              position={pos}
              data={technologies[index]}
            />
          ))}
        </group>
      </Suspense>
      <TrackballControls noZoom noPan attach="camera" />
    </>
  );
}
