/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Project from '../Components/Project'
import { projects as projectsData } from "./Data/data";
import { useState } from 'react';
import Techstack from '../Components/Techstack';
import Experience from './Experience';
import { work as workdata } from './Data/experience';
import Footer from './Footer';
import { TracingBeam } from './components/ui/tracing-beam';
import InteractiveHoverButton from './components/ui/interactive-hover-button';
import { TypewriterEffect } from './components/ui/typewriter-effect';
import { annotate, annotationGroup } from "rough-notation";
import { BackgroundBeams } from './ui/background-beams';
import { Spotlight } from './ui/spotlight-new';
import GitHubCalendar from 'react-github-calendar';
function MainScreen() {
  const [projects, setProjects] = useState(projectsData);
  const [work ,SetWork] = useState(workdata);
// const word = "Hey, I'm Ankit !"
const word = [
  {
    text: "Hey",
    className: "font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#BDFFF3] to-[#4AC29A] md: whitespace-nowrap overflow-hidden text-ellipsis",
  },
  {
    text: "I'm",
    className: "font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#BDFFF3] to-[#4AC29A] md: whitespace-nowrap overflow-hidden text-ellipsis",
  },
  {
    text: "Ankit",
    className: "font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#BDFFF3] to-[#4AC29A] md: whitespace-nowrap overflow-hidden text-ellipsis",
  },
  {
    text: "Singh",
    className: "font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#BDFFF3] to-[#4AC29A] md: whitespace-nowrap overflow-hidden text-ellipsis",
  },
  {
    text: "!",
    className: "font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#BDFFF3] to-[#4AC29A] md: whitespace-nowrap overflow-hidden text-ellipsis",
  },
];

const jobRef = useRef(null);

  useEffect(() => {
    if (jobRef.current) {
      const annotation = annotate(jobRef.current, {
        type: "underline",
        color: "#4AC29A", // Customize the color
        padding: 2,       // Optional padding for the annotation
      });
      annotation.show();
    }
  }, []);


  return (
    <>
      <div className="fixed inset-0 -z-10">
        {/* <BackgroundBeams /> */}
        <Spotlight />
      </div>
     <div className="min-h-screen ">
    <div className="max-w-screen-md mx-auto px-7 py-7 ">
    <TracingBeam className=' '>

     <div className = " mt-10 flex ">
{/* INTRO PART */}
<div className='w-full  sm:px-6 lg:px-8 py-4'>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-8'>
        <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-7 text-center sm:text-left'>
          <div className="rounded-full bg-gradient-to-tl from-teal-300/60 to-green-200/60 shadow-lg ring-[5px] ring-emerald-200/10 p-[3px] flex-shrink-0">
            <Image 
              src="/pic2.png" 
              alt="Photo" 
              width={58} 
              height={58} 
              className="rounded-full object-cover w-[58px] h-[58px]" 
              priority
            />
          </div>
          
          <div className='text-white font-bold'>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#b6b6b9]">
              Ankit Singh
            </h1>
            <h2 className='text-base sm:text-lg leading-6 text-[#909091]'>
              Frontend Developer
            </h2>
          </div>
        </div>

        <div className='flex-shrink-0'>
          <InteractiveHoverButton />
        </div>
      </div>
    </div>
      

      
    </div>
   
{/* ABOUT PART */}
      <div className = "mt-5">
      <div className=' font-semibold tracking-wide  px-1 py-2 text-2xl md:text-2xl text-slate-100 select-none '>
        About
      </div>
      {/* <div className = " bg-gradient-to-r from-white  to-teal-700 w-16 h-2 rounded-xl"></div> */}
     <div className='mt-3 block overflow-hidden rounded-lg bg-white/5 p-4 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70'>
     {/* <TextGenerateEffect words={word} /> */}
      <TypewriterEffect words={word} />
     {/* <h1 className=' font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#BDFFF3] to-[#4AC29A] md: whitespace-nowrap overflow-hidden text-ellipsis'>Hey, I'm Ankit !</h1> */}
     <p className='mt-3 text-xl text-[#b6b6b9] sm: tracking-wider '>
  I am a Frontend Developer 👨🏻‍💻, Recently completed my B.Tech Degree in Computer Science & Engineering and I'm actively searching for <span ref={jobRef}><a href="">full-time job opportunities</a></span> to leverage my expertise and enthusiasm in a dynamic work environment.
</p>


     </div>
      </div>


{/* TECHSTACK */}
<Techstack/>
<div className="mt-6 overflow-x-auto">
  <div className="min-w-[350px] sm:min-w-[unset]">
    <GitHubCalendar
      username="AnkitSingh0702"
      colorScheme="dark"
    />
  </div>
</div>




{/* PROJECT PART */}
<div className="mt-7">
  <div className="font-semibold tracking-wide px-1 py-2 text-2xl md:text-2xl text-slate-100 select-none">
    Projects
  </div>
</div>

<div className="flex flex-col space-y-6 mt-4">
  {projects.map((project) => (
    <Project key={project.name} project={project} />
  ))}
</div>








    {/* EXPERINCE */}
      <div className="mt-7">
            <div className=' font-semibold tracking-wide  px-1 py-2 text-2xl md:text-2xl text-slate-100 select-none'>
            Experience
            </div>
            {/* <div className=" bg-gradient-to-r from-white  to-teal-700  w-24 h-2 rounded-xl"></div> */}
      </div>
    <div className=" flex flex-col md:flex-col justify-between md:text-2xl text-xl ease-linear duration-150 ">
        {work.map((work) => (
          <>
          <div className="  top-10 col-span-2 p-2 rounded-md sm:col-span-6 lg:col-span-4 ">
              <Experience work={work}  key={work.name} />
            </div></>
        ))}
      </div>

{/* FOOTER */}
    <Footer/>


    </TracingBeam>
    </div>
    </div>
     </>
  )
}
export default MainScreen