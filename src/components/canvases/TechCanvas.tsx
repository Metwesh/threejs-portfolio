import { Html, TrackballControls, useProgress } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";
import {
  Suspense,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import * as THREE from "three";
import { technologies } from "../../constants";
import MobileContext from "../../contexts/MobileContext";
import useDebounce from "../../hooks/useDebounce";
import CanvasLoader from "../CanvasLoader";
import TechBox from "../meshes/TechBox";
import { TechCore } from "./../meshes/TechCore";
import { FOG_ARGUMENTS, LIGHT_ARGUMENTS } from "../shaders/constants";

const SPHERE_RADIUS = 20;

export default function TechCanvas() {
  // Golden Spiral algorithm
  const points = useMemo(() => {
    const temp = [];
    const offset = 2 / technologies.length;
    const increment = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < technologies.length; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - Math.pow(y, 2));
      const phi = ((i + 1) % technologies.length) * increment;
      const x = Math.cos(phi) * r;
      const z = Math.sin(phi) * r;
      temp.push(
        new THREE.Vector3(
          x * SPHERE_RADIUS,
          y * SPHERE_RADIUS,
          z * SPHERE_RADIUS,
        ),
      );
    }
    return temp;
  }, []);

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 35], fov: 90 }}
      frameloop="always"
    >
      <Controls points={points} />
    </Canvas>
  );
}

// Moved so that the InnerControls component can access the camera
function Controls(props: { points: Array<THREE.Vector3> }) {
  const { camera } = useThree();
  const { active } = useProgress();
  const { isMobile } = useContext(MobileContext);

  useEffect(() => {
    if (active && "fov" in camera && typeof camera.fov === "number") {
      camera.fov = isMobile ? 110 : 90;
      camera.updateProjectionMatrix();
    }
  }, [isMobile, active]);

  const [hoveredTech, setHoveredTech] = useState<string>("");
  const techRef = useRef(hoveredTech);

  const debouncedHoveredTech = useDebounce(hoveredTech, 300);

  useEffect(() => {
    techRef.current = debouncedHoveredTech;
  }, [debouncedHoveredTech]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (debouncedHoveredTech) {
      timeout = setTimeout(() => {
        if (techRef.current === debouncedHoveredTech) {
          setHoveredTech("");
        }
      }, 3000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [debouncedHoveredTech]);

  return (
    <group onPointerDown={() => setHoveredTech("")}>
      <directionalLight
        intensity={3.75}
        color={LIGHT_ARGUMENTS.color}
        position={LIGHT_ARGUMENTS.position}
      />
      <fog
        attach="fog"
        color={FOG_ARGUMENTS.color}
        near={FOG_ARGUMENTS.near}
        far={FOG_ARGUMENTS.far}
      />
      <Suspense fallback={<CanvasLoader />}>
        <group rotation={[0, 0, 35]}>
          <TechCore />
          {props.points.map((pos, index) => (
            <TechBox
              key={`technology-${index}`}
              position={pos}
              data={technologies[index]}
              hoveredTech={debouncedHoveredTech}
              setHoveredTech={setHoveredTech}
            />
          ))}
          <Html
            className="pointer-events-none select-none"
            wrapperClass="pointer-events-none select-none"
            center
          >
            <AnimatePresence initial={false} mode="wait">
              {debouncedHoveredTech && (
                <motion.p
                  className={`glassmorphism text-4xl font-bold text-white w-min pointer-events-none select-none ${
                    debouncedHoveredTech
                      ? technologies.filter(
                          (tech) => tech.name === debouncedHoveredTech,
                        )?.[0]?.wip
                        ? "wip"
                        : ""
                      : ""
                  }`}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  key={debouncedHoveredTech}
                >
                  {debouncedHoveredTech}
                </motion.p>
              )}
            </AnimatePresence>
          </Html>
        </group>
      </Suspense>
      <TrackballControls noZoom noPan makeDefault />
    </group>
  );
}
