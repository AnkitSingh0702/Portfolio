/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import Project from '../Components/Project'
import { projects as projectsData } from "./Data/data";
import { useState } from 'react';
import Techstack from '../Components/Techstack';
import Experience from './Experience';
import { work as workdata } from './Data/experience';
import Footer from './Footer';
function MainScreen() {
  const [projects, setProjects] = useState(projectsData);
  const [work ,SetWork] = useState(workdata);

  return (
    <>
    <div className="max-w-screen-md mx-auto px-8 py-8 scrollbar scrollbar-thumb">

     <div className = " mt-10 flex ">
{/* INTRO PART */}
      <div className="rounded-full bg-gradient-to-tl from-teal-300/60 to-green-200/60 shadow-lg p-[3px] ring-[5px] ring-emerald-200/10">
      <Image src = "/user2.png" alt = "Photo" width = "64" height = "64" className = "rounded-full text" />
      </div>
      <div className=' text-white font-bold ml-7 '>
      <h1 className="text-3xl font-medium text-[#b6b6b9] sm:text-4xl">Ankit Singh</h1>
      <h2 className='text-lg leading-6 text-[#909091]'>Frontend Developer</h2>
      </div>

      
    </div>
   
{/* ABOUT PART */}
      <div className = "mt-5">
      <div className=' font-semibold tracking-wide  px-1 py-2 text-xl md:text-2xl text-slate-100 select-none '>
        About
      </div>
      <div className = " bg-gradient-to-r from-white  to-teal-700 w-16 h-2 rounded-xl"></div>
     <div className='mt-7 block overflow-hidden rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70'>
     <h1 className=' font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#BDFFF3] to-[#4AC29A]'>Hi, I'm Ankit Singh!</h1>
     <p className='mt-3 text-xl text-[#b6b6b9] sm:mt-9 tracking-wide '>
     I am a Frontend Developer ,currently pursuing B.Tech Degree(4th Year) in Computer Science Engineering and I'm actively searching for full-time job opportunities to leverage my expertise and enthusiasm in a dynamic work environment.
     </p>
     </div>
      </div>


{/* TECHSTACK */}
<Techstack/>


{/* PROJECT PART */}
       <div className="mt-7">
            <div className=' font-semibold tracking-wide px-1 py-2 text-xl md:text-2xl text-slate-100  select-none'>
              Projects
            </div>
            <div className=" bg-gradient-to-r from-white  to-teal-700  w-24 h-2 rounded-xl"></div>
          </div>
  
    {/* <div className=" flex justify-between flex-wrap flex-grow basis-1/2 relative ">
        {projects.map((project) => (
          <>
          <div className="  top-10 col-span-12  rounded-md sm:col-span-6 lg:col-span-4 ">
              <Project project={project} key={project.name} />
            </div></>
        ))}
      </div> */}

<div className="flex justify-between flex-wrap flex-grow relative ">
  {projects.map((project) => (
    <div key={project.name} className="flex flex-row flex-grow basis-1/2 p-4 ">
      <Project project={project} />
    </div>
  ))}
</div>






    {/* EXPERINCE */}
      <div className="mt-7">
            <div className=' font-semibold tracking-wide  px-1 py-2 text-xl md:text-2xl text-slate-100 select-none'>
            Experience
            </div>
            <div className=" bg-gradient-to-r from-white  to-teal-700  w-24 h-2 rounded-xl"></div>
      </div>
    <div className=" flex justify-between flex-wrap flex-grow basis-1/2 relative my-3">
        {work.map((work) => (
          <>
          <div className="  top-10 col-span-2 p-2 rounded-md sm:col-span-6 lg:col-span-4 ">
              <Experience work={work}  key={work.name} />
            </div></>
        ))}
      </div>

{/* FOOTER */}
    <Footer/>


    </div>
     </>
  )
}
export default MainScreen