import SectionWrapper from "../container/SectionWrapper";
import TechCanvas from "../components/canvases/TechCanvas";

export default function Tech() {
  return (
    <SectionWrapper className="h-screen">
      <TechCanvas />
      <p className="mt-3 text-secondary text-[17px] max-w-7xl w-full leading-[30px] text-right">
        List view is in my resume below
      </p>
    </SectionWrapper>
  );
}
