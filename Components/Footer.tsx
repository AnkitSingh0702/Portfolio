import React from "react";
import { social_links } from "../Components/Data/Social";
import Buttons from "./Buttons";

const Footer = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="max-w-screen-md mt-6 mx-5 md:mx-auto w-full h-[1px] bg-[#27272a]"></div>
      </div>

      <div className="flex flex-col justify-center items-center py-5  md:flex-row ">
        <div className="flex flex-row mt-4 md:mt-0 gap-x-4">
          {social_links.map((e, i) => {
            return <Buttons key={i} link={e.link} name={e.name} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Footer;