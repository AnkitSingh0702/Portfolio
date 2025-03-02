import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiExpress, SiReact, SiRedux, SiTailwindcss } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import Marquee from "react-fast-marquee";
function Techstack() {
  return (
    <div className="mt-7">
      <div className="font-semibold tracking-wide px-1 py-2 text-2xl md:text-2xl text-slate-100 select-none">
        TechStack
      </div>

      {/* Scrolling container */}
      
      <div className="overflow-hidden relative mt-5 group">
        <Marquee autoFill pauseOnHover speed={20}>
        <div className="flex gap-x-7 ">
          {/* Individual items */}
          <div className="flex bg-white/5 text-[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
        <IoLogoJavascript color="#d8be4b" />
        <p className="ml-2">JavaScript</p>
          </div>

          <div className="flex bg-white/5 text-[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
        <SiTypescript color="#38bdf8" />
        <p className="ml-2">Typescript</p>
          </div>

          <div className="flex bg-white/5 text-[#b6b6b9] items-center px-2.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
        <FaJava size={24} />
        <p className="ml-4">Java</p>
          </div>

          <div className="flex bg-white/5 text-[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
        <TbBrandNextjs size={25} />
        <p className="ml-3">NextJs</p>
          </div>

          <div className="flex bg-white/5 text-[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
        <FaNodeJs size={20} color="#026e00" />
        <p className="ml-4">Node Js</p>
          </div>

          <div className="flex bg-white/5 text-[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
        <SiExpress size={20} />
        <p className="ml-2">Express Js</p>
          </div>

          <div className="flex bg-white/5 text-[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
        <SiReact size={20} color="#38bdf8" />
        <p className="ml-3">React</p>
          </div>

          <div className="flex bg-white/5 text-[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
        <TbBrandReactNative size={20} color="#38bdf8" />
        <p className="ml-2">ReactNative</p>
          </div>

          <div className="flex bg-white/5 text-[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
        <SiRedux size={20} color="#764abc" />
        <p className="ml-3">Redux</p>
          </div>

          <div className="flex bg-white/5 text-[#b6b6b9] items-center px-1.5 py-2 rounded-md text-base hover:bg-white/10 hover:shadow-surface-elevation-medium">
        <SiTailwindcss size={20} color="#38bdf8" />
        <p className="ml-2">TailwindCss</p>
          </div>
        </div>
        </Marquee>
      </div>



      
      
    </div>
  );
}

export default Techstack;
