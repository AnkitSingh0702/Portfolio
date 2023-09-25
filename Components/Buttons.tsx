import React from "react";
import Link from "next/link";
import {SiGithub,SiLinkedin} from "react-icons/si";
import {RiTwitterXLine} from "react-icons/ri";

type props = {
  link: string;
  name: string;
};

const Buttons: React.FC<props> = ({ link, name }) => {
  return (
    <Link href={link} target="_blank">
        <div  className='flex flex-row items-center rounded-md text-[#b0b0b9] select-none hover:-translate-y-1 hover:brightness-200 active:scale-90 ease-linear duration-100 cursor-pointer'>
          <div >
            { name === 'Github' && <SiGithub size={25}  title = " Github"/> }
            { name === 'Twitter' && <RiTwitterXLine size={25} title = "X"/> }
            { name === 'Linkdln' && <SiLinkedin size={25} title = " Linkdln"/> }
          </div>
        </div>
    </Link>
  );
};

export default Buttons;