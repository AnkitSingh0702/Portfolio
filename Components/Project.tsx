// /* eslint-disable @next/next/no-img-element */
// import React from 'react'
// import { data } from "./Data/data"
// import { AiFillGithub, AiFillProject } from 'react-icons/ai'
// import { FunctionComponent } from "react"
// import Link from 'next/link'

// const Project: FunctionComponent<{
//   project: data;
// }> = ({
//   project: {
//     image,
//     name,
//     Demo,
//     description,
//     github_url,
//     key_techs,
//   },
// }) => {
//   return (
//     <div className="mb-6">
//       <div className="flex flex-col sm:flex-row bg-white/5 rounded-lg overflow-hidden">
//         {/* Project Image */}
//         <div className="sm:w-[280px] bg-gradient-to-br from-blue-400/10 to-purple-400/10">
//           <img
//             src={image || "/placeholder.svg"}
//             alt={`${name} preview`}
//             className="w-full h-[200px] sm:h-full object-cover object-center"
//           />
//         </div>

//         {/* Project Details */}
//         <div className="flex-1 p-5">
//           <h3 className="text-xl font-semibold text-gray-200 mb-2">
//             {name}
//           </h3>
//           <p className="text-sm text-gray-400 mb-4">
//             {description}
//           </p>

//           {/* Tech Stack */}
//           <div className="mb-4">
//             <div className="flex flex-wrap gap-2">
//               {key_techs.map((tech) => (
//                 <span
//                   key={tech}
//                   className="px-3 py-1 text-sm text-gray-300 bg-white/10 rounded-md"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Links */}
//           <div className="flex items-center gap-4">
//             <Link
//               href={github_url}
//               target="_blank"
//               className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
//             >
//               <AiFillGithub className="w-5 h-5" />
//               <span className="text-sm">Github</span>
//             </Link>
//             {Demo && (
//               <Link
//                 href={Demo}
//                 target="_blank"
//                 className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
//               >
//                 <AiFillProject className="w-5 h-5" />
//                 <span className="text-sm">Demo</span>
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Project

"use client"
import type { data } from "./Data/data"
import { AiFillGithub, AiFillProject } from "react-icons/ai"
import type { FunctionComponent } from "react"
import Link from "next/link"
import { AnimatedTooltip } from "../Components/components/ui/animated-tooltip"
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaJs, FaCss3Alt } from "react-icons/fa"
import {
  SiFirebase,
  SiExpo,
  SiTypescript,
  SiNextdotjs,
  SiFlask,
  SiTailwindcss,
  SiScikitlearn,
  SiMongodb,
  SiExpress,
  SiFramer,
  SiFlutter,
  SiDart,
  SiMicropython,
  SiRaspberrypi,
} from "react-icons/si"
import type { IconType } from "react-icons"
import { GlowingEffect } from "./ui/glowing-effect"
import { LinkPreview } from "./ui/link-preview"

// Tech stack icons mapping
const techIcons: { [key: string]: IconType } = {
  ReactNative: FaReact,
  firebase: SiFirebase,
  Expo: SiExpo,
  Typescript: SiTypescript,
  "Next Js": SiNextdotjs,
  Flask: SiFlask,
  "Tailwind Css": SiTailwindcss,
  Python: FaPython,
  "scikit-learn": SiScikitlearn,
  "React.js": FaReact,
  MongoDB: SiMongodb,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  Firebase: SiFirebase,
  "Framer Motion": SiFramer,
  Javascript: FaJs,
  CSS: FaCss3Alt,
  Flutter: SiFlutter,
  Dart: SiDart,
  MicroPython: SiMicropython,
  "Raspberry Pi": SiRaspberrypi,
}

const Project: FunctionComponent<{
  project: data
}> = ({ project: { image, name, Demo, description, github_url, key_techs } }) => {
  // Transform key_techs into the format expected by AnimatedTooltip
  const techItems = key_techs.map((tech, index) => ({
    id: index + 1,
    name: tech,
    designation: tech,
    icon: techIcons[tech] || FaDatabase, // Fallback to a generic database icon if not found
  }))

  return (
    <div className="mb-6">
      <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} variant="default" />
        <div className="relative flex h-full flex-col sm:flex-row bg-white/5 rounded-xl overflow-hidden border border-white/10 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          {/* Project Image */}
          <div className="sm:w-[280px] bg-gradient-to-br from-blue-400/10 to-purple-400/10">
            <img
              src={image || "/placeholder.svg"}
              alt={`${name} preview`}
              className="w-full h-[200px] sm:h-full object-cover object-center"
            />
          </div>

          {/* Project Details */}
          <div className="flex-1 p-5">
            <h3 className="text-xl font-semibold text-gray-200 mb-2">{name}</h3>
            <p className="text-sm text-gray-400 mb-4">{description}</p>

            {/* Tech Stack with AnimatedTooltip */}
            <div className="mb-4">
              <AnimatedTooltip items={techItems} />
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">

              <LinkPreview
                url={github_url}
                // target="_blank"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors mt-5"
              >
                <AiFillGithub className="w-5 h-5 " />
                <span className="text-sm">Github</span>
              </LinkPreview>
              {Demo && (
                <LinkPreview
                  url={Demo}
                  // target="_blank"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors mt-5"
                >
                  <AiFillProject className="w-5 h-5" />
                  <span className="text-sm">Demo</span>
                </LinkPreview>

                
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project

