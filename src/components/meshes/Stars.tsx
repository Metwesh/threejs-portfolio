import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { random } from "maath";
import { useRef } from "react";
import {
  BufferGeometry,
  Material,
  NormalBufferAttributes,
  Object3DEventMap,
  Points as PointsType,
} from "three";

export default function Stars() {
  const pointsRef = useRef<
    PointsType<
      BufferGeometry<NormalBufferAttributes>,
      Material | Array<Material>,
      Object3DEventMap
    >
  >(null!);

  function generateRandomPoints<T extends Float32Array | Float64Array>(
    args: T
  ): T {
    return random.inSphere(args, { radius: 1.2 }) as T;
  }

  // Needs to be a number divisible by 3
  const sphere = generateRandomPoints(new Float32Array(5001));

  useFrame((_, delta) => {
    pointsRef.current.rotation.x -= delta / 10;
    pointsRef.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={pointsRef}
        positions={sphere}
        stride={3}
        frustumCulled
        range={1.2}
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
