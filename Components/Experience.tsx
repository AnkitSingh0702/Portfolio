import React from "react";
import { FunctionComponent } from "react";
import { experience } from "./Data/experience";
import Link from "next/link";

const Experience: FunctionComponent<{
  work: experience;
}> = ({ work: { name, certificate, description, tags , date } }) => {
  return (
    <div className=" mt-3">
      <div className=" mt-4 rounded-lg bg-white/5 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70">
        <div className="p-3">
          {/* <div className="flex flex-row   ">
            <Link
              href={certificate}
              target="_blank"
              className="mb-2 text-transparent font-bold text-2xl  bg-clip-text bg-gradient-to-r from-[#BDFFF3] to-[#4AC29A] "
            >
              {name}
            </Link>
            <p className="mt-1 flex justify-between items-stretch ease-linear duration-100 text-xs md: flex-col text-base text-[#7d7d85] cursor-pointer">{date}</p>
          </div> */}

<div className="flex flex-col md:flex-row justify-between items-start md:items-center">
  <Link
    href={certificate}
    target="_blank"
    className="mb-2 text-transparent font-bold text-2xl bg-clip-text bg-gradient-to-r from-[#BDFFF3] to-[#4AC29A]"
  >
    {name}
  </Link>
  
  {/* Date at the right in desktop mode and below heading in mobile */}
  <p className=" md: text-base md:text-lg text-[#7d7d85] cursor-pointer">
    {date}
  </p>
</div>

          {/* <div className="flex flex-row my-1 mr-2 gap-4">
          <p className="bg-[#27272a] text-[#b0b0b9] items-center px-1.5 py-1 rounded-md font-noto font-medium text-xs md:text-sm select-none">
            {tags}
          </p>
          </div> */}
           <div className='flex flex-row flex-wrap md: mt-1 '>
        {tags.map((e, i) => {
          return (
            <div key={i} className='flex flex-row my-1 mr-2'>
              <div className='bg-white/5 text-[#b0b0b9] items-center px-1.5 py-1 rounded-md font-noto font-medium text-xs md:text-sm select-none'>
                {e}
              </div>
            </div>
          );
        })}
      </div>
          <p className="  text-xl text-[#b6b6b9] tracking-wide sm:mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
