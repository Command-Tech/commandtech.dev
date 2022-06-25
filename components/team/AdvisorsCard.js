import Image from "next/image";
import Highlight from "../Highlight";

export default function AdvisorsCard({ src, name, position }) {
  return (
    <div className="border-4 border-navy dark:border-white rounded-xl relative">
      <div className="flex justify-center">
        <img src={src} className="rounded-xl h-full w-auto overflow-hidden" />
      </div>
      <div className="absolute bottom-10 left-2">
      <Highlight><span className="uppercase">{position}</span></Highlight>
      </div>
      <div  className="absolute bottom-3 left-2">
      <Highlight>{name}</Highlight>
      </div>
    </div>
  );
}
