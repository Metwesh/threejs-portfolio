import { Decal, Float, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { WIP } from "../../assets";

export default function TechBox(props: {
  data: {
    icon: string;
    name: string;
    wip?: boolean;
  };
  position: THREE.Vector3;
}) {
  // TODO: Make textures uniform
  const [decal] = useTexture([props.data.icon]);
  const [wipDecal] = useTexture([WIP]);

  const decalsArray = useMemo(
    () => [
      {
        position: new THREE.Vector3(0, 0, 0.5),
        rotation: new THREE.Euler(0, 0, 0),
      }, // Front
      {
        position: new THREE.Vector3(0, 0, -0.5),
        rotation: new THREE.Euler(0, Math.PI, 0),
      }, // Back
      {
        position: new THREE.Vector3(-0.5, 0, 0),
        rotation: new THREE.Euler(0, -Math.PI / 2, 0),
      }, // Left
      {
        position: new THREE.Vector3(0.5, 0, 0),
        rotation: new THREE.Euler(0, Math.PI / 2, 0),
      }, // Right
      {
        position: new THREE.Vector3(0, 0.5, 0),
        rotation: new THREE.Euler(-Math.PI / 2, 0, 0),
      }, // Top
      {
        position: new THREE.Vector3(0, -0.5, 0),
        rotation: new THREE.Euler(Math.PI / 2, 0, 0),
      }, // Bottom
    ],
    [],
  );

  const meshRotation = useMemo(
    () => new THREE.Euler(Math.random(), Math.random(), Math.random()),
    [],
  );

  const meshRef = useRef<THREE.Mesh>(null);

  const { camera } = useThree();

  const prevCameraPosition = useRef<THREE.Vector3>(new THREE.Vector3());
  const rotationSpeed = useRef<number>(0);

  useFrame(() => {
    if (meshRef.current && camera) {
      const deltaPosition = camera.position
        .clone()
        .sub(prevCameraPosition.current);
      rotationSpeed.current =
        deltaPosition.length() * 0.05 /* Rotation scale factor */;

      meshRef.current.rotation.x += rotationSpeed.current;
      meshRef.current.rotation.y += rotationSpeed.current;

      prevCameraPosition.current = camera.position.clone();
    }
  });

  return (
    <>
      <Float
        speed={1.75}
        rotationIntensity={1}
        floatIntensity={1}
        position={[0, 0, 0.05]}
        floatingRange={[0.25, 0.25]}
      >
        <mesh
          ref={meshRef}
          castShadow
          receiveShadow
          scale={3}
          position={props.position}
          rotation={meshRotation}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            attach="material"
            color="#aaa6c3"
            metalness={0.4}
            roughness={0.75}
            transparent={true}
            opacity={1}
            depthTest={false}
            depthWrite={false}
          />
          {decalsArray.map((decalSide, index) => (
            <React.Fragment key={`box-decal-${index}`}>
              <Decal
                position={decalSide.position}
                rotation={decalSide.rotation}
                scale={0.95}
                depthTest={false}
                map={decal}
              />
              {props.data?.wip && (
                <Decal
                  position={decalSide.position}
                  rotation={decalSide.rotation}
                  scale={0.9}
                  depthTest={false}
                  map={wipDecal}
                />
              )}
            </React.Fragment>
          ))}
        </mesh>
      </Float>
    </>
  );
}
