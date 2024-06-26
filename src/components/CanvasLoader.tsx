import { Html, useProgress } from "@react-three/drei";

export default function CanvasLoader(props: { className?: string }) {
  const { progress } = useProgress();

  return (
    <Html center className={props.className ?? undefined}>
      <span className="canvas-load" />
      <div id="loader" />
      <p className="computer-loader">{`${progress.toFixed(2)}%`}</p>
    </Html>
  );
}
