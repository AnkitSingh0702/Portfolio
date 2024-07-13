/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { data } from "./Data/data";
import { AiFillGithub, AiFillProject, AiOutlineRight } from 'react-icons/ai';
import { FunctionComponent, useState } from "react";
import Link from 'next/link';

const Techstack:FunctionComponent<{
  project: data;
}> = ({
  project: {
   image,
    name,
    Demo,
    description,
    github_url,
    key_techs,
  },
}) => {
  return (
    
    <>
    
    <div className="mt-7 ">
 

 
      <div className=" w-[20rem]   min-h-full mt-4 rounded-2xl bg-white/5 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70">


        <div className=" p-7 flex-row">
           <img src = {image} alt = "IMAGE" className='w-full rounded-md h-40 object-cover object-center mb-3'/>
          
          <h5 className="mb-2 text-transparent font-bold text-2xl bg-clip-text bg-gradient-to-r from-[#BDFFF3] to-[#4AC29A]">{name}</h5>


          

          <p className="   text-xl text-[#b6b6b9] sm:mt-4 tracking-wide">{description}</p>
          <div className='mt-4'>

            <h1 className="  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Stack</h1>
            <div className=" flex flex-wrap ">
              {key_techs.map((tech) => (
                // eslint-disable-next-line react/jsx-key
                <div className='flex flex-row my-1 mr-1'>

                  <span
                    key={tech}
                    className="bg-[#3c3c3f] text=[#b0b0b9] items-center px-1.5 py-1 rounded-md  text-xs"
                  >
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className=" mt-4 flex justify-between space-x-2">
            <Link
              href={github_url}
              target='_blank'
              className="flex items-center px-4 py-2 space-x-3 text-lg  dark:bg-dark-200 ease-linear duration-100 text-[#afafb4] hover:text-[#e3e3eb] cursor-pointer "
            >
              <AiFillGithub /> <span>Github</span>

            </Link>

            {Demo !== '' && <a href={Demo} target='_blank'
              className="flex items-center px-4 py-2 space-x-3 text-lg  dark:bg-dark-200 dark:bg-dark-200 ease-linear duration-100 text-[#afafb4] hover:text-[#e3e3eb] cursor-pointer"
            >
              <AiFillProject /> <span>Project</span>
            </a>}
          </div>
        </div>
      </div>

     

    </div>
    </>
    
    
  )
}

export default Techstack