import {
  Decal,
  Float,
  OrbitControls,
  useTexture
} from "@react-three/drei";
import { Euler, Vector3 } from "three";

export default function Ball(props: { imgUrl: string; index: number }) {
  const [decal] = useTexture([props.imgUrl]);

  const decalsArray = [
    { position: new Vector3(0, 0, 0.5), rotation: new Euler(0, 0, 0) }, // Front
    { position: new Vector3(0, 0, -0.5), rotation: new Euler(0, Math.PI, 0) }, // Back
    {
      position: new Vector3(-0.5, 0, 0),
      rotation: new Euler(0, -Math.PI / 2, 0),
    }, // Left
    {
      position: new Vector3(0.5, 0, 0),
      rotation: new Euler(0, Math.PI / 2, 0),
    }, // Right
    {
      position: new Vector3(0, 0.5, 0),
      rotation: new Euler(-Math.PI / 2, 0, 0),
    }, // Top
    {
      position: new Vector3(0, -0.5, 0),
      rotation: new Euler(Math.PI / 2, 0, 0),
    }, // Bottom
  ];

  // TODO: Make infinite motion or with scroll with orbit controls

  return (
    <>
      <OrbitControls enableZoom={false} />
      <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <mesh castShadow receiveShadow scale={3}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#aaa6c3"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          {decalsArray.map((decalSide, index) => (
            <Decal
              key={`box-decal-${index}`}
              position={decalSide.position}
              rotation={decalSide.rotation}
              scale={0.9}
              map={decal}
            />
          ))}
        </mesh>
      </Float>
    </>
  );
}
