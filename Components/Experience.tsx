"use client"
import type { FunctionComponent } from "react"
import type { experience } from "./Data/experience"
import Link from "next/link"
import { GlowingEffect } from "./ui/glowing-effect"

const Experience: FunctionComponent<{
  work: experience
}> = ({ work: { name, certificate, description, tags, date } }) => {
  return (
    <div className="mb-6">
      <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} variant="default" />
        <div className="relative flex h-full flex-col bg-white/5 rounded-xl overflow-hidden border border-white/10 dark:shadow-[0px_0px_27px_0px_#2D2D2D] p-5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <Link
              href={certificate}
              target="_blank"
              className="text-transparent font-bold text-2xl bg-clip-text bg-gradient-to-r from-[#BDFFF3] to-[#4AC29A]"
            >
              {name}
            </Link>

            <p className="text-base md:text-lg text-[#7d7d85] cursor-pointer mt-2 md:mt-0">{date}</p>
          </div>

          <div className="flex flex-row flex-wrap mt-1 mb-4">
            {tags.map((e, i) => (
              <div key={i} className="flex flex-row my-1 mr-2">
                <div className="bg-white/5 text-[#b0b0b9] items-center px-1.5 py-1 rounded-md font-noto font-medium text-xs md:text-sm select-none">
                  {e}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xl text-[#b6b6b9] tracking-wide">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Experience

