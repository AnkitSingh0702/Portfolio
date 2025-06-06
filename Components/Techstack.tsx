import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiExpress, SiReact, SiRedux, SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import Marquee from "react-fast-marquee";

function Techstack() {
  const techStackItems = [
    { icon: <IoLogoJavascript color="#d8be4b" />, name: "JavaScript" },
    { icon: <SiTypescript color="#38bdf8" />, name: "TypeScript" },
    { icon: <FaJava size={24} />, name: "Java" },
    { icon: <TbBrandNextjs size={25} />, name: "Next.js" },
    { icon: <FaNodeJs size={20} color="#026e00" />, name: "Node.js" },
    { icon: <SiExpress size={20} />, name: "Express.js" },
    { icon: <SiReact size={20} color="#38bdf8" />, name: "React" },
    { icon: <TbBrandReactNative size={20} color="#38bdf8" />, name: "React Native" },
    { icon: <SiRedux size={20} color="#764abc" />, name: "Redux" },
    { icon: <SiTailwindcss size={20} color="#38bdf8" />, name: "Tailwind CSS" },
  ];

  return (
    <div className="mt-7">
      <h2 className="font-semibold tracking-wide px-1 py-2 text-2xl text-slate-100 select-none">
        TechStack
      </h2>

      <div className="overflow-hidden relative mt-5 group">
        <Marquee pauseOnHover speed={20}>
          <div className="flex gap-6">
            {techStackItems.map((tech, index) => (
              <div
                key={index}
                className="flex items-center bg-white/5 text-[#b6b6b9] px-3 py-2 rounded-md text-base whitespace-nowrap hover:bg-white/10 hover:shadow-md"
              >
                <span className="text-xl">{tech.icon}</span>
                <span className="ml-2">{tech.name}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Techstack;
