import React from "react";
import { social_links } from "../Components/Data/Social";
import Buttons from "./Buttons";

const Footer = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="max-w-screen-md mt-6 mx-5 md:mx-auto w-full h-[1px] bg-[#27272a]"></div>
      </div>

      <div className="max-w-screen-md mx-auto w-full px-5 py-6 flex flex-col md:flex-row items-center justify-between gap-y-4">
        {/* Social Icons */}
        <div className="flex gap-x-4">
          {social_links.map((e, i) => (
            <Buttons key={i} link={e.link} name={e.name} />
          ))}
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          © 2024 Developed with <span className="text-green-500">💚</span> by AnkitSingh
        </div>
      </div>
    </>
  );
};

export default Footer;
