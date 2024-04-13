import { Html, useProgress } from "@react-three/drei";

export default function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <span className="canvas-load" />
      <div id="loader" />
      <p className="computer-loader">{`${progress.toFixed(2)}%`}</p>
    </Html>
  );
}
