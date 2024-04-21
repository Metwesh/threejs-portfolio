import { Float } from "@react-three/drei";
import { ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef, useState } from "react";
import * as THREE from "three";
import BoxShader from "../shaders/BoxShader";

export default function TechBox(props: {
  data: {
    icon: string;
    name: string;
    wip?: boolean;
  };
  hoveredTech: string;
  setHoveredTech: React.Dispatch<React.SetStateAction<string>>;
  position: THREE.Vector3;
}) {
  // State for hovering because props.hoveredTech is debounced & this animation should start right away
  const [techIsHovered, setTechIsHovered] = useState(false);

  const meshRotation = useMemo(
    () => new THREE.Euler(Math.random(), Math.random(), Math.random()),
    [],
  );

  const meshRef = useRef<THREE.Mesh>(null);

  const { camera } = useThree();

  const prevCameraPosition = useRef(new THREE.Vector3());
  const rotationSpeed = useRef(0);

  useFrame(() => {
    if (!meshRef.current || !camera) return;

    // Randomly moves boxes around as you rotate
    const deltaPosition = camera.position
      .clone()
      .sub(prevCameraPosition.current);
    rotationSpeed.current = deltaPosition.length() * 0.1; // Rotation scale factor

    meshRef.current.rotation.x += rotationSpeed.current;
    meshRef.current.rotation.y += rotationSpeed.current;

    prevCameraPosition.current = camera.position.clone();

    // Scales boxes up when hovered
    meshRef.current.scale.lerp(
      new THREE.Vector3(
        techIsHovered ? 4 : 3,
        techIsHovered ? 4 : 3,
        techIsHovered ? 4 : 3,
      ),
      0.025,
    );

    // Rotates boxes around themselves
    meshRef.current.rotation.x = techIsHovered
      ? meshRef.current.rotation.x
      : meshRef.current.rotation.x + 0.005;
    meshRef.current.rotation.y = techIsHovered
      ? meshRef.current.rotation.y
      : meshRef.current.rotation.y - 0.005;
  });

  /*
   * State handlers
   */

  function handlePointerOver(e: ThreeEvent<PointerEvent>) {
    // Only triggers the hover if mouse is not clicked
    if (e.buttons > 0) return;
    e.stopPropagation();

    setTechIsHovered(true);
    if (props.hoveredTech === e.eventObject.name) return;
    props.setHoveredTech(e.eventObject.name);
  }
  function handlePointerOut(e: ThreeEvent<PointerEvent>) {
    // Only triggers the hover if mouse is not clicked
    if (e.buttons > 0) return;
    e.stopPropagation();

    setTechIsHovered(false);
    if (props.hoveredTech === "") return;
    props.setHoveredTech("");
  }

  return (
    <Float
      speed={1.75}
      rotationIntensity={1}
      floatIntensity={1}
      position={[0, 0, 0.05]}
      floatingRange={[0.25, 0.25]}
    >
      <mesh
        ref={meshRef}
        name={props.data.name}
        castShadow
        receiveShadow
        scale={3}
        position={props.position}
        rotation={meshRotation}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <boxGeometry args={[1, 1, 1]} />
        <BoxShader data={props.data} />
      </mesh>
    </Float>
  );
}
