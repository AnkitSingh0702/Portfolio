import React from "react";
import { FunctionComponent } from "react";
import { experience } from "./Data/experience";
import Link from "next/link";

const Experience: FunctionComponent<{
  work: experience;
}> = ({ work: { name, certificate, description, tags } }) => {
  return (
    <div className=" mt-7">
      <div className=" mt-4 rounded-xl bg-white/5 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70">
        <div className="p-7">
          <div className="flex  ">
            <Link
              href={certificate}
              target="_blank"
              className="mb-2 text-transparent font-bold text-2xl  bg-clip-text bg-gradient-to-r from-[#BDFFF3] to-[#4AC29A]"
            >
              {name}
            </Link>
          </div>
          <p className="bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md text-sm  w-20">
            {tags}
          </p>
          <p className="  text-xl text-[#b6b6b9] tracking-wide sm:mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
