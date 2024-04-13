import SectionWrapper from "../container/SectionWrapper";
import { technologies } from "../constants";
import BallCanvas from "../components/canvases/BallCanvas";

export default function Tech() {
  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-10 mb-12">
        {technologies.map((technology, index) => (
          <div className="w-28 h-28 select-none" key={technology.name}>
            <BallCanvas imgUrl={technology.icon} index={index} />
            <h3 className="text-center text-white mt-2">{technology.name}</h3>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
