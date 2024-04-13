import { Html, useProgress } from "@react-three/drei";

export default function SimpleLoader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <span className="canvas-load" />
      <p className="computer-loader">{`${progress.toFixed(2)}%`}</p>
    </Html>
  );
}
